let str1 = "web brain   \n  academy" // stringda  \n belgi new linega otqazadi, \t esa  tab tashlaydi + esa ularni qoshib beradi
console.log(str1)
//let
let str2 = "jamshid"
let str3 = new String("jamshidbek")
console.log(str2 == str3) //fasle qaytaradi sababi new cunstructor object qaytaradi, shunga lekin str3 typeof qilsa string beradi faqat saqal boshqacharoq str
console.log(str3 == "jamshidbek") // true qaytadi sababi new Stringni ichida "jamshidbek" qiymati bor
console.log(str2.localeCompare(str3)) // -1 qaytaradi bu degani false
console.log(str3.localeCompare(str2)) // 1 qaytaradi bu degani true
console.log(str3.localeCompare("jamshidbek")) // 0 qaytaradi bu degani true degani
// lekin nega true yoki falseni ozini qaytarmayabdi? sababi bu tekshirganda sal boshqacharoq tekshiradi:
// localCompare dan oldingi qiymat ichida keyingi qaiymat mavjudmi degani javob 3 xil boladi. 1) bor bir xil 0; bor qisman 1 3) umuman yoq -1
console.log(str2[1]) //index manfiy son qabul qilmaydi string indexini chiqarish uchun
console.log(str2.at(-1)) //index manfiy son qabul qiladi va orqadan boshlab xisoblaydi
console.log(str2.charAt(1)) //index manfiy son qabul qilmaydi string indexini chiqarish uchun
let number = 1994
console.log(str2.length)
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())
console.log(`${number}`.toLowerCase()) // string bu methodlari number bilan ishlamiydi lekin biz `${}` buni ichiga yozsak
// keladigan ma'limot nima bolsa hma string korinishida keladi
//console.log(srt2.toLocalLowerCase("turkish")) //localCase lar bizni kamputerimiz tiliga qarab ishlaydi, ichiga parametr kirgizdirsak
//shu parametrga qarab ishlaydi
console.log(str2.indexOf("jam", 5)) // nechinchi indexdan boshlanishini belgilaydi, unga ikinchi number parametr kirgizsak, osha raqamdagi indexdfan boshlab tekshiradi
console.log(str2.lastIndexOf("jam,", 6)) //oxoridan boshlab tekshiradi
console.log(str2.includes("in")) //ichida bor yoki yoqligini tekshirib beradi //boolean chiqaradi
console.log(str2.startsWith("jam")) //boolean chiqaradi shu soz bilan boshlanganmi degan savolga javob beradi
console.log(str2.endsWith("shid"))
console.log(str2.padStart(10, ".")) //oxiriga  nuqta qoyib beradi
console.log(str2.padEnd(10, "*"))
console.log(str2.slice(0, 2)) //0dan 2chi indexgacha chiqaradi
console.log(str2.substring(2, 0)) //ozi togrilab kichigidan kattasiga qilib ozi togrilab oladi, minus qiymat olmaydi
// eval stringlarni qoshib berishini otdik.
console.log(str2.trim()) //bosh  joylarni ignor qilib beradi
console.log(str2.split()) //malumotni arrayga ozgartiradi
console.log(str2.concat("webbrain")) //2ta stringni qoshib beradi
console.log(str2.search()) //indexOfga oxshidi, faqat undan tezroq ishlaydi,  regex qabul qiladi
console.log(new String("jamshid").valueOf) //shunaqa constructorda kelsa faqat valuesini ozini olib beradi
console.log(str2.replace("jam", "Jam")) //ozgartiradiu   /i qoysak birinchi kelganini, gi hammasini ozgartiradi
for (char of str1) {
  //string bilan ham loop ishlatsa boladi
  console.log(char)
}
console.log(str1.split(" ", 3)) //kesib oladi
