// object mavzusi
// objectlar yasash
// let newObj1={}
// let newObj2= new Object()  //new bilan ishlatilgan narsalar constructor deyiladi

//
const account = {
  // obj imiz let da uni const ga ozgartirsak va keyin uni malumotini ozgartirsak boladimi? xa boladi
  //sababi const bolganda ham uni qiymatlari boshqa referenceda bolganligi uchun biz osha qiymatlarni ozgartirsak boladi, lekin obj ozini boshqa qiynmtga
  // account = "string" qilib primitive typega ozgartira olmaymiz

  name: "Jamshid",
  age: 30,
  gender: "male",
  position: "developer",
  "born year": 1994, // objectlar 2 bog'inli bo'lsa shu yol bn yozish kerak, amma ularni chaqirishda muammo boladi
  //sababi  tashqaridan nuqta bilan 2 bo'gínli keylarga dostup bolmaydi yagona yo'li ["bor year"] qilib berih kerak
  010: "tel raqami", //key lar raqam bilan nomlanishi ham mumkin, lekin bularga ham [010] yoki ["010"] qilib chaqirish kerak
  0: "01072772282", // 1ta qaram bolsa [0] yoki  ["o"] qilib kirsa boladi
  name: "Jamshidbek", // e'tibor bering obj ichida 2ta birxil name nomli qiymat bor ikalsi ham chaqirishni iloji yoq 1ta ochib ketadi
  // eng oxirida yozilgan qiymat qoladi tepadagisini ochirib yuboradi. Real projectda esa warning beradi sariq chiziq bilan
}
let yosh = "age" // bu tashqaridagi umuman boshqa variable, lekin e'tibor borsak vu variableni qiymati objectlarni key nomi bilan bir xil
//log da [] orqali "" siz chaqirsak javascript [] ichidagi sozni key sifatida qabul qiladi va qiymatni chaqirib beradi

account.age = 31 // obj key valuesini ozgartiradi
account.hobby = "reading" //objga yangi qiymat qoshadi
delete account.name // delete methodi object ichidagi qiymatni generic yol bilan ochiradi. E'tirbor bering name ni tepadagisi pastda qayta yozilganda ochib bolgan
// delete bizga pasda qolganini ochirib beryabdi
console.log(account.hobby)

Object.freeze(account) // bu code account objectimizni muzlatib qoyadi va bu koddan keyin kiritlgan ozgartirishlarni qabul qilmaydi
// lekin error ham bermaydi shunchaki ozgartirmaydi.  ya'na bir narsa Object.freeze qilganimizdan keyin
// qaytib melting qilib ozgartirib bolmaydi bu bir taraflama kod
Object.seal(account) //seal obj ichidagi bor malumotlarni yangilashga ruxsat beradi, lekin yangisini qoshib ham ochirib ham bolmaydi
console.log(account.name)
console.log(account["born year"]) // [] bu yol bilan chaqilirgan objectlar generic yol bn chaqirish deyiladi
console.log(account["0"])
console.log(account[0])
console.log(account[010])
//yangi ma'lumot savol berildi objectni key ini . bilan chaqirish va [] bilan chaqirishni nima farqi bor?
// javob: [] yol bn chaqirish dinamic yol deyiladi va keyinchalik bu keyni ozgartirsa boladi . bn chaqirilsa keyni keyinchalik ozgartirib bolmaydi

console.log(account[yosh])
console.log(account["age"])
console.log(account.age) // shu uchala log bir xil narsa

const account2 = account // bu yerda biz yangi object ochib uni eskisniga tenglab qoydik, endu ularni linki bitta joyda shuni uchun  account2 ni
// ozgartirsak account ham birdaniga ozgaradi shuning uchun ular ikalasi teng. Ammo 2xil nomli objectlar bolsayu oz ichida bir xil malumotlarni saqlasa ham ular bir birga
//teng bolmaydi
console.log(account2 == account)

//bizda node 17da chiqqan yangi method bor. u shunday ish qiladiki bitta obj ni ikinchisiga tenglashtirsak keyin ulardan 1ttasini ozgartirsak  ikkinchisiga ta'sir qilmaydi
// bu structuredClone deb ataladi
const account3 = structuredClone(account) // bu bizga account ni cloni qilib beradi

account3.name = "Shoxrux"
console.log(account)
console.log(account3)

//
//    let name = prompt()
//     let lastname = prompt()
// const user = {
//   name: name,
//   lastname,
// }
// console.log(user)

//
// objectni ichida birorta key bor yoki yoqligini qanday tekshirsa boladi?
// in (ya'ni ichida degani) sozi orqali
//masalan:
console.log("name" in account) // bu degani: name degan key account degan objectni ichida bormi degani va bu true yoki  false qaytaradi
// "name" orniga name qoshtirnoqsiz bersa ham boladi name shunda name degan variableni qiymatiga qariydi va shu qiymat obj ichidagi key nomi bilan bir xilligini tekshirib natija beradi

//
const car = {}
Object.assign(car, account) // Object.assign bu copy yasaydi, ya'ni paraterdalarni birichi yangi obj ikkinchi source obj qabul qiladi.
// ya'na assignorqali yasalgan yangi obj ham structuredClonega oxshab source dagi obj qiymatiga tegmaydi, ya'ni yangi objectlar qiymati ozgartsa eskisiga
// ta'sir qilmaydi
car["born year"] = 1993
console.log(account)
console.log(car)

//objectlarni ichida keylar juda kop bolsa ularni log da chiqarmoqchi bolsa hammasini yozib chiqishimiz kerak boladi
// lekin ES6 dan boshlab for in loop va for of loop lar chiqa boshladi. bular oddiy for loopdan faqr qiladi.
//for in obj uchun va for of array uchun
for (let i in account) {
  // bu yerda i obj ichidagi keylarga teng, lekin account[i] qilsak endi i value ga teng boladi
  console.log(`${i} : ${account[i]}`)
}
