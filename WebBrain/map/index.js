//1.new MapMap is a collection of elements where each element is stored as a Key, value pair.
//Map object can hold both objects and primitive values as either key or value.
//garbage collection bu reach qilaolmaydigan yetib bora olaydigan malumotlarga garbage collection deyiladi
let obj = {}
let map = new Map()
map.name = "webbrain"
console.log(obj)
console.log(map)
//new Map yasalganda ham object yasaladi ham map yasaladi mapni object qismi huddi objectga oxshab ishliydi, lekinbu objectni qiymatlari
//mapni ozi ichiga kirmaydi; mapni ichiga kirgazi uchun map.set() qilish kerak; keyin uni ichidagini olish uchun
//map.get() qilish kerak:
map.set("name", "IT center")
console.log(map.get("name"))
//mapga . bilan object qiymatini kirgizdirsak boladi keyin unga faqat . bn access qilamiz;
// va set bialn object qiymatini qoshamiz, keyin unga faqat get bn access qilamiz
// . bn mapga key sifatida faqat string beramiz set sifatida hmma narsa bersak boladi
map.set(123, "numbers")
console.log(map.get(123))
console.log(map.has(123)) //bu mapni ichida paramentrda kiritilgan data bor yoki yoqligini tekshirib beradi // booleanda
map.delete(123) //malumotni ochiirb beradi
map.clear() // ichida parametr omidi, map ichidagi hamma malumotni ochirib tashlaydi
//
let map2 = new Map([
  ["name", "Jamshid"],
  ["age", "30"],
])
//map ni ichiga togridan togri malumot yozib ketmoqchi bolsak set qilmasdan, nested arraydan foydalanishimiz kerak;
console.log(map2.keys()) //map ichidagi keyni bilish uchun keys() dan foydalanamiz
console.log(map2.values()) // value uchun
console.log(map2.entries()) // returns key, value
Object.fromEntries(map2) //returns original object; lekin map2ni ozini ozgartirmaydi, yangi value qaytaradi
console.log(map2)
//map bn for loop ishlatsak boladi
console.log("//////////////")
for (let key of map2.keys()) {
  console.log(key)
}
//
console.log("///////////")
let map3 = map2
console.log(map3.entries())
//map.next() // manual for loopga qiyoslasak boladi;
//new Mapni ozini forEach i bor
map3.forEach((element) => {
  console.log(element)
})
//////////////////////////////////////////////////////
console.log("//////////////set//////////////")
//2. set
// Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
// map bu key va value collection edi; set esa faat value collection; mapni objectga oxhsatsak, setni arrayga oxshatamiz
//set ichiga faqat bitta malumot kiritamiz, arrayga oxshab  masalan:
let setObj = { name: "sam", age: 35 }
let set = new Set()
set.add(obj)
set.add("apple")
console.log(set.has("apple"))
console.log(set)
/////////////////////////////////////////////////
//3-4. WeakMap va WeakSet
//WeakMap va WeakSet new Map va Set bn deyarli bir xil. birnchi  new Map bn SEt chiqqan keyin weaklar chiqqan xosh ular necha chiqdi va nega kerak?
// biz qachon New Map va Set bilan, malumot yasak, keyin uni referensini ozgartirsak,  new MAp bn Set oldingi qiymatlari garbage collectionga tushadi lekin
//odatdagi objectlarga oxshab garbage collection new Map bn Set ni qiymatlarini ochirib yubormaydi
// ular unreachable bolishidan tashqari, xotirada ham joy ushlab turaveradi
// WeakMap va WeakSet lar bn yasalgan malumotlar esa garbage collectionga tushganda, xotiradan ochib ketadi
//
//bular ozi nimaga kerak? syatga buzib kirishni oldini olish uchun; biz bizga kelayotgan functionlarni shu new Map ichida save qilib qolamiz
//oldin shunaqa request keldimi deymiz, agar kelgan bolsa uni ushlab qolgin deymiz;
//shu orqali API dan kelayotgan toxtovsiz requestlarni ham control qilsa boladi.
//hamma requestlarni ozini network id si boladi, shu idlarni aniqlab shu networkdan toxtovsiz request kelayotgan bolsa, blocklab qoyiladi qoyiladi
