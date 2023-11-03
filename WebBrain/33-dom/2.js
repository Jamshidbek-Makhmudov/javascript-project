/**
 * mouse events:
 * click 				-bosilganda
 * contextmenu	- mouse ni ong tomoni bilan bosilganda
 * mouseover		- mouse ustiga borganda
 * mouseout		- mouse ustidan ketganda
 * mousedown   - mouse bosilganda
 * mouseup   - mouse bosib qayta olingan vaqtida
 * mousemove - mouse harakatga kelganda
 * event bo shu berilgan clickni oziga teng target shu eventni ichidagi html taginioziga teng
 * event.target === this   thisga teng
 * ondbclick    -double click
 * oncopy   = ctr+c
 * onpaste   = ctr+v
 * change yoki onchnage
 * 
 * 
 */
/**
 * Keyboard:  -event.key   boolean qaytaradi
 * shiftKey    -shift
 * altKey	  -ctrl
 * metaKey -Cmd for mac
 * 
 */
/**
 * keyboard actions:
 * 
 * event.key
 * event.code
 * event.type
 * event.keys  -can't be triggered by default
 */
/**
 * event Bublingni oldini olish:
 * event.stopPropagation()  ozinikini skip qivoradi
 * evemt.stopImmediatePropagation()   -ozinikidan boshqasini skip qivoradi
 * ya'ni bular  birn nechta click funtionlar htmlda ichma ich yozilsa ichidagi element clikc qilinganda tashqarisinidagilari ham ishlalb ketadi
 * buni oldini olish uchun ishlatiniladi
 */

/**
 * event delegation:
 * event.preventDefault
 * event.x
 * event.y       mouse qimirganalda
 * event.target          on click uchun
 * event.target.value   --input uchun
 * 
 */

/**
 * 
 */


/**
 * adeventlistener bilan on kelyamdi
node ni ozidan olinsa on bilan yoziladi
*/
let btn = document.querySelector("#btn");
// btn.addEventListener("contextmenu", () => { 
// 	alert("hey")
// });
btn.oncontextmenu = () => { 
	alert("hey")

};
