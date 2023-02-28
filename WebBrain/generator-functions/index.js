console.log("hello")
//generator function deb biz xoxlagan paytda pause qilib toxtadib yana xoxlagan paytda ishlata oladigan  ya'ni reusable functionga aytiladi
//qisaqa qilib multiple returnga qaytadigan function desak ham  boladi
//yield, return
//loop
//generator instance
//id generator
//.next va . return properties
function* getData() {
  //bu generator function asl birinchi korinishi,
  // * belgisi functiondan keyin yoki getData dan oldin yozilishi ham mumkin bu ixtiyoriy, lekin functiondan keyin yozish tavsiya qilinadi
  //lekin har ikala tarfdan joy tashlanmasligi kere bittasiga qoshib yozilishi shart
  yield 1 //yield bu yerda returnga teng
  yield 2
}
const generator = getData() //generator functionlarni shunchaki chaqirib bolmayid uni generate qilib olish kerak
console.log(generator.next()) //next() bu generator functionni ozini key si   // value:1 done:false chiqadi
console.log(generator.next())
console.log(generator.next())
