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
