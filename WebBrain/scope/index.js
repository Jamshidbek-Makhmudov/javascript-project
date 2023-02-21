console.log("hello")
//scope va closure
//let belgilanishidan oldin declare qilinsa error beradi varda bolas undefined beradi
//let scope ichida bolsa unga tashqaridan access qilib bolmaydi
//lexical environment bu ozida 2ta (ozini scopidagi malumotga va tashqaridagi scope) malumotiga access qilishiga qaytiladi
//buni qanday qiladi? birinchi eng ichkarida malumotni chaqirayotganimizda, 1-ozidan 1ta oldingi environmentga murojat qiladi u yerdan topa olmasa
//keyin yanaha tahsqaridagi environmentga murojat qiladi
//closure deb oziga yoq malumotni tashqaridan olib kelishiga aytiladi.
// lexical environment tashqariga access qilish uchun manzil korsatib beradi; closure shu malumotni ichkarida ishlatishimizga aytiladi
//hamma joyda lexical environement boladi; oddiy bosh functionda ham lexical environment boladi; lekin uni environmentda malumot bolmaydi
//lexical environment 2ta ozida 2ta reference saqlaydi; 1-ozida saqlanadigan malumotga reference, 2- tashqaridagi malumotga reference
//garbage collection va lexical environment:
//function oz ishini tugatib bolgandan keyin garbage collection function lexical environmentidagi malumotlarni ochirib yuboradi; bunda oshiqacha
//joy xotirda saqlab turilmaydi
/////////////////////////////////////////
