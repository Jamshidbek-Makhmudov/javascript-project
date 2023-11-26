/**
 Cookies: 
 
 */
/**
 LocalStorage: 
   methods:
           setItem(key, value)
					 getItem(key)
					 removeItem(key)
					 clear()
					 key(index)
					 length
					 Object.keys
 
 */
window.onload = () => { 
	console.log(localStorage.getItem('count'));
	console.log(localStorage.getItem('title'));
	count.innerText=localStorage.getItem('count') || 0
	title.innerText=localStorage.getItem('title') || ""
	

}
const plus = () => { 
	count.innerText = eval(`${count.innerText}+1`)
	localStorage.setItem('count', count.innerText)
	
}
const minus = () => { 
	count.innerText= eval(`${count.innerText}-1`)
	localStorage.setItem('count', count.innerText)
}
const onChangeTitle = (event) => {
	title.innerText = event.target.value
	localStorage.setItem('title', title.innerText)
	
}
del.onclick = () => { 
	localStorage.removeItem('count')
}
clear.onclick = () => { 
	localStorage.clear()
}

console.log(Object.entries(localStorage)); //object korinishida chiqarib beradi keyni chiqardi
for (let val of Object.values(localStorage)) {
	console.log(val);
	

} //array korinishida chiqarib beradi

/**
 SessionStorage: 

    methods:
           setItem(key, value)
					 getItem(key)
					 removeItem(key)
					 clear()
					 key(index)
					 length
					 Object.keys

					 LocalStorage bilan bir xil

 */

	//objectlarni set qilish:
let server = [
	{id:1, product:"apple"},
	{id:2, product:"ornage"},
	{id:3, product:"peach"},
	{id:4, product:"grape"},
	{id:5, product:"pineapple"},
]
let products= JSON.parse( sessionStorage.getItem("products"))||server
const getData = () => {
	products.forEach((item) => { 

		let div = document.createElement("div")
		div.style="cursor:pointer"
		div.innerHTML = `${item.product}`
		div.addEventListener("click", () => { 
			let res = products.filter(val => val.id !== item.id)
			list.innerHTML = null
			products = res
			sessionStorage.setItem("products", JSON.stringify(products))
			getData()

		})
		list.append(div)
	})

 }
getData()
	

/**
 Cookes
 vaqt belgilab qoysa boladi ochib ketadigan vaqtinii;
 expire bilan bersa gmt formta new date bilan qiymat belgiolsa osha vaqt kelganda ochib ketadi
 max-age bilan bersa max0age oziga sekundlarni oladi va qancha sekundan keyin ochib ketishini belgilab qoygan bolamiz

 session cookie bu browser yopilishi bilan ochib ketadigan cookiega aytiladi
 
 */
let date = new Date(2023, 1, 3);
date = date.toUTCString();
document.cookie(`data=jamshid; expire=${date}`);
document.cookie(`data=jamshid; max-age=1000`);
document.cookie(`data=jamshid;`);


/**
 cookie flag:
 
 cookieni secure qilish:
 samesite=strict:
 boshqa joydan malumot olib kelishga ruxsat bermaydi
 
 samesite=tax:
 boshqa joydan malumot olib kelishga ruxsat beradi lekin faqat get request bera oladi 
 boshqa post put delete request larini bera olmaydi

 bu securitylarni ishlatishdan maqsad malumot ogirlanishi oldini olish uchun kersak: yani:
 XSRF attackni oldini olish uchun
 Cross-Site Request Forgery- yani biror kishi cookiedan malumotlarni ovolib uni boshqa linkdan yuborib malumotni ogrilashi mumkin.
 
 */
document.cookie(`data=jamshid; secure`);