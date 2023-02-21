console.log("hello")
//recursion function bbu takrorlash function ni deyiladi;
//masala: n raqam berilgan shu raqamgacha bolgan barcha raqamlar yigindisini topisng
//prejectda kop recursion ishlatish fro loop ishlatishni oldini oladi; for loop projectni sekin ishlatishga olib keladi
//xatto oddiy caselarda ham recursion qilib yuborsa boladi
//1 usul:
const forFunc = (n) => {
  sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  console.log(sum)
}
forFunc(4)

//2 usul recursion function bilan
const recFunc = (n) => {
  let sum = 0
  if (n === 1) return (sum += 1)
  else {
    sum += n
    return n - 1
  }
}
console.log(sum)
recFunc(4)
//
console.log("/////////////////////////////////////////////////")
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
}
function getCalc(company) {
  if (Array.isArray(company)) {
    // case (1)
    return company.reduce((prev, current) => prev + current.salary, 0) // sum the array
  } else {
    // case (2)
    let sum = 0
    for (let subdep of Object.values(company)) {
      sum += getCalc(subdep) // recursively call for subcompanys, sum the results
    }
    return sum
  }
}

console.log(getCalc(company))
