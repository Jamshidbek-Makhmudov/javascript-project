/**
 //binary datani save qiladigan malumot buni arrayga umuman aloqasi yoq
 masalan oddiy hi sozini arrayBuffer orqali yasamoqchimiz buning uchun :

 */
let buffer = new ArrayBuffer(2); //ichiga kiritiladigan 2 xotirasidan h va i uchun 2ta joy ajratadi
let view = new DataView(buffer)

/** 
arrayBufferni togridan togri oqib bolmaganligi tufayli bizga DataView kerak bu arrayBufferni setter va getteri
 */
/**
 set arrat=YBufferga set qiladi. 1- pram 1-qiymatni index 2- uni value si 
 */
view.setInt8(0,104)
view.setInt8(0,105)