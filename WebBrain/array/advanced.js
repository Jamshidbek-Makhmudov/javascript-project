// functionga qaytamiz, agar => dan keyin gullik qavs yozilmasa avtomatik tarizda ozi return qaytaradi
//arrayda sort() methodi itemlarni joylashishini sort qilib beradi
//filter bolsa sort qilib bizga kerakligini olib qolib qolib qolganini chiqarib yuboradi
//filter ham for loopga oxshab aylanadi
//filter 3ta parametr qabul qiladi: 1-value,2-index, 3-array. kop hollarda 3-parametr kiritilmaydi
//filter oz ichida call back function oladi
//filter ichidagi return true bolsa array filteri hamma malumotni qaytarid false bolsa bosh array qaytaradi
//filter
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
let num = [1, 2, 3, 4, 5, 6]
let str = ["orange", "Apple", "banana", "Kiwi"]
let res = students.filter((value, index) => {
  // return value.year === 2002
  // return true
})
//arraylarda taqqoslash
let a = str.sort((a, b) => a.localeCompare(b))
let b = num.sort((a, b) => a + b)
console.log(a)
console.log(b)

let res2 = students.sort((a, b) => b.year - a.year) //array objectlarda sort qilish, string uchun loclaComparedan foydalansak boladi
console.log(res2)
//find
//find bizga faqat biz qidir malumotni chiqaradi
console.log(
  num.find((value) => {
    return value === 3
  })
)
//findIndex
// methodi indexini topib beradi, ishlatilish yoli id orqali topib index.splice qilib osha ma'lumotni ochirib tashlasa boladi
//lekin ochirishda id ni ozini filter qilib ochirib tashlasa boladi
//ikala ochirishda farqi bor filter har birini ichiga kirib chiqqani uchun vaqt uzoqroq ketadi
//indexda esa topgan itmeda toxtagani uchun tezroq ishlaydi
//advanced levelda array uchun for loop ishlatilmaydi ularni ornini map bn forEach qiladi
//The forEach()
// method does not return a new array, whereas the map() method returns a new array.
// The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.
//for each bn mapni farqi map returnga qaytadi, forEach returnga qaytmaydi forEach ustida faqat bir marta amal bajarsak boladi
//agar malumot ekranga chiqishi kerakmi denak map ishlatishimiz shart.
//agar ekranga chiqmasa ham bolib shungaki qanaqadir amal bajarmoqchi bolsak forEach ishlatib ketsak boladi
//every() methodi har biri shunaqami degani. boolean qaytardi
//some() esa bazilari degani. boolean chiqaradi
//repace()
//fil()
// array itemlarini ozgartirmoqchi bolsak ishlatamiz, ichiga 3ta parametr qabul qiladi 1-nimaga ozgartiramiz 2- qayerdan 3-qayergacha ozgartiramiz
console.log(num.fill("22", 4, 5)) //replace regex qabul qiladi bu qabul qilmaydi
//copyWithin() methodi. bu method berilgan arrayni ichidagi itemlarni olib shu ichidagi bshqa itemlarga qalmashtiradi, almashgan itemlar esa ochib ketadi:
a = [0, 0, 1, 2, 3, 4, 5]
console.log(a.copyWithin(0, 2, 4)) //ichida 3ta parametr oladi, 1-almashuvchi item qayerdan boshlanadi, 2-qayerdagi itemni olamiz, 3-qayergacha
//reducer
//reducer ichiga callback function oladi
//bu chuqurroq mavzu, birinchi javascriptni reduceri bolgan keyin, redux javascriptdan reducerni olgan , react esa reduxdan reducerni olgan
//formulasi: reducer(reducer(sum, current), initialVal); bunda current harsafar aylangda itemni chiqarib berdi, demak bu ham loop.
//sum esa => shu callback nimaga return qilsa shunga teng;
//qisacha reduce(()=> initialValue)  ->  ()=> nimaga return qilsa reduce qilayotgan arrayimiz shunga teng boladi
let n = [1, 2, 3, 4, 5, 6, 7, 8]
let result = n.reduce((sum, current, i) => {
  console.log(current, i, current - i)
  return current - i
}, 0)
console.log(result)
// bu yerda sumni initialVali 0 edi, biz nima dedik call back nimaga return qilsa, sum shunga teng dedik. shuning uchun 0 1 marta chiqib qilgan 7 martasida 1 chiqadi
//flat()
//arrayni ichida array kelsa- multi dimensional deyiladi
//flat methodi shu nested bolib ketgan arraylarni ochib beradi parametriga nechta raqam yozsak shuncha rested arrayni ochib beradi
// Infinity yozsak hamma neste bolgan arraylarni ochib beradi
//lekin bu asl arrayni xolatini ozgartirmaydi
let nested = [1, 2, [3, 4, [5, 6, 7, [8, 9], 10, 11], 12], 12, 0]

let flated = nested.flat(Infinity)
console.log(flated.reduce((a, b) => a + b, 0)) //bu yerda iniTialValu -> 0 ni yozmasa ham boladi
//new Set() methodi
//array ichida birxil bolgan itemlarni chiqarib tashlaydi:
let set = [1, 1, 1, 1, 2, 2, 2, 2]
//1-yol
console.log(new Set(set)) //faqat new constructor bolganligi uchun new Set() dan kelgan qiymat object bolib qoladi
//2-yol
let fit = set.filter((value, index, array) => array.indexOf(value) === index)
console.log(fit)
//new Map() methodi nested bolgan arrayni objectga ogirib beradi buni teskarisini objectda Object.enteriesga teng:
console.log(
  new Map([
    ["a", 1],
    ["b", 2],
  ]).keys()
) //new Map().key() qilsak faqat keylarini; .values() qilsak faqat valularini qaytarib beraadi; hech narsa yozmasak object xolatda qaytaradi
let obj = { name: "jamshid", l_name: "Makhmudov" }
console.log(Object.entries(obj))
//Array.from()  methodi; bu method ichidagi parametrni har birini arrayga ogirib beradi; 2-parametr ham qabul qiladi, u 1-paramertga callback function boladi:
console.log(Array.from("jamshid", (v) => v.toUpperCase())) //bu callback function loopga oxshab 1-parametrni har bir elementi ichida aylanadi
//va uni ustida bajargan amalimiz har biriga tegishli boladi
// new Map().enteries() kelishi ham mumkin, u ozi bilan next() methodini ham olib keladi
//bunda enteries ajratib beradi; keyin next bitta bitta ularga kirib chiqadi va alohida bir birga teng bolmagan objlar chiqarib beradi:
let object = new Map([
  ["a", 1],
  ["b", 2],
]).entries()
console.log(object.next())
console.log(object.next())
console.log(object.next()) // 3- marta yurgizdirganimizda value undefined chiqadi

//slice returns a piece of the array but it doesn't affect the original array.
//splice changes the original array by removing, replacing, or adding values and returns the affected values
//arrayga yangi item qoshish
//splice yordamida qilinadi

let ar = [1, 2, 4, 5]
ar.splice(2, 0, 3)
let ar2 = [1, 2, 4, 4]
ar.splice(2, 1, 3)

//arraylarda destructure
//objectda korganimiz kabi arrayni itemlarini ham destructure qilsak boladi:
let des = ["apple", "peach", "Kiwi"]
let [one, ...rest] = des
console.log(des)
