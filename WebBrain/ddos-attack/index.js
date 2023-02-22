//backenddan 1 marta ma'lumotni olib save qilib qoyadi keyingi safar bizga kerak bolib yana backendga request yuborganimizda
// oz request jonatmasdan ozini xotirasidan olib beradi
//DDOS attack bolsa sayt buziladi va serwerda 500 error chiqadi
//uni oldini olishni 2-3 xil yoli bor
//undan oldin DDOS attacklar qanday qilinishini korib ketaylik:
//oncclick function orqali backenddan malumot olub kelyabmiz, yani button bosilganda backendga request ketadi; DDOS attackda shu fetchni setInterval 0 sec bilan
//orab qoysak request toxtovsiz ketaveradi natija sayt buziladi, backend requstlarga javob berolmay qoladi dasturchilar tili bn etganda
//sayt sleep boladi.
//e'tibor bering htmlga ullanganligi uchun arraow function ishlamidi
function getData() {
  // setInterval(() => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  )
  // }, 0)
}
//DDOS attackni oldini olish uchun backenddan yboradigan requestlarni cached qilish kerak:
function getCached(func) {
  let cache = new Map() //MAp function, undefinedlarni olmas edi lekin ularni boshqa varuable tenglasa shu varuablni qabul qiladi
  return function (x) {
    if (cache.has(x)) {
      console.log(cache.get(x))
      return cache.get(x)
    }
    let res = func()
    return cache.set(x, res)
  }
}
getData = getCached(getData)
//////////////////////////////////////////////
//requestni dinamic qilish
//bunda requestlar objectni ichida bolsa, this yoqolib qoladi; sababi objectda cache bolganda backendan keladigan malumotni joylashish referencesi ozgarib ketadi
// bu togrilash uchun chaed qilingan function ichida call(this) methodidan foydalanishimz kerak
//shunda yoqolib qolgan this yana qayta chaqirib beradi:
//lekin bakend dan keladigan malumotlarni har safr ham cached qilmaymiz;
//cached qilingan function server update bolgan ochib 0 holatga tushib qoladi, agar butunlay save qilib qoyilsa
// doimiy cached qilganligi sabab,saytni ishlashini sekinlashtirib yuboradi
let usr = {
  name: "webbrain",
  getDatas() {
    return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
      (res) => res.json()
    )
  },
}

function getCacheds(func) {
  let cache = new Map()
  return function (x) {
    if (cache.has(x)) {
      console.log(cache.get(x))
      return cache.get(x)
    }
    let res = func.call(this)
    return cache.set(x, res)
  }
}
usr.getDatas = getCacheds(usr.getDatas)
/////////////////////////////////////////////////
