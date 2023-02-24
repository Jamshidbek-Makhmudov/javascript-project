// — __proto__ nima?-objectlarni bir biriga qoshish
// — prototype vs __proto__ farqi?
//protoni kopchilik copy uchun ishlatadi, lekin bu juda katta narsa
//taxmiman 2005 yil atroflarida protoni ishlatmaslik tavsiya qilingan sababi unga alternativ sifatida setProto bolgan;
//lekin taxmiman 2015 yildan boshlab yana protoni ishlatsa boladi deb malumotlar kelgan sababi ungacha bolgan conflictlar fix qilingan
//objectda proto ham assign ga oxshab 2ta objectni bir biriga qoshib beradi;
//farqi-assign bilan 2ta object qoshilsa, keyin 2chi qoshilgan objectni yana ochirib tashlashah uchun kop ish qilish kerak(loop...)
//proto bilan qoshilagn objectlarni keyinchalik 2chisini ochirmoqchi bolsa shu qoshilgan objectni nullga tenglab qoysak ozi ochib ketadi
//2-farqi proto bilan qoshilgan object console.logda togridan tori korinmaydi, backgrounda boladi;
let obj1 = { name: "Jamshidbek", l_name: "Makhmudov" }
let obj2 = { age: 30, magor: "developer" }

Object.assign(obj1, obj2)
console.log(obj1)
//
let obj3 = { name: "Jamshidbek", l_name: "Makhmudov" }
let obj4 = { age: 30, magor: "developer" }
obj3.__proto__ = obj4
console.log(obj3.age)
///////////
// — prototype nima?JavaScript is a prototype based language, so, whenever we create a function using JavaScript,
// JavaScript engine adds a prototype property inside a function, Prototype property is basically an object
//(also known as Prototype object), where we can attach methods and properties in a prototype object,
//which enables all the other objects to inherit these methods and properties.
let user = { name: "Jamshidbek", l_name: "Makhmudov" }
Object.prototype.fullName = function () {
  //prototype golbal ishlidi, ya'ni biz hozir  object ichida fullName degan function ochdik, this qaytaradigan;
  console.log(this) //endi biz bu functionni qaysi objectga bersak shu object uchun ishlayveradi
  console.log("hello")
  return this
}
user.fullName()
////////////////
console.log("////////////")
//prototypne array bn ishlatish:
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
Array.prototype.onDelete = function (n) {
  let res = this.filter((value) => value !== n)
  //let res = this.push(n)
  console.log(res)
  return res
}

ar.onDelete(9)
//biz xozir prototype orqali arrayni value sini ochirib tashladik, lekin bu prototype siz shunchaki function yozib qilsak ham boladi
//buyerda prototypeni yaxshi tarafi, keyinchalik onDelete prototype functionni qaysi array bilan ishlatsak birdek ishlayveradi
//getter setter vazifasini ham prototype bajarib beradi; bugungi kunda prototypelar kop qollaniladi
// prototype hatta shu getter,setterlardan ham yaxshiroq- chunki getterlarga faqat osha joyni ozida access qila olasiz,
//prototypelarga esa hamma joyda access qilsa boladi
