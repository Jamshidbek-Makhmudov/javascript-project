/**
 url = link | silke | endpoint

 ishlatilinishi:  then, promise, async - await, try-catch  lar bilan ishlatilinadi

 javascriptni fetch() deb atalgan build in funtioni bor

 payload- bu biz backendga jonatgan malumot
 formulasi:
      fetch(url. config)
			bundan then yozsak then oz ichida callback function oladi, undan keyin yana islatgancha then yozsak boladi 2-callback malumot 1-callbackdan nima return bolib qaytsa shu otadi agar return bolmasa hech narsa otmaydi,  error kelsa, uni catchda ushlab olamiz. lekin bu catch har safar ham backendan keladigan errorni ushlab qola olmaydi
			shuning uchun reactda bizga bizga qoshimga kutbxona kerak boladi erroni ushlah uchun
 */
//1.then bilan

/**
 
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((res) => res.json())
 .then((res) => console.log(res))
 .catch((err) => console.log(err));
 
 */

//2.promise bilan then bilan:
/**
 fecthni ozi doim promisega qaytadi
 promise ni ichida esa then yotadi yani bizga promiseda hamm then ishlatamiz
 */

// let response = fetch("https://jsonplaceholder.typicode.com/users")
// response.then((res) => res.json()
// .then(res=>console.log(res)));

//3.promise bilan async await bilan:
/**
 async  doim promise bilan ishlidi fetch bizga promise qaytadi dedik demak biz fetchdan keladigan malumotni await qilsak boladi
 */


// const getData = async()=>{ 
// 	let res = await fetch("https://jsonplaceholder.typicode.com/users")
// 	// console.log(res);
// 	let data = await res.json()
// 	console.log(data);
	
	
// }


//ekranga malumotlarni chiqarish fetch  then bilan:
/**
 innerHtml bersihdan qochoish kerak sababi sql injectionga olib keladi
 */
const getData = () => { 
	data_list.innerText="loading..."
	fetch("https://jsonplaceholder.typicode.com/users",
		{
			method: "Post",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer token"

			},
			body: JSON.stringify({
				username: "admin",
				password:'12345'
	})
		}
	).then(res => res.json())
		.then(res => { 
			console.log(res)
			data_list.innerHTML = `<h2>all data</h2>`
			res.forEach(ele => { 

				let div = document.createElement("div")
				div.innerHTML = `<b>${ele.id} </b><span>${ele.name}</span> <button onclick="onSelect(${ele.id})">select</button>`
				data_list.append(div)
			})
		}
		
	)


}

const onSelect = async(id) => {
	let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	let result = await data.json()
	single.innerHTML = `<h2>selected</h2><b>${result.id} </b><span>${result.name}</span> <button onclick="onSelect(${result.id})">delete</button>`
				// single.append(div)
	
 };


/** 2-html */
/**
 then ichida res.json()  bunda har doim ham json() yozmaymiz agar keladigan maliumot json holatda kelsa json text  xolatda kelsa 
  res.text() yoziladi qolganlari:

	res.text()
	res.json()
	res.blob()   // bu URL uchun
	res.formData()
	res.arrayBuffer()
 */
const frEvent = document.querySelector(".frEvent");
const file = document.querySelector(".file");
frEvent.onSubmit = (e) => { 
	e.preventDefault();
	let body = new FormData(frEvent)

	/** blob url uchun
	 
	let imgUrl = URL.createObjectURL(file.files[0])
	console.log(imgUrl, "url", );
	*/

	console.log(file.files[0]);

	body.append("userImage", file.files[0])
	body.append("roleIdSet", 1)
	/** appendan tashqari get
	                     has
	                     delete qilsa boladi delete qilsa shu delete qilingzan malumot post bolib ketmaydi
	 */

	fetch("https://httpbin.org/post", {
		method: POST,
		body,
	}
	).then(res => res.json()).then(res => console.log(res))
	//append forDataga qoshimcha malumot biriktiradi 2ta param qabul qiladi 1- biriktiriladigan malumnotga name bberish uchun, 2- osha biriktiriladigan  malumot
};

//blob uchun:
