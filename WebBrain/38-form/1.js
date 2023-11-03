/**
 * slecet:
 * options
 * value
 * input
 * onblur -- mouseni input olganda ishlidi
 * onfocus -- mouse yana inputga borganda
 * try
 * submit
 * action
 * method
 * onsubmit
 */


//ikki xil yol bilan olsa boladi
// let form = document.forms[0]
let form = document.forms.signin
let select = form.select
let userName=form.name
console.log(userName);
userName.onblur = () => { 
	console.log("test");
	
}

//ikki xil yol bilan olsa boladi
/**
 * 
console.log(form.elements[0]);
console.log(form.elements.name);
*/


