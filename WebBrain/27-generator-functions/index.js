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


//hammasini chiqarish
// //loop qilib chiqarib beradi ikalasini
// for (vl of generator) { 
//   console.log(vl);
  
// }
//  //arrayga solib ikalasini chiqarib beradi
// console.log([...generator]);

/** 

//1ta bita chiqarish:
const generator = getData() //generator functionlarni shunchaki chaqirib bolmayid uni generate qilib olish kerak
console.log(generator.next()) //next() bu generator functionni ozini key si   // value:1 done:false chiqadi
console.log(generator.next())
console.log(generator.next())


*/

let users = [
  {id:1, name:"name"},
  {id:2, name:"nam2"},
  {id:3, name:"nam3"},
];

const onDelete = (id) => { 
  let res = users.filter(vl => vl.id != id)
  users=res;

  return users
};
//onDelete(2);


/**
 * generator functionni yaxshi tarafi while infinity loopga tushsa ham bir marta chaqirilganda bir marta ishlaydi
 */
function* getData2() { 
  let id = 0
  while (true) { 
    yield ++id
    /**
     
    if (id == 3) { 
      return id
    }

    */
  }
}
//yield function pausaga qoyadi yani vaqtincha ushlab turadi, return esa toxtatadi
const generator = getData2();
console.log(generator.next())
console.log(generator.next())

/**
 * generetor function bilan paramlarni ishlatish
 * 
 */
function* getData3(param) { 
  //foreach bersa undefined chiqadi
  for (vl of param) {
   yield vl;

   }
}
const generator3 = getData3([1,2,3]);
console.log(generator.next())
console.log(generator.next())



/**
 * generetor function bilan next()ni paramlarni olish
 * 
 */
function* getData4() { 
let i =0;
  while (true) {
    let nextValue = yield ++i
    if(nextValue) i+=nextValue
   }
}
const generator4 = getData4();
console.log(generator.next())
console.log(generator.next(2))
console.log(generator.next(5))