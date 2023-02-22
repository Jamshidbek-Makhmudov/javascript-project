console.log("setTimeout and set interval")
//1.
//setTimeout bu method, lekin javascriptnikimas. Ammo buni hamma browserlar support qiladi
// setTimeout(()=>{}, time, arg) ()=> ichidagi malumot timedan dayin yurishini bildiradi. arg esa parametrga teng boladi
//ishlash tartibi birinchi call stack -> web API-> queue -> natija
let id = setTimeout(
  (name) => {
    console.log(name)
  },
  0,
  "Jamshid"
)
//2.
//setTimeout ham setInterval ham auto garbage collectionga tushmiydi; ularni manual garbage collectionga tushirish kerak;
//setTimeout faqat bir marta ishlasa setInterval qayta qayta ishlayveradi
let id2 = setInterval(() => {
  //let date = new Date()
  //console.log(date.getSeconds())
}, 1000)
// setTimeout va setIntervalni garbage collectionga otqazish:
clearInterval(id2)
clearTimeout(id)
//3.
//function ichidagi functionni chaqirishni 2xil yoli bor:
const myFunc = (name) => {
  return (l_name) => {
    console.log(name)
    console.log(l_name)
  }
}
//1-usul
const callFunc = myFunc("Jamshid")
callFunc("Makhmudov")
//2-usul
myFunc("front end")("developer")
//////////////////////////////////////
//exercise:
//EPAM ga tushgan savol
// result: sum(1)(2)(3)==6
//1-usul
const sum = (a) => {
  return (b) => {
    return (c) => {
      console.log(a + b + c)
    }
  }
}
sum(1)(2)(3)
//2-usul
function res(num) {
  let total = num
  function addNext(nextNum) {
    total += nextNum
    console.log(total)
    return addNext
  }

  addNext.toString = function () {}

  return addNext
}

res(4)(5)(6)(7)(8)
