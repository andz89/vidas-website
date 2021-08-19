
import * as slide from "./slide.js";
import {Elements} from "./element.js";
// import * as modal from "./modal.js";
import {Modal} from "./modal.js";



//------------------------------nav--------------------------------
let menu = document.querySelector('.menu-icon')
let a = document.querySelectorAll("nav div ul li a")
let ul = document.querySelector("nav div ul")
let nav_ul_span = document.querySelector("ul span")
let ul_background = document.querySelector('.ul_background')

//tablet and mobile script to show nav
Elements.addListener(menu,"click",null, ul_background,'transform:translateX(0%)')
Elements.addListener(nav_ul_span,"click",null, ul_background,'transform:translateX(100%)')
Elements.addListener(window,"click", ul_background, ul_background,'transform:translateX(100%)')

//click in ul element
ul.addEventListener("click", function(e){
//when click the nav, make the element white
  if(e.target.classList == "link"){
    a.forEach(function(r){
      r.style.color = "white"
    e.target.style.color = "#d15f20"

    })
  }
})


//---------------------reload css-------------------------------
  //hide spinner and show body or main
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(function(){

   document.querySelector("body").classList.remove("spinner-1");
    document.querySelector("main").style.display = "block";
    document.querySelector(".container").style.display = "block";
},1000)
  });


//modal e target
document.body.addEventListener("click",function(e){ 
  Modal.getId(e.target)
  Modal.closeModal(e.target)
  Modal.next(e.target)
  })




