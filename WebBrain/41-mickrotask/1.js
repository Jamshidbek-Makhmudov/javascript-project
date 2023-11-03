/**
  microtask queue     - bu bajarilishi uchun hech narsani kutmaydigan holatlar
  macrotask queue     - bu bajarilishi uchun  oldin microtasklar hammasini ishi bajarib tugatilgandan keyin bajariladigan holatlarga aytiladi
                      bunga misal qilib promis, asinxron holatlar settimeoutlarni keltirishmiz mumkin
  event loop           - bu microtask va macrotasklarni controll qiladigan holat doim kutub aylanib listen qilib turadi
  callstack          -bu ayni vaqatda execute bolayotgan action yani chaqirilayotgan action
  
 
 */

	/**
	 * Lifecycle methods -bular html mathodlarii hammasi ishlab bolgandan keyin ishga tushadigan ish harakatlarga aytiladi bunda javascriptlar nazarda tutilyabdi
	 * yani agar html tagda script file eng yuqoriga qoyib qoysak pasda boladigan javasctip ishlashi kerak bolgan malumotlar ishlamiy qoladi: shunha js fileni lifesycle methodi orab qouysih kerak ya'ni:
	 * no async or defer  ketma ket ishlaydi alidn js html va hokazo
	 * async bolsa bir vaqtno ozida chaqiradi
	 * deferni ozi esa hamma narsa chqarib boolingandan keyingina javascriptni execute qiladi
	 */

	//1-yoli faqat html yuklab bolingan song ishlidi   //bu async sifatida
document.addEventListener("DOMContentLoaded", () => { 
	test.innerText = "Lorem"


});
//2-yoli html, style, image lar yuklab bolingan keyin ishlidi, undan tashqari bu sal kechroq chaqiriladi   // bu defer sifatida ishlaydi
window.onload = () => { 
	test.innerText = "Lorem"
};

//3-yoli
/**
 * 
<script async src="./1.js"></script>
<script defer src="./1.js"></script>
 */

/**
 beforeunload -boshqa urlga otayotgdan doimiy sorv kiritadi
 ishlatilinishi:

  window.onbeforeunload = ()=>{
	return true
	}
 */

 /**Mutation observer
	 bu reactda use Effectga oxshidii yani htmlda nimadir ozgarish biolsa keyin ishlaydi

	
  */
let observer = new MutationObserver(() => { 
	console.log("working");
	
});
// .observer ichiga 2ta param qabul qiladi 1-id 2-config
/**
 configni ichida kelishi mumkin bolganlar:
 childList  -changes in the direct children of node -majburiy
 subtree - in all descendant of node
 attributes -atributes of node
 characterData -whether observe node.data
 */
let parent = document.querySelector("#parent")
observer.observe(parent, {
	childList: true,
	characterData: true,//faqat 1tasi ozgartsa
	subtree: true, //ichidagi hamma child lar ozgarsa ishlaydi va div container uchun ishlaydi
	attributes: true, //attribute qoshilsa hma ishlaydi

});
parent.innerText="new"