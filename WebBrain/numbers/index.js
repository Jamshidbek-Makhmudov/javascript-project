//numbers
// numberlr orasiga _ belgisini qoyib ketish shunchaki readablityni oshirish uchun kerak xolos,
//lekin +"1_000" +1 boladigan bolsa + stringni numberga ozgartiradi lekin string ichidagi _ string oziga tegishli deb tushunadi
//shu sababli ntija NaN chiqadi
console.log(1000_000_000 + 1)
console.log(2e6) //e buyerda 0 6 esa 0 ni nechtaligi
console.log(Number((0.2 + 0.1).toFixed(1))) //toFixed buyrugi bizga numberlarni oxiridagi raqamlardan biz xoxlaganimizni olib qolganini yaxlitlab beradi
<<<<<<< HEAD
//shu typeof string bopqoladi, Number esa ularni yana number typega ozgartrib beradi
=======
//shu typeof string bopqoladi, Number esa ularni yana numbergatyoe ozgartrib beradi
>>>>>>> 9eb68e4a6a35101bb9da3783bd365cbf3046b962
let num = "0.2+0.3"
console.log(parseInt(num)) //0
console.log(parseFloat(num)) //0.2
console.log(Number(num)) //NaN
// bunday chiqqanini sababi, int birinchi korgan raqamni oladi, float 1-korgan frakshinni oladi, number bolsa number
// typga ozgartirishi kerak edi, lekin ortada + bolganligi uchun NaN chiqaradi.
//stirngda bolsa ular ortasidagi ammalrni bajarishi uchun evelda foylalaniladi:
console.log(eval(num)) // evel amal ni bajardi va natijani yana numberga ozgartiradi
//numberlarni yana boshqa turlani haqida gaplashsak, decimal- oddiy raqamlar bolsa, Hexademical- katta raqamlarni harflar bn ishlatish
// binari- raqamlarni kodlarni bilan korsatish
let num2 = 5
console.log(num2.toString(2)) //toString string otqazadi lekin uni ichiga parametr kirgizsak binaryga ogiradi
console.log(parseInt("101", 2)) // parseInt numberga ogiradi lekin, umga 2-parametr kirgissak decimal numer qilib beradi
<<<<<<< HEAD
//isNaN true yoki false qaytaradi numermi emas degan savolga javob beradi
=======
//isNaN true yoki false qaytaradi numermi emas degan sav   olga javob beradi
>>>>>>> 9eb68e4a6a35101bb9da3783bd365cbf3046b962
console.log(isNaN(+"1_000")) //true
console.log(isNaN(+"1000")) //false    sababi: qavsdagi number chiqadi isNaN esa NaN ya'ni raqammas degani shuning uchun false qaytardi
console.log(Object.is("jam", "sam")) //=== bn birxil ya'ni 2ta qiymatni typegacha tengligini tekshiradi.

//
//The toPrecision() method returns a string representing the Number object to the specified precision.
//toFixed(n) provides n length after the decimal point; toPrecision(x) provides x total length.
//The toPrecision() method rounds a number to a specified precision or significant digits.
// If the rounded number requires more digits than the original number, the method adds decimals and
//nulls to create the specified format.
let num3 = 5.12344
console.log(num3.toPrecision(2))
// net\ctadir kop 9999 davomiy yozilsa 9 uchun space yetmaganligi uchun js son oxiriga ozi 1ta 0 qoshib oladi
//javascriptdagi buildIn funcsiyasi oz ichiga math kutbxonasini oladi
console.log(Math.PI) //PI ni qiymatini chiqaradi
console.log(Math.abs(-0.21)) //doim sonning musbat absolut qismini chiqarib beradi
console.log(Math.round(2.5)) //aniq  yaxslitlab beradi
console.log(Math.floor(2.5)) //pasga yaxlitlaydi
console.log(Math.ceil(2.5)) //tepaga yaxlitlaydi
console.log(Math.trunc(2.5)) //kasr qismini ochirib beradi trunc ni floordan farqi manfiy sonlarda bilinadi
console.log(Math.random()) //ixtiyoriy random raqam chiqarib beradi default
// xolatda 0 va 1 orasidan tenlaydi oxiriga nechiga kopaytiruv qoysk osha songacha
//bolgan sonlar orasidan random tanlaydi
console.log(Math.min(1, 2, 3, 4, 5, 6, 6, 7, 8, 89)) //raqamlar ichidan eng kichigini topib berdi
console.log(Math.max(1, 2, 3, 4, 5, 6, 6, 7, 8, 89)) //eng kattasini topib berdi
console.log(Math.pow(2, 3)) //sonni darajaga oshiradi
console.log(Math.sqrt(3)) // ildiz ostida chiqaradi
console.log(Math.cbrt(4)) //sonni cubini chiqaradi
<<<<<<< HEAD
console.log(Math.sign(5)) //The Math.sign() method retuns whether a number is negative, positive or zero.

//If the number is positive, this method returns 1.
//If the number is negative, it returns -1.
//If the number is zero, it returns 0.
//lekin bu math operatorlaridan ba'zilari ishni sekinlashtiradi shuning uchun ularni orniga
//alternativ bolgan boshqa operatorlarni ishlatgan ma'qul masakan bitwise operatorlari
//toliqroq m'lumot w3schoolda
//&	AND	Sets each bit to 1 if both bits are 1
//|	OR	Sets each bit to 1 if one of two bits is 1
//^	XOR	Sets each bit to 1 if only one of two bits is 1
//~	NOT	Inverts all the bits
//<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
//>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
//>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
//The JavaScript math hypot() method is used to get the square root of the sum of the squares of a set of numbers.
// Math.hypot(n1,n2,..) w3school

//objectga qaytamiz
//optional chaining:
//bu asosan objectda nest bolganda ishlatilinadi, backenddan malumot kelayotganda, nested object ichida undefined, null yoki object yoq bolgan xolatda unga murojat qilsak
//error qaytaradi shunda optional chainingdan foydalansak error orniga undefined qilib beradi
let obj = { name: "jamshid", child: undefined }
console.log(obj.child?.age)
=======
console.log(Math.sign(5));

>>>>>>> 9eb68e4a6a35101bb9da3783bd365cbf3046b962
