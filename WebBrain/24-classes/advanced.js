console.log(`ssa`)
// — Static variables
//static lar tuzilgandan keyin, ishlaganda 1tasi ikkinchisga ta'sir qiladi
//staticlar constructive qilinmasdan togridan togri ozi chaqiriladi
//static varuable yasalsa static fubction bn chaqirish kerak bolasama togridan togri class orqalib chaririladi

class Webbrain {
  age = 0
  static year = 0 //static oz nomi bilan varuablelarni statcick qilib qoyadi;
  getAge() {
    console.log(++this.age)
  }
  static getYear() {
    console.log(++this.year)
    // console.log(++Webbrain.year) //statick varuablelarni this bilan chaqirib bolmaydi, orniga class ni nomini ozini yozish kerak
    // functionni nomini ham static deb nomlab qoysak, keyin shu function ichida static varuableni this bilan chaqirsak boladi
  }
}
let st1 = new Webbrain() //constructive qilish
let st2 = new Webbrain()
st1.getAge()
st1.getAge()
st2.getAge()
//////////
//st1.getYear()
//st1.getYear()
//st2.getYear() //bu  ham ishlaydi; lekin staticlarni yangi varuablega tenglamasdan togridan togri class lin chaqirish kerak

// — Static functions
// — Built-in classes
Webbrain.getYear()
Webbrain.getYear()
Webbrain.getYear()
////////////////////////////////////////////////////
//2
// — Private classes
class Protected {
  _name = "webbrain" //classlar uchun clean code yozilganda, public variablelar oldidan _ beligisi qoyiladi, publicliligini bildirib turiosh uchun
  #protected = "don't touch it!" //# belgisi varuablemi private qilib qoyadi, biz class ichida unga access qilsak boladi
  //lekin tashqaridan access qila olmaymiz
  // private varuableni qiymatini getter va setter qqilib ozgartirsak boladi
  get getName() {
    console.log(this.#protected)
  }
  set getName(value) {
    this.#protected = value
  }
}
let pr = new Protected()
pr.getName
pr.getName = "it is private!"
pr.getName
////////////////////////////////////
//3.
// — instanceof
class Ar extends Array {}
let ar = new Ar()
let a = []
let b = () => {}
console.log(a instanceof Array)
console.log(b instanceof Object)
console.log(a instanceof Object) //ikalasi ham true chiqadi ya'ni Array ham Object ham function ham ozi object typega tegishliligi uchun
//////////////////////////////////////////////////
//4.
// — Mixins
//bilamizki child class parent classdan inhertance oladi,
//classlar oop yani asli tagi object bolganligi uchun
//biz 1ta tashqaridagi objectdan, shu classga inhertance olmasdan access qilsak boladi prototype orqali
class User {
  getName() {
    console.log(`no name`)
  }
}
let obj = {
  getInfo() {
    console.log(`no info`)
  },
}
Object.assign(User.prototype, obj)
let ur = new User()
ur.getInfo()
console.log("/////////////////////////////")
// — Homework
