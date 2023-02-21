console.log("old and global objects")
//1.IIFE -  Immediatly invoked function expression
//IIFE nimaga kerak// oldin let bn const chiqishidan local scopeda var bolsa lekin bizga tashqarida boshqa var kerak bolsa doim eskisni yangilab qoygan bu var lar
//IIFE shu handle qilish uchun kerak bolgan
//ya'ni var ni alohida scopega ovolish uchun kerak
//IIFE ozini chaqiradigan function boladi formulasi: (function(){})() yoki (()=>{})()  bu oldin ishlatilib xozir ishlatimaydi bunda functionni nomi bolmasligi kerak
// var a = 10
// console.log(a)(function () {
//   var a = 20
//   console.log(a)
// })()
// console.log(a)
//2. globalThis bu global variable bolib unga hamma joyda access qilish uchun ishlatilgan.
// console.log("/////////////////////")
// globalThis.b = 10(() => {
//   var b = 20
//   console.log(b)
//   console.log(globalThis.b)
// })()
//3.functionda name
//bu nima?
//functionni nomini olib beradish; bu koproq arrayni ichida function kelsa, shu functionni nomini chiqarib bersih uchun ishlatilinadi
function test(a, b, ...rest) {
  console.log("jamshid")
}
console.log(test.name) //javob:  test
console.log(test.length) // 2 chiqadi sabab bu yerda length parametrni nazarda tutadi; lekin rest ignore qiladi
//4.NFE- Named Function Expression: bu function expressionga yana 1ta nom berib qoyinshga aytiladi; uni faqat shu function ichida ishlatsak boladi xolos:
const named = function getName(name) {
  console.log(`hi ${name}`)
  // return getName()        //bu faqat shu function ichida chaqrilishga ruxsat beradi va toxtovsiz ozini ozi chaqiradi
}
named("Jamshid")
//5.
//new Function. bu hozir umuman ishlatilmaydi. bunda parametrda hamma malumotni declare qilib ketsih kerak, string ichida;
// let newFunc = new Function(`console.log('hey)`) uje chiqb ketganligi uchun error beradi
