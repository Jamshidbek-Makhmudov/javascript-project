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
/////////////////////////////////////

function bye() {
  console.log("bye")
}
function getUser() {
  console.log("bye")
}
let obj = {
  name: "webbrain",
  sayHi: function () {
    console.log(this.name) // this===obj lekin this ishlatish tavsiya qilinadi. chunki object nomi ozgarib qolishi mumkin, yani garbage collectionga tishib qolsa
    console.log(obj.name) // shunda obj.name error beradi
  }, // objectda function declaration biriktirsak boladi  1-yol
  bye: bye(), // bu objectga function biriktirshni 2- yoli, ya'ni tasharida functionni yozib uni nomini ichkariga olib qoysak boladi
  getUser, //3-yol tashqaridan ke;gan functionni qisaqtirib yozdik
  calUser() {
    // 4-yol ichkarida yangi function yozdik
    console.log("call user")
  },

  age: 23,
  child: {
    name: "Jamshdi",
    age: 30,
    child: {
      name: "Omina",
      age: 2,
    },
  },
}
obj.sayHi()
