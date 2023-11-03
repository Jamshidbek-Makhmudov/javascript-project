/**
 *export default nomi;
 deafult bilan export qilingan fileni boshqa fileda xoxlagan nom bilan import qilsak boladi aynana shu nom bolishi shart emas 
 */

//29-curry function
/**
 * curry function bir vaqtni ozida bir nechta ichma ich ketgan functionlarga murojat qilish
 */

//30-proxy
/**
 * Proxy validation uchun ishlatilinadi
 * proxyni ichidagi birnchi qiymat biz kiritadigan non primitive value,
 * ikkinchisi {} ichida biz unga kiritadigan saeetinglarimiz
 * ichida get methodi bor ozini get methodi nimaga return qilsqa proxyni 1-parametrga kiritadigan valuemiz shunga teng bolib qoladi
 *paramdagi target butub boshli object, prop uni key si, receiver tshqaridan kirivchi ozragtirilvchi value
 */

let user = {
	name: 'Jamshid',
	_strir: 123456,
	_password: '123',
};
const proxy = new Proxy(user, {
	get(target, prop, reciever) {
		if (prop.startsWith('_')) return `access_denied for${prop} `;
		return target[prop]; // bu bilan biz propga dynamic boghlanamiz
	},
});
console.log(proxy.name);

//_passwordni ozgartrishiga qarshi validation
const proxy2 = new Proxy(user, {
	set(target, prop, reciever) {
		if (prop == '_password') {
			return false;
		}
		target[prop] = reciever;

		return true;
	},
});
proxy2._password = '321';
console.log(proxy2._password);

//31-proxy2
/**
 * ownKeys  methodi loop bolganda qandaydir validation qilishimiz uchun kerak
 * pasdan loop bolganda _password ni korsatma degan code yozdik
 * ichiga faqat 1ta param qabul qiladi
 */
let user3 = {
	name: 'Jamshid',
	_password: '123',
};
const proxy3 = new Proxy(user3, {
	ownKeys(target) {
		return Object.keys(target).filter(value => !value.startsWith('_'));
	},
});

for (value in proxy3) {
	console.log('================================================================');

	console.log(value);
}

//has, 2ta param qabul qiladi true yoki false qaytaradi:;
//bu yerda tarhet teng range ga prop teng tashqaridan kiritiladigan malumotga
let range = {
	from: 1,
	to:10
}
let proxy4 = new Proxy(range, {
	has(target, prop) {
		return target.from <= prop && target.to >= prop;
	 }
})
console.log(2 in proxy4);

//reflect faqat setter va getter uchun ishlidi proxydan malumot qoshish va olish uchun kerak boladi
let user5 = {
		name: 'Jamshid',
	_password: '123',
};
Reflect.set(user5, "position", "developer");
console.log(user5);

console.log(Reflect.get(user5,"position"));
