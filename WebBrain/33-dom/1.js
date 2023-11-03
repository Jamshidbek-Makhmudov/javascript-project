/**
 * window oz ichiga DOM, BOM, javascriptni qabul qiladi
 * DOM-document object model- htmldagi barcha malumotlarga javascript orqali acces qilsa boladi
 * CSSOM-css object model for css rules and stylesheets
 * BOM-browser object model
 * 
 */
/**
 * 
window.alert("hey");
alert("hey");
window.innerHeight()
window.innerWidth();
window.title
window.href
window.location;

*/


/**
 * Nodes:
 * -parentNode
 * -childNode,firstChild,lastChild
 * Siblings,childs,Parents
 * nextSibling, previousSibling
 * Elements:
 * parentElement, childElement
 * children, fistElementChild, lastElementChild
 * nextElemenrtSibling, previousElemenrtSibling
 */
/**
let ul = document.getElementsByTagName("ul");
let parent=document.getElementsByClassName("parent")
let id = document.getElementById("main");
letqr = document.querySelector("ul");
////////
// qr.innerHTML = "	<h1>hey</h1>";
// qr.innerText = "	<h1>hey</h1>";
// qr.textContent = "	<h1>hey</h1>";

//Attributelar
 * 
parent.hasAttribute('class') //boolean
parent.getAttribute('class'); //shu atributeni chiqarib beradi
parent.setAttribute('class'); 
parent.removeAttribute('class');  
//
document.createElement("div")
document.createTextNode("hi")
ul = parent.cloneNode(true); //parentdagi barcha malumotni clone 1ilib beradi

//Insetion
ul.before
ul.prepend
ul.appaned
ul.after
ul.beforebegin
ul.afterbegin
ul.remove()
//
//style:
parent.classListToggle("class") //class bosa obtashidi bomasa qoshadi
parent.classListContains("class") //bollean qaytaradi
parent.style.background="red"
parent.style.cssText = `
background-color:red;
border:1px solid red;

`


////
console.log(parent.offsetTop); //border bilan birga inobatga oladi
console.log(parent.offsetLeft);
console.log(parent.offsetParent);
console.log(parent.offsetWidth);
console.log(parent.clientWidth);//faqat ichidagi malumotni inobatga oladi
console.log(parent.clientLeft);

*/
//scroll:

let parent2 = document.querySelector(".parent2")
let parent = document.querySelector(".parent")
let btn = document.querySelector("button")
function expand() { 
	if (parent2.clientHeight === parent2.scrollHeight) {
		parent2.style.height = "150px";
		btn.innerHTML="show more";
		
		
	} else { 
		
		parent2.style.height=`${parent2.scrollHeight}px`;
		btn.innerHTML="show less";
	}


}

function sr() {
	parent2.scroll(0,parent2.scrollHeight)
	
}
function sr2() {
	parent2.scrollBy(0,10)
	
}
function sr3() {
	parent2.scrollBy(0,-10)
	
}
function sr3() {
	parent2.scrollTo(0,-10) //pixel boyicha
	
}


 