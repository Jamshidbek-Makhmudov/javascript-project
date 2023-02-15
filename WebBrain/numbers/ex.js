//1. istalgan sonni binary korinishga otqazib nechta 0 va nechta 1 qatnshganini aniqlang
//ex 5===101
//res: 2ta 1 va 1ta 0
let num1 = 5
console.log(num1.toString(2))
//2. berilgan sonlar ichida eng katta va eng kichik sonlar ayirmasini toping. manfiy son chiqmasin
function calcNum(num) {
  let minNum = Math.min(...num)
  let maxNum = Math.max(...num)
  let result = maxNum - minNum
  return result
}
let num = [1, 2, 3]
let result = calcNum(num)
console.log(Math.abs(result))
//3. math ning trunc vs floor vs ceil, parseInt lar bn farqini tushuntirib bering
//4. randomInteger(min, max)function yozilsin. min bn max ortasidagi taxminiy raqamlarni chiqarib bersin
//ex: min= 1, max=50,
//output: 1 dan 50gacha bolgan ixtiyoriy raqam
const randomNum = () => {
  let answer = Math.random() * 50
  if (answer >= 1) return answer
  else return 1
}
console.log(randomNum())
