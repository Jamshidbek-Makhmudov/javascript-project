//destructure functionda
// function parametrida destructure berish uchun parametr ichida {} ichida yozib ketsak boladi
//lekin agarda kelayotgan data malumot yoq bolsa, destructure error beradi optional chaining ham ishlata olmaymiz, shunda yagona yoli
//destructure qilasdan shunchaki parametr ichida myData={} deb yozib ketsak boladi. shunda agar malumot kelmasa, bosh object berib ketadi
//function ichida esa myData?.year qilib optional chaining ishlatsak boladi
let myData = { id: 1, year: 2002, name: "Iqboljon Yuldashev" }
const getData = ({ year }) => {
  console.log(year)
}
getData(myData)
console.log("////////////////////////")
//////
//arraylarni map ichida destructure qilish;

Object.entries(myData).map(([key, value], index) => {
  console.log(key)
})
console.log("////////////////////////")
//new Data
//new bilan yasalgani uchun constructor yasaydi buni yaxshi tarafi- ularni ichiga kirsak boladi .get orqali

let date = new Date()
console.log(date)
console.log(date.getMonth())

console.log("////////////////////////")
//
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
]
let week = weeks[date.getDay()]
console.log(week)
const getToday = (week, symbol) => {
  let date = new Date()

  return `Today: ${date.getDate()}-${week}${symbol}${
    date.getMonth() + 1
  }${symbol}${date.getFullYear()}`
}
console.log(getToday(week, "/"))
///

console.log("hello")
//JSON BU- javscript object notation deyiladi.
//hajmi jihatdan juda kichik; objectga oxshidi
//configuration paytida; backend bilan oldi berdi qilinayotganda ishlatilinadi
//nimaga kerak? JSON faylni hamma language oqiy oladi, java, python,...
//obj ni JSON faylga ogirish:
let obj = {
  name: "Jamshid",
  l_name: "Makhmudov",
  year: 1994,
  data: { company: "Opus" },
  id: 1,
  age: 30,
}
let json = JSON.stringify(obj, ["name", "year", "data", "company"], 2) // shunday qilib obj ni JSON faylga ogiramiz.
// backendga ham shunday yuboramiz. ichida 3ta parametr qabul qiladi, 2-chisi replacer deyiladi.
//replacerni ichida nima yozsak osha malumotlar backendga ketadi. yozilmagani qoladi
//3-parametr indentation deyiladi; datamizni ichida nested bolgan vaqtida ishlatamiz,
//nechtadir tap tashlashimiz kerak ishlatish uchun; formationni yaxshilab beradi
//backenddan kelgan JSON ma'lumotni parse() qilib objectga ogirishimzmumkin
let myObj = JSON.parse(json)
console.log(myObj)
