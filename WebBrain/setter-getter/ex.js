//exrecise
//guest.set("writable", "name", false)     //shu code ni pasdagi codega alternative sifatida ishlatish yolini toping                      yachilmadi
console.log("/////////////////////////////")
let guest = { name: "webbrain", title: "IT Center" }
Object.defineProperty(guest, "name", {
  writable: true,
  enumerable: true,
  configurable: false,
})
delete guest.name
console.log(guest)
//

//////////////////////////////////////
