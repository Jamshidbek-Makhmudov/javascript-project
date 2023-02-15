//advanced object
//javascriptda codelar yozilganda call stackdan ketmaket joy olib boraveradi primitive data typelar qiymati stackda joy oladi lekin non-primitelar uchun stackdan link beriladi,
//bu link heapga boradi va shu linkni boradigan heapda non-primite typelarni qiymati saqlanadi
//garbage collection nima?
// javob: objectlarga unreachable bolganda yani ular boshqa qiymatga tenglashganda(stackdan boshqa link olganda) heapdagi eski qiymatini garbage colletctorlar
//avtomat tarizda ochirib yuborishiga aytiladi
//javascript this degan kalit soz bor bu windowga teng console.log(this===window) //true   javascript ozi bir objectlardan tashkil topgan shulardan eng kattasi
//this ya'ni window  this va windowni type object
//this qachon ishlatilanidi?   javob this objectda ishlatilinadi
//object ga function biriktirsa boladi lekin faqat function declaration boshqasi emas
//this bu abjectni target(refer) qiladi
/////////////////////////////////////

function bye() {
  console.log("bye")
}
function getUser() {
  console.log("good")
}
let obj = {
  name: "webbrain",
  sayHi: function () {
    console.log(this.name) // this===obj lekin this ishlatish tavsiya qilinadi. chunki object nomi ozgarib qolishi mumkin, yani garbage collectionga tishib qolsa
    console.log(obj.name) // shunda obj.name error beradi
  }, // objectda function declaration biriktirsak boladi  1-yol
  bye: bye, // bu objectga function biriktirshni 2- yoli, ya'ni tasharida functionni yozib uni nomini ichkariga olib qoysak boladi
  getUser, //3-yol tashqaridan ke;gan functionni qisaqtirib yozdik
  calUser() {
    // 4-yol ichkarida yangi function yozdik
    console.log("call user")
  },
  callUser: function () {
    return () => {
      console.log(`hi, this is ${this.name}`) //arrow functionda this yoq, agar this yozilsa undefined ga teng bolib  qoladi
      // lekin errow functionni tashqarisidan oddiy function bn orab chqarisak, this parent functionga tegish bolib qoladi,
      //va ishlaydi.
    }
  },

  age: 23,
  child: {
    childName: "Jamshdi",
    age: 30,
    child: {
      name: "Omina",
      age: 2,
    },
  },
}
obj.callUser()() // bu yerda ikta qavs bn chaqirganimizni sabai bu curry function deyiladi
obj.bye()

//functionlar chiqishidan oldin cunstruction classlar ishlatilgan

function myFunc(name) {
  this.name = name
  this.syaHi = function () {
    console.log("hey, " + this.name)
    return "hi"
  }
}
myFunc("Jamshid") //shu functiondagi thisga tashqaridan access qilib bolmaydi. ammo new methodini bersak u cunstructionga aylanadi
//va keyin biz unga tashqaridan access qilsak boladi:
new myFunc("Jamshid").syaHi()
// shunday qilib
//yangi ma'lumot function return qaytaradi return qaytmasa u undefined qaytardi logda

//symbol bizga uniqe id yasab beradi
//masalan:
let id1 = Symbol("id")
let id2 = Symbol("id")
console.log(id1 == id2) //false qaytardi
//biz yuqoridagi id1 birni value sini pasdagi object ni key sifatida ishlatmoqcho bolsa key sifati Symbol("id1")
// qilib yozishimizni iloji yoq id1 qilib yozsak yuqoridagi id1ni olmaydi yagina yoli genric qilib olish

let object = {
  [id1]: "Jamshid", // generic qilib olish uchun shunday yozizhs kerak
  ["id2"]: "Makhmudov",
}
console.log(object[id1])

// objectlarda destructure yani obj keylarini gulli qavsga orab olib uni objectga tenglab qoysak pasda chaqirganimizda
//shu key valularini chiqarib beradi
//masalan:
const {
  name,
  age,
  child: { childName },
} = obj // gullik qavs ivhidagi key nomli birorta varuable global obj da bolsa
// qavs ichidagilar error beradi, shun nama: newName qilib : yordamida yangi nom berib ketsak boladi
console.log(age)
console.log(childName)

//spread operatori: juda kop xolatlarda ishlatilinadi. asosan copy. qilish yangi ma'lumot qoshishda ishlatilinadi
