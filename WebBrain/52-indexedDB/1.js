/**
 indexedDB || windoow.indexedDB - Database
 much more powerfull than LocalStorage
 built-in mechanizm form schema versening
 data stored visitors home directory with browser setting 
 it is client-side not server-side

 indexedDBdagi hama narsa Promise, shunign uchun har safar then qaytaradi
 */
let request = window.indexedDB.open("jamshid", 7);
//buni 2 xil yol bilan tekshiramiz: succes, fail yoki version open ozini ichida 1-nomi 2-version 
var db=null
request.onsuccess = (event) => { 
	/** ikalasi bir xil
	  
	db = event.target.result
	db=request.result
	*/
	db = event.target.result
	console.log("successfuly created", event);
	drawData()
};
request.onerror = (event) => { 
	console.log("fail", event);
	//bu avval bogan nom bilan qayta create qilinsa ishlaydi
};
request.onupgradeneeded = (event) => {
	console.log('upgraded', event);
	db = request.result
	 //db.deleteObjectStore("frontend")
	/**
	 * 
	let store= db.createObjectStore("store", oprtion)
	let store= db.deleteObjectStore("store")

	version tekshirish uchun
	request.version || event.oldVersion || event.newVersion
	 */
	if (!db.objectStoreNames.contains("frontend")) { 
		let store = db.createObjectStore("frontend", { keyPath: "id" })
		let indexName = store.createIndex("indexName", "name", { unique: false })
		let indexAge = store.createIndex("indexAge", "age", { unique: false })
		indexAge.onsuccess = () => { 
			console.log("indexAge success");
			
		}
		indexName.onsuccess = () => {
			console.log("indexedName");
			
		 }


		
		store.onsuccess = () => { 
			console.log('store creatred');
			
		}
		store.onerror = (event) => { 
			console.log('store failed');	
		}
	}
	
	//bu version ozgarganda ishlaydi
	
};

/**Transaction- let trans= db.transaction(store, type)
 oncomplate() / onerror()
 type readonly / readwrite
 let user =  trans.objectStore(store)
 user.put() update
 user.add() add
 user.getAll() return arrays
 user.get(id) return one object
 user.delete(key) delete

 */
let id = new Date()
let uuid = id.getSeconds()
//add users
create.onclick = () => { 
	let user= {
		id:uuid,
		firstName:firstName.value,
		lastName:lastName.value,
		age: Number(age.value),
	}
	let transaction = db.transaction("frontend", "readwrite") //qayerga qiladi
	let users = transaction.objectStore("frontend"); //qaysi yacheykaga qiladi
	let addEvent = users.add(user)
	addEvent.onsuccess = () => { 
		console.log("user created" );
		

	};
	addEvent.onerror = () => {
		console.log("user creation failed");
		
	};
	let res = users.getAll()
	res.onsuccess = () => { 
		drawData()	
	};
};
//delete users
function del(id) { 
	let tr = db.transaction("frontend", "readwrite")
	let user = tr.objectStore("frontend")
	let dl = user.delete(id)
	dl.onsuccess = () => { 
		console.log("user deleted")
		window.location.reload()
	};
}
//display users
function drawData() {
	list.innerHTML = null
	let tr = db.transaction("frontend", "readonly")
	let users = tr.objectStore("frontend")

	//bu build-in function bolib sort qilib olisb kelganda lowerbound eozini ichiga kiritlgan numberdan kattasini olib keladi, ikkinchi parametrdagi true esa birinchi parametr ni ham olib kelmaydi unique trueni qisqartmasi degani
	let range = IDBKeyRange.lowerBound(2,true)
	let str_range = IDBKeyRange.bound(2,10,false,true)//1-qaysi biridan boshlab 2-qaysi birigacha 3va4 validatio
	let string_range = IDBKeyRange.bound("A","B") //string uchun
	let string_range_next = IDBKeyRange.bound("a","z")
	let only = IDBKeyRange.only(2)// faqat bittasini olib keladi

	let data = users.getAll()
	//index bilan ishlashni yashi tarafi qaysi birini chaqirse ozi sort qilib beradi

	let ix = users.index("indexName").getAll()
	let grade = users.index("indexAge").getAll(range)
	let str_grade = users.index("indexAge").getAll(str_range)
	let str_grade_next = users.index("indexAge").getAll(string_range)
	let str_grade_next2 = users.index("indexAge").getAll(string_range_next)
	let str_grade_next3 = users.index("indexAge").getAll(only)
	str_grade.onsuccess = ()=> { 
		console.log(ix.result,"result");
		
	}
	grade.onsuccess = ()=> { 
		console.log(ix.result,"result");
		
	}
	ix.onsuccess = ()=> { 
		console.log(ix.result,"result");
		
	}
	
	data.onsuccess = () => {
		data.result.forEach(element => { 
					let div = document.createElement('div')
			div.innerHTML = `<h4> ${element.id} <span style="color:red">${element.firstName} <span style="color:green">${element.lastName}</span> ${element.age}</span><button onclick="del(${element.id})">delete</button><button onclick="updateUser(${element.id})">update</button></h4>`
			list.append(div)
		})

	 }
	
	
}
 
const updateUser = (id) => { 

			let tr = db.transaction("frontend", "readwrite")
	let users = tr.objectStore("frontend")
	let up = users.put(...{ user },{ id:id, firstName: firstName.value, lastName: lastName.value,	age:age.value,})
	up.onsuccess = () => {
		drawData()
	 }

};