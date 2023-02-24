console.log("hello")
//1.error handler
// — try catch
throw new Error("snu'iy error!") //biz suniy error yasashimiz ham mumkin
try {
  console.log(number)
} catch (error) {
  console.log(error.stack)
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

// — Built-in Callbacks
// — Facebook login example
// — Promise: .then, .catch, .finally
// — promise chaining
// — promise all
// — async await
// — Finally
