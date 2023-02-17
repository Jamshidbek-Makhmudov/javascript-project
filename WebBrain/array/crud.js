//call back function olgan hamma methodlar loopga oxshab aylanadi
//Arrayda sort faqat joylashish ornini ozgartiradi. Filter malumotlarni keragini olib qolib qolganini
// chiqarvorish xususiyatiga ega. Map har doim  malumotga return qiladi, true yoki false bolishiga qaramasdan.
//CRUD- C- create(use spread, distructure).  R- read(filter, sort, includes, find).  U-update(filter find,map) D- delete(filter, splice)
let students = [
  { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
  { id: 2, year: 2000, name: "Asilbek Topilov" },
  { id: 3, year: 2002, name: "Najmiddin Nazarov " },
  { id: 4, year: 2002, name: "Mominov Abdulloh" },
  { id: 5, year: 1995, name: "Sardor Tursunboyev" },
  { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra " },
  { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
  { id: 8, year: 2002, name: "Shukurov Shohruh" },
]
//CRUD
//sort
const sortByYear = () => {
  let res = students.sort((a, b) => b.year - a.year)
  students = res
}
sortByYear()
//console.log(students)

const sortByAlphabet = () => {
  let res = students.sort((a, b) => a.name.localeCompare(b.name))
  students = res
}
sortByAlphabet()
//console.log(students)

//delete
//filter
const deleteUser = (id) => {
  let res = students.filter((value) => value.id !== id)
  students = res
}
deleteUser(1)
console.log(students)
/////////////
//create
//function yozib ichiga students.push() qilsak qoshiladi lekin real prejectlarda bunday qilib bolmaydi shung uchun sprea operatoridan foydalaniladi:
let data = { year: 1994, name: "Jamshid Makhmudov" }
const addUser = (data) => {
  students = [...students, { ...data, id: students.length + 1 }] //spear operatori objectdan tashqariga chiqardi biz yaan objectga solib qoyabmiz
}
addUser(data)
console.log(students)
//////////
//update
//map bn qilamiz chunki map hamma valularni returb qila oladi

let updated = { id: 2, type: "name", value: "Jamshidbek Makhmudov" }
const updatedUser = (updated) => {
  let res = students.map((value) =>
    value.id === updated.id
      ? { ...value, [updated.type]: updated.value } //bu yerda [ ] qavs ishlatganimizni sababi, updated.id generik bolishi kerak, buni object mavzusida otgan edik
      : value
  )
  students = res
}
updatedUser(updated)
console.log(students)
////////
//read
//ya'ni inputga search berilganda
//studentlar orasidan oshani chiqarib berishi kerak:
//array uchun filterdan, string uchun includes dan foydalanamiz
// let key = prompt()
let key = "jamshid"
const searchUser = (key) => {
  let res = students.filter((value) =>
    value.name.toLowerCase().includes(key.toLowerCase())
  )
  students = res
}
//searchUser(key)
//console.log(students)
/////////////////
//search qilganda, name, ham yil yoki idni ham nomini yozganda filter qilib chiqartirsa boladi; bunda 2ta function yozilishini oldini olinadi:
let genericKey = { value: 2, key: "id" }
// let genericKey = prompt()
const getFilter = ({ key, value }) => {
  let res = students.filter((usr) =>
    `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
  )
  students = res
}
getFilter(genericKey)
console.log(students)
