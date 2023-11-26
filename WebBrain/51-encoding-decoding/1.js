/**
 url laerni encoding qilmasak uni ichidagi bosh qator kelsa qandaydir ishoralar kelsa hash belgisi kelsa bu urlni buzib qoyadi
  new URL(`http://localhostadasdeada`); bilan berilsa bu yaxshi ishlaydi va ozi encode decode qilib beradi. lekin bu ham # belgini hash deb chunib biz hohlamagan natijalarni berib qoyishi mumkin
	shuninh uchun encdoign qilish kerak
	encode ni URI va URIComponent degani bor URI  %#+&!@ lardan tashqari narsalarni encode qiladi component esa hammasni encode qiladi demak biz component bilan birga ishlatishimiz kerak ekan:

 */
let city = "chilonzor #64";
let url = new URL(`https://rent-houzing.netlify.app/properities`)
let search = url.searchParams
//search.set("city", encodeURIComponent(city)) 
search.set("city", encodeURI(city));
//search.set("address", city) //bu ham hammasini encode va olib kelsih decode qiladi yuqoridagilar ni esa manual decode qilish kerak
console.log(url);
console.log(decodeURI(url));

