
import * as slide from "./slide.js";
import * as element_function from "./element.js";
import * as modal from "./modal.js";

//------------------------------nav--------------------------------
let menu = element_function.element('.menu-icon')
let a = element_function.elementAll("nav div ul li a")
let ul = element_function.element("nav div ul")
let nav_ul_span = element_function.element("ul span")
let ul_background = element_function.element('.ul_background')

//tablet and mobile script to show nav
element_function.addListener(menu,"click",null, ul_background,'transform:translateX(0%)')
element_function.addListener(nav_ul_span,"click",null, ul_background,'transform:translateX(100%)')
element_function.addListener(window,"click", ul_background, ul_background,'transform:translateX(100%)')

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

    element_function.element("body").classList.remove("spinner-1");
    element_function.element("main").style.display = "block";
    element_function.element(".container").style.display = "block";
},1000)
  });


