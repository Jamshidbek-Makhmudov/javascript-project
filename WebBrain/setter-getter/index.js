//— Properties flag and descriptor
//objectlarni boshqarish usul flag deyiladi, ya'ni loiop qilish, delete qilish xullas hammasi
let user = { name: "webbrain", title: "IT Center" }
//— getOwnPropertyDescriptor
//console.log(Object.getOwnPropertyDescriptor(user, "name"))
///natija
// value: "webbrain"
// writable: true            //ozgartirish, update qilish degani
// enumerable: true           //loop qilishni ochirb qoyish
// configurable: true      //ochirsa boladi degani
//— defineProperty
Object.defineProperty(user, "name", {
  writable: false,
  enumerable: true,
  configurable: true,
})
user.title = "jamshid"
//delete user.name
console.log(user)
///
//— setter and getter with function
const usr = {
  name: "webbrain",
  last: "Academy",
  get fullName() {
    console.log(this.name, this.last)
  },
  set fullName(value) {
    this.name = value
    this.last = value
  },
}
//object ichidagi function qiymatini ozgartirishda setter va gettersdan foydalaniladi
//setter va getter ishlatilgandan song functionni chaqirishda () yozilmaydi
//set ichida 1ta parametr qabul qiladi, bu parametr biz tashqarida set qilayotgan value fa teng boladi
usr.fullName = { name: "Jamshid", last: "Makhmudov" }
usr.fullName // qaytaraman settter va getter ishlatilsa function chaqirishda () yozilmaydi
//setter va getters lar bizga qoshimcha yordam berish uchun kerak, qiyin emas; objectlarni togri update qilishga kerak
