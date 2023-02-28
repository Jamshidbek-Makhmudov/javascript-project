//1.error handler
// — try catch
try {
  //   console.log(number);
  //   JSON.parse(`{name:"webbrain"}`);
  throw new Error("smth went wrong")
} catch {
  console.log("smth went wrong")
}
//try catch bberilganda, errorni ozini keylarini bor:
//1.error.name- referebce errorni catch qiladi
// 2.error.message-in not defined errorlarni catch qiladi
//3.error.stack-errorni ozini catch qiladi
//

//2. — Callbacks
// — Callback hell
//callbackni ichida nested bolib yana  calllback kelsa bu callback hell deyiladi
//callback boshqa bir functionni parametrini ichida kelishiga aytiladi
//function ichida callback function ishlatganimizda if clauseda har ikkala xolatda ham callback ishlatamiz, va keyin yana yangi qiymat biriktirsa
//uni yana callback ni ichida calback ochib yozib ketamiz
var database = {
  najmiddin: {
    login: "najmiddin",
    password: 12345,
    fullname: "Najmiddin Najmiddin",
  },
  sardorbek: {
    login: "sardorbek",
    password: 12345,
    fullname: "Sardorbek Sardorbek",
  },
}
// — Built-in Callbacks
// — Facebook login example
console.log("callback started...")
const login = (lg, pw, callback) => {
  setTimeout(() => {
    if (database.najmiddin.login === lg && database.najmiddin.password === pw) {
      return callback(
        ` welacome to Facebook`,
        () => database.najmiddin.fullname
      )
    } else {
      return callback(`pasword or name is incorrect`)
    }
  }, 1000)
}
login("najmiddin", 12345, (usr, getFullname) => {
  console.log(usr)
  console.log(getFullname())
  console.log("callback finished...")
})
// — Promise: .then, .catch, .finally

//3.Promise. promise callbackni orniga kelgan va ozini parametrida callback function oladi
//function ichida callbacklarni ornida resolve va reject ishlatamzi resolve reject try catchga oxhsaydi

let user = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (
      database.najmiddin.login === "najmiddin" &&
      database.najmiddin.password === 12345
    ) {
      return resolve(`walcome to instagram`)
    } else {
      return reject(`name or pasword error`)
    }
  }, 2000)
})
user
  .then((res) => console.log(res))
  .then(() => console.log("Promise then finished!!"))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise finally finished!!!"))
//bunaqa then berish bitta yoli ikkinchi yoli alohida finnaly methodi bor u oxirida ishlatiladigan ishlar uchun maxsus chiqarilgan
//then resolvedan kelgan ma'lumotni catch rejectdan kelgan ma'lumotni tutib oladi
//lekin kopchilik oquvchilarni qiladigan xatosi Promiseni ozidan asinxron xarakatni kutishadi. Ammo Promise ni ozi kutish vazifasini bajarmaydi
//faqat togri ishlasa uni bomasa buni chiqar diyish vazifasini bajaradi
// — Finally
//xosh nima qilish kerak? Promisa biz xoxlagancha .then() bersak boladi, oxirgi bergan .then() miz yakunlochi boladi, shuning uchun finallyni shu oxirgi then()
//ga berib ketsak boladi
//callback,promise, async wait functionlarini hammasi malumotlarni kutib turish kelgandan keyin chiqarish vazifasini bajaradi
//promise callback bn ishlidi, lekin sintaksisi qiyin
//asynx await Promise bn ishlidi
////////////////////
//4.
// — async await
//formulasi:
//1 //async function getData(){}
//2 // const getData= async ()=>{}
console.log("Promise started")
let request = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (
      database.najmiddin.login === "najmiddin" &&
      database.najmiddin.password === 12345
    ) {
      return resolve(`walcome to your profile`)
    } else {
      return reject(`check your password or name!`)
    }
  }, 2000)
})
const getData = async () => {
  //astnc doim function oldida boladi

  let res = await request //await Promisedan data kelishikutadi kesa keyin qolganlariga ruxsat beradi
  console.log(res)
  console.log("async await__finished__")
}
getData()
//Primise bn async await nima farqi bor deb savol berilsa, async await Promiseni syntasis sugari deyiladi
//async await Promise function bolmasa ishlamidi. await doim Promisedan qaytadigan datani kutadi
