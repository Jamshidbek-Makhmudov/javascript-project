//masalalar
//1.karra jadvali masalasi

// for (let i = 2; i <= 9; i++) {
//   let row = ""
//   console.log(`${i} lik karra jadvali`)
//   for (let j = 2; j <= 9; j++) {
//     row += `
//     ${i} * ${j} = ${i * j}\t`
//   }
//   console.log(row)
// }

//2.n ta raqam ichidan prime(oziga va 1ga bolinuchi) sonlarni topish)
//

// function findPrimes(n) {
//   let primes = []
//   for (let i = 2; i <= n; i++) {
//     let isPrime = true
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false
//         break
//       }
//     }
//     if (isPrime) primes.push(i)
//   }
//   return primes
// }

// console.log(findPrimes(10))

//3.for dagi kodni while yozish
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}`)
// }

// let i = 0
// while (i < 3) {
//   alert(`number ${i}`)
//   i++
// }

//4.  18dan katta raqam kiritilsa true yoki aksini qaytarsin va buni ? bn va  || bn qayta yozing

// function checkAge(age) {
//   if (age > 18) {
//     return true
//   } else {
//     return confirm("Did your parents allow you?") // alertga oxshagan
//   }
// }
// (checkAge(17)

//5. write a function min(a,b) which returns the least of two numbers
// ex -> min(2,5)==2

// const min = (a, b) => {
//   if (a > b) return alert(b)
//   else if (a < b) return alert(a)
//   return alert("numbers are equal!")
// }
// min(2, 2)

// write function pow(x,n) that return, x in power n.

// const pow = (x, n) => {
//   let result = console.log(x ** n)
//   return result
// }
// pow(2, 3)

// quydagilarni function expressionda qaytaring

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }
// ask(
//   "do you agree?",
//   function () {
//     alert("you agreed")
//   },
//   function () {
//     alert("you canseled")
//   }
// )

//javob

// const aski = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no()
// }

// aski(
//   "do you agree?",
//   () => {
//     alert("you agreed")
//   },
//   () => {
//     alert("you canseled")
//   }
// )
