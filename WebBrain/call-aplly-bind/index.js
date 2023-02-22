//call(contex, parametr)//call ishlatilishi backend dan kelgan malumotlarga call orqali
// dinamic function yozib back end dagi barcha malumotga access qilsa boladi
let student = {
  name: "Webbrain",
  lastname: "Academy",
  title: "IT Center",
}
let newStudent = {
  name: "Digital",
  lastname: "One",
  title: "IT Center",
}

let users = [
  {
    name: "Webbrain",
    lastname: "Academy",
    title: "IT Center",
  },
  {
    name: "Digital",
    lastname: "One",
    title: "IT Center",
  },
]
function myFunc(year, age) {
  console.log(this.name, this.title, year, age)
}

//myFunc.call(student)

//myFunc.call(newStudent)
//bindni chaqirish 2xil
//1
let getBind = myFunc.bind(student, "----bind", "method")
getBind()
//2
myFunc.bind(student, "----bind", "method")()

for (let key of users) {
  myFunc.call(key, "call", "method")
  myFunc.apply(key, ["apply", "method"])
}
//call bn apply 2-parametrni kirgazishda  farq qiladi.
//bind ni qolganlaridan farqi u birdaniga chaqirmaydi; yana 1ta function chaqiradi, uni boshqa varuable tengla keyinchalik ishlatsa boladi
//call da , bn argumentlar birin ketin yozib ketiladi va keyingi kiritilgan argumentlar functioni parametrlariga teng boladi;
//applyda argumentlar array ichida boladi
