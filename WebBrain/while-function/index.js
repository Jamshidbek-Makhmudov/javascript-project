// while
// whlie shart ni tekshirib keyin amal bajaradi
// let num = 3

// while (num) {
//   console.log("hello")
//   num--
// }
// do while amalni bajarib keyin shartni tekshiradi
// let x = 2
// do {
//   console.log("bye")
//   x--
// } while (x)

// function

// function ichida ternary operator:

// const telegram = (firstname, lastname) => {
//   lastname ? console.log(firstname, lastname) : console.log(firstname) // birinchi yoli
//   // console.log(firstname, lastname || "") // 2chi yoli
// }
// telegram("Jamshid")

// foiz chiqarish
const getGrade = (percentage) => {
  let total = 192
  let result = (percentage * 100) / total
  return result
}
console.log(parseInt(getGrade(150)))
