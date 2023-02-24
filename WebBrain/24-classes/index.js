//OOP bolishi uchun 4ta xususiyat bolishi kerak
//real projectda class lar ishlatilmaydi, xozir class ornini functionlar egallagan, oldin constructive class lar ishlatilgan function ornida
// — Classes nima?
//classes- in OOP, a class code-template for creating obj
class Users {
  constructor(title) {
    //global state=this
    this.title = title
    console.log(this)
  }
  //global variable
  company = "opus"
  //inhertance olishi
  age = 0
  fullName() {
    console.log(++this.age)
  }
  greeting() {
    //titlega access qilish uchun titleni global statega tenglash
    console.log(`hi ${this.title}`)
  }
  //getter
  get getFunc() {
    console.log(`welcome to ${this.company}`)
  }
  //setter
  set getFunc(value) {
    console.log(`welcome to ${value}`)
  }
  // — Computed named classes
  ["mix" + "ed"](value) {
    console.log(value)
  }
}
let user1 = new Users("Jamshid")
let user2 = new Users("Makhmudov")

// — constructor classes nima?
//1ta class yasalsa, keyin new Users() constructure qurilsa yuqoridagi classdan inheritance(meros) ovoladi; va har safar
//qayta meros olganimizda bizga bizga ynagi boshqa class beradi nomi bir xil bolsa ham
user1.fullName()
user1.fullName()
user2.fullName()
//new Users() parametrga malumot kirgizssak, class uni constructorda tutib oladi; constructure class ozini methodi xisoblanadi;
// class yurganda birinchi constructor yuradi uni pasga yozib qoygan bolsak ham, bu degani u hoisting boladi;
//reactda statelar constructor ichiga yozilishini sababi ham shu, yani class ishlaganda birinchi shu statelarni declare qilib oladi

//class ichida cosntructordan tashqari yana functionlar berilgan bolsa, biz new Users() ni parametri bilan shu class ichidagi functionlarga access qila olmaymiz
//sababi constructor alohida scope bolib uni ichidagi malumotlar shu scope ichida ishlaydi. 1ta yoli ularni global statega - ya'ni thisga tenglab qoysak
user2.greeting()
//this class ichida global ishlaydi
//classni typeof i function chiqadi
//
// — Global variables in class
//class ichida constructor va functionlardan tashqarida yozilgan qiymat thisga teng bolib qoladi
//
// — getter and setter with classes

user1.getFunc
user1.getFunc = "Daegu"
// — Computed named classes
user1.mixed("generic function")
// — Inheritance - meros olish
console.log("///////////////////////////////")
class Animal {
  constructor(name) {
    this.name = name
    //console.log(`parentni constructorini ${name} orqali override qilamiz`)
  }
  //parent
  speed(speed) {
    console.log(`${this.name} runs ${speed} km perhour`)
  }
}
class Rabbit extends Animal {
  // constructor(name) {
  //   super(name)
  // }
  child() {
    //console.log("global state")
  }
  //child
  //////// extends degani kengaytirish degani, shu extends degan keyword orqali
  //classlar bir ikkinchidan inhertance oladi //bu protoga oxshaydi togridan togri
  // birikmaydi behind the scence birikadi
  info(name) {
    // console.log(`${name}ni 2ta qulog'i bor`)
    this.child() //ozini clasidagi methodlarga access qilish uchun this ishlatamiz
    //super.speed(123) //parentdagi methodlarga access qilish uchun super ishlatamiz
  }
}

let rb = new Rabbit("quyon")
rb.info()
rb.speed(12)

// — Overriding: method, constructor, class fields
