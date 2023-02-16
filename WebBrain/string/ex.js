//1. check(str1,str2)-function yozilsin. berilgan parametrlar bilan birga mos yoki umuman togri kelmasligi
// va qisman togri ekanligini ifodalovchi natija qaytarsin
console.log("hello")
const checkStr = (str1, str2) => {
  let result = str2.localeCompare(str1)
  if (result === -1) {
    console.log("qisman")
  }
}
checkStr("Jamshidbek", "jam")
//2. getCount(str)- function yozilsin. function str dagi harflar sanogini chiqarib bersin
//ex: str='jamshid' {j:1,a:1,m:1,s:1,h:1,i:1,d:1}
function getCount(str) {
  let result = {}
  for (let i = 0; i < str.length; i++) {
    let sanoq = str[i] // [i] ni orniga .at(i) yoki .chartAt(i) ishlatsa ham boladi
    if (result[sanoq]) {
      result[sanoq]++
    } else {
      result[sanoq] = 1
    }
  }
  return console.log(result)
}

getCount("hello")
//3. truncate(str,n) function yozilsin. Berilgan stringdan n'ta harf ajratib chiqarib bersin.
//ex: str:' webbrain academy', n=5
//res: 'webbr'
function getLetters(str, num) {
  let result = str.substring(0, num)
  return console.log(result)
}
getLetters("jamshid", 3)
//4. getCurrency(str)-berilgan pul birligini faqat raqamlarini ajratib chiqarsin
//ex: str: "$1200" -1200

const getCurrency = (str) => {
  let numberRegex = /\d+/g
  let numbersArray = str.match(numberRegex)
  let result = numbersArray ? numbersArray.map(Number) : []
  return console.log(result)
}

getCurrency("$1200")
//5. berilgan str ichidan raqam, string, va characterlarni alohida sanogi bilan chiqaring                   yechilmadi
//ex: "webbr@!n_2022", res:{ letter:6, char:3, numbers:4}
//6. stringdagi sozni 1chi harfini bosh harifga ogirish
function capitalizeFirstLetter(str) {
  let result = str.at(0).toUpperCase() + str.slice(1)
  return console.log(result)
}
capitalizeFirstLetter("jamshid")
