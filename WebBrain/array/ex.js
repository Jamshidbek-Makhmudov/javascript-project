console.log("exercise")
let ar1 = [1, 2, 3, 4]
let ar2 = ["webbrain", "academy"]
//1                                                                                       yechilmadi
// res = {
//   w: 1,
//   e: 2,
//   b: 2,
//   r: 1,
//   n: 1,
//   c: 1,
//   a: 3,
//   d: 1,
//   m: 1,
// };
//2. array ichidagi sonlar yigindisini topish kerak
console.log(eval(ar1.join("+")))

//3. berilgan stringda nechta katta harf va nechta kichik harf borligini topish kerak
let str = "WebBrain Academy"
//javib: 3ta katta harf, 12ta kichik harf
//2
//berilgan stringdagi @ ni a harfga ozgartiring
//replaceAll va /g dan foydalanilmasin
let str2 = "WebBr@in Ac@demy"
//3
//dublicate bolgan harflarni ochiring
let srt3 = "webbraaiin accadeemmy"
//4
//string ichidagi raqamlarni toping
let str4 = "We66ra1n Acad4my"
//5 //string berilgan berilgan har bir harifni 2marta kopyatirib qaytaring
let str5 = "Webbrain"
//res: WWeebbrraaiinn
//6 berilgan soz palindrom yoki palindrom emasligini ifodalash kerak
//non, kichik, kityik, ikki, kuchuk;

//7
//berilgan stringlardagi harflar soni bir biriga teng yoki teng emasligini aniqlang. tartibi muhim emas
let strA = "web"
let strB = "ewb"

//8
//stringda qatnashga belilar sonini toping
//res:{w:1e:2bbrain...}
let str8 = "webbrain academy"

//9
//stirngni ziplash
//res:"web2ra2i3n"
let str9 = "Webbrsaiiin"

///10 objectni keylarini toping:
let obj = { title: "webbrain", age: 2 }
//11
//boject ichidagi agelar yigindisini toping
let obj2 = {
  title: "w",
  age: 2,
  child: {
    nema: "web",
    age: 3,
    child: {
      age: 4,
    },
  },
}

//obj valularini boolean typedagisini chiqarish
//malumotni keylar bn birga qaytarish
//12
//array
//remove dublicates
//new Setdan foydalanilmasin
let num = [1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5]
//12
//arraylarni bir biriga taqqoslang
let num1 = [1, 2, 3]
let num2 = [1, 2, 3]
//12
//arraydagi 2xonali sonlarni chiqaring
let arr = [1, 64, 33, 3, 5, 125]

//////////////////////////////////////////////////////////////////////////////////////////////////
//javob shunaqa chiqishi kerak
// let ar = [2, 3, 4, 5, 1, 2, 2];
// [2, 3, 1, 1, 2, 2];
// [1, 1, 1, 2, 2];
// [1, 1, 1];
// [1];
