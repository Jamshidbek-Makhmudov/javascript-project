/*
console.log(window.location);
console.log(document.location); //ikalsai bir xil
*/

/**
 window.location ni ichida bir qamcha malumotlar bor ulardan:

 hash: ""
host: "127.0.0.1:5500"
hostname: "127.0.0.1"
href: "http://127.0.0.1:5500/45-fetch/1.html"
origin: "http://127.0.0.1:5500"
pathname: "/45-fetch/1.html"
port: "5500"
protocol: "http:"
reload: ƒ reload()
search: ""

 */
// let url = new URL('https://search.kyobobook.co.kr/search?keyword=asdasd&gbCode=TOT&target=total')
let url = new URL('/search?keyword=asdasd&gbCode=TOT&target=total', 'https://search.kyobobook.co.kr');
/**
 new URL ni ozini ichida 2ta qiymat oladi, 1-path bolsa 2-base deyiladi base ga asosiy main urlni beramiz
 yoki obshiy bitta qilib yozib ketsa ham boladi
 */
console.log(url.search);
console.log(url.href);
let search = url.searchParams
console.log(search);
search.get("adress"); //bitta, malumotni olib kelish uchun
search.getAll("adress"); //bir nechta malumotni olib kelish uchun
search.delete("adress")
search.get("adress")
search.set("adress","andijon") // set 2ta param qabul qiladi key va value
/**
 append

delete

entries

forEach

get

getAll

has

keys

set

size

sort

toString

values


methodlari bor
 */

// let url2 = new URL("https://rent-houze.netlify.app/properties");
let url2 = new URL(window.location);
let search2 = url2.searchParams; //append,get,set,has

address.value=search2.get("address")
city.value=search2.get("city")
zip.value = search2.get("zip")

const replace = (value, name) => { 
	if (!value) {
		search2.delete(name);
	} else { 

		search2.set(name, value)
		//append bilan setni fariq set toliqligicha yuklab ketsa append har bir actionni yuklab ketadi
	}
	path.innerText=url2.href
	console.log(value);
};

let div = document.createElement("a")
const onChangeValue = ({ target: { value, name } }) => { 
	div.href = replace(value, name) 
	div.click()

	
};