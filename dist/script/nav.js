let menu = document.querySelector('.menu-icon')
let a = document.querySelectorAll("nav div ul li a")
let ul = document.querySelector("nav div ul")
let nav_ul_span = document.querySelector("ul span")
let ul_background = document.querySelector('.ul_background')
menu.addEventListener("click", function(e){
 
  ul_background.style.transform = "translateX(0%)";

})

nav_ul_span.addEventListener("click", function(){
 
ul_background.style.transform = "translateX(100%)";


})

  
window.addEventListener('click', outsideClick);
// Close If Outside Click
function outsideClick(e) {
if (e.target == ul_background) {
  ul_background.style.transform = "translateX(100%)";


}
}


ul.addEventListener("click", function(e){

 
  clickLinks(e.target)
  
  })


function clickLinks(e) {

  if(e.classList == "link"){
    document.querySelector("body").classList.add("spinner-1");
    document.querySelector("main").style.display = "none";
    document.querySelector(".container").style.display = "none";
    a.forEach(function(r){
      r.style.color = "white"
    e.style.color = "#d15f20"
    })
  }
}
document.querySelector("body").classList.add("spinner-1");

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector("body").classList.remove("spinner-1");
});




