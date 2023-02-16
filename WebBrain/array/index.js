console.log("array")
let arr = [1, 2, 3, "jamshid", true, false, null, undefined, function () {}]
console.log(arr[arr.length - 1]) // arrayni ichiga kirmoqchi bolsa sanoq orqali kirishga majburmiz, lekin real loyilarda keladigan malumot sanab chiqar olmaymiz
//shuning uchun yuqoridagi korinishda yozib ichiga kirsak boladi
console.log(arr.at(-1)) //bu yangi chiqqan ma'luimot bolib minuslik qiymat orqali arrayni ichiga kirishimiz mumkin
let ar = new Array(5) //biz new Array deb ham yangi arrayni yasashiomiz mumkin. bu oddiy yasashdan nima farqi bor?
//agar ar ni ichiga number yozsak length ni kirgizgan bolasmiz ya'ni buterda 5ta ichi bosh bolgan itemni array ichiga qoshib bergan
//ichiga string yozsak shunchaki shu stringni arrayni ichga qoshib  qoyadi
//agar raqamlar 2va undan ortiq kiritilsa, stringga oxshab arrayni ichioga bu numberlarni qoshib beradi
//arrayni indexlarni ozgartiesak boladi objectga oxshab,
ar[10] = "sam"
console.log(ar)
//toString() stringga ozgartiradi/ join(",") arrayga ozgartiradi joinni ichiga parametr kirgizdirsak arrayga ozgartirganda itemlar orasiga shu parametrni qoshib chiqadi
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]
let arr3 = arr1.concat(arr2, "sam") //2t arrayni bir biriga qoshib beradi, agar buni orniga + qoysa string qilib qoshib qoyadi
console.log(arr3)
//arrayni typeof qilib korsa object chiqardi, uni aniq arraymi yoqmi tekshirish uchun, Array.isArray() methodidan foydalanamiz
console.log(Array.isArray(arr)) //bollean javob chiqadi
//arrayni taqqoslash
let arr4 = []
console.log(arr4 == 0) //true, bosh array 0 ga teng,
//arrayda loop ishlatsa boladi 2chi qiymatga length yozish kerak
for (i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
//lekin array uchun yangi loop of va in  chiqqan. bularni bir biridan farqi, of valueni ozini chiqarib beradi. in indexini chiqaradi
for (value of arr) {
  console.log(value)
}
//array methodlari
arr.push(6) //oxiriga value qoshadi, xoxlagan narsamizni qoshasak boladi
arr.pop() //oxiridan valuni ochiradi
arr.unshift(0) //boshiga value qoshiladi
arr.shift() //boshida value ochiradi
arr.splice(2, 2) //3ta vazifasi bor malumot qoshish ochirish yangilash.
// 1chi va 2chi paramater dan gacha bolgan itemni ochirb tashlaydi. 3chi parametr esa ochirib tashlangan itemni orniga yangi item qoshadi
//yangi array yasamaydi, shunchaki eskisini ozgartiradi
//agar 3ta parametr berilib 2chi parametr 0 bolsa item ichirmaydi shunchaki 1chi parametrdan keyin 3chi marametrni qoshadi
arr.slice(2, 2) //sliceni splicedan farqi slice arrni ozini ozgartirmaydi, ichidagi paramertlarni ikalasi ham index, ya'ni 2 va 2 berilsa hech narsani ochirmaydi
//spliceda esa 2 va 2 yozsak 2chi indexdan boshlab 2ta element ochiradi
console.log(arr2.indexOf(1)) //indeOf ichidagi parametr arrayni qaysi indexida borligini chiqarib beradi, malutmo yoq bolsa -1 chiqarib beradi
//lekin bir xil itemlar kop bolsa ham faqat 1chi korgan itemda toxtaydi, shunda indexf ichiga 2chi parametr kirgissak, nechanchi parametdan boshlab qidirsh kerakligini bildiradi
//lastIndexOf() oxoridan boshlab itemni qidiradi
//join stringga ogiradi  //split stringga ogiradi
//includes() boolean qaytaradi array ichida shu element bor yoqligini korsatadi
//reverse() array elementlarii teskarisini yozib beradi
