

//------------------------------nav--------------------------------
let menu = document.querySelector('.menu-icon')
let a = document.querySelectorAll("nav div ul li a")

let ul = document.querySelector("nav div ul")
let nav_ul_span = document.querySelector("ul span")
let ul_background = document.querySelector('.ul_background')

//tablet and mobile script nav
menu.addEventListener("click", function(e){
 
  ul_background.style.transform = "translateX(0%)";

})
nav_ul_span.addEventListener("click", function(){
 
ul_background.style.transform = "translateX(100%)";

})

// Outside Click Close
window.addEventListener('click', outsideClick);
function outsideClick(e) {
if (e.target == ul_background) {
  ul_background.style.transform = "translateX(100%)";

}
}


//click in ul element
ul.addEventListener("click", function(e){
clickLinks(e.target)

})


//show css loader in ul element when clicking in nav
function clickLinks(e) {

  if(e.classList == "link"){
    a.forEach(function(r){
      r.style.color = "white"
    e.style.color = "#d15f20"

    })
  }
}


//---------------------reload css-------------------------------
  //show spinner when reload
  document.querySelector("body").classList.add("spinner-1");
  
  //hide spinner and show body or main
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(function(){

    document.querySelector("body").classList.remove("spinner-1");
    document.querySelector("main").style.display = "block";
  document.querySelector(".container").style.display = "block";
},1000)
  });



//------------------------------modal--------------------------------


import {data_birthday} from "./data_birthday.js"
import {data_wedding} from "./data_wedding.js"

let modal = document.createElement('div')
modal.className += "modal" 

let span = document.createElement('span')
span.className += "close" 
span.innerHTML =`
← Back
`
let next_btn = document.createElement('small')
next_btn.className += "next" 
next_btn.innerHTML =`
Next
`
let prev_btn = document.createElement('small')
prev_btn.className += "prev" 
prev_btn.innerHTML =`
Prev
`

document.body.appendChild(modal)




let div;
let  index = 0
let new_array;


function getId(e){

    if( e.classList == "identifier"){
        
         let id = e.nextElementSibling.getAttribute('id')
 
        if(id.startsWith("b")){

        // let clone;
        //   clone = data_birthday.filter(function(e){
        //  return e.id != id
        //  })
        //  let target_data = data_birthday.filter(function(e){
        //    return e.id == id
        //  })

        index = data_birthday.findIndex(e =>{
        return  e.id == id
        })
        new_array= data_birthday;
        }

        if(id.startsWith("w")){
        index = data_wedding.findIndex(e =>{
        return  e.id == id
        })
        new_array= data_wedding;

        }
    
      display_data(new_array[index])
      
    }
}


//modal e target
document.querySelector("main").addEventListener("click",function(e){ 
  getId(e.target)
})

modal.addEventListener("click", function(e){
  next(e.target)

})

function next(e){
  if(e.classList == "next"){

    index++

    if(index== new_array.length){
      //return to first slide
        index=0;
     }
     div.remove()
     display_data(new_array[index])
  }
  if(e.classList == "prev"){
    if(index == 0){
    index = new_array.length-1;
    }else{
    index--;
    }
 div.remove()
 display_data(new_array[index])
}

}




function display_data(data){
div = document.createElement('div')
  div.className +=  "modal-container"
  div.innerHTML = `
  <div class="modal-content">
    <div class="image-div">

   <a href="${data.link}" target="blank">
  <img src="${data.source}"  alt="...">
  </a>
  <div class="view-image"><strong>•</strong> <p>Click the image to view more photos</p></div>
  </div>

  <div id="${data.id}" class=details>

  
    <h5>${data.name}</h5>
    <h2>${data.price}</h2>
    <p class="header_description">Product Details:</p>
    <p class="description">${data.description}</p>

    <div class="modal-contact">
    <h4> Contact us for your oders and querries:</h4>
    <div class="modal-flex">
              <div class="modal-call">
                  
                  <div class="img_and_numbers">  <img src="img/call.svg"   alt=""> <p>827-3520 / 0955-846-4400</p></div>
              </div>

              <div class="modal-text">
                  <div class="img_and_link"> <img  src="img/facebook5.svg"  alt=""> 
                  <small>Click the link below to message us on facebook </small>
                  <a href="https://www.facebook.com/gwillevent">https://www.facebook.com/gwillevent</a></div>
              </div>
      </div>
  </div>
  </div>
  </div>

  `

  document.querySelector("body").style.overflow = 'hidden';
  modal.style.display = 'block';
  modal.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
  modal.appendChild(next_btn)
  modal.appendChild(prev_btn)  
  modal.appendChild(div)
  modal.appendChild(span)


  let closeBtn = document.querySelector(".close")
  closeBtn.addEventListener('click', closeModal)
  window.addEventListener('click', outsideClick);

  // Close
  function closeModal() {
  modal.style.display = 'none';
  document.querySelector("body").style.overflow = 'auto';
  div.remove()
  index = 0
  }

//  Outside Click close
function outsideClick(e) {
let modal_container = document.querySelector(".modal-container")
if (e.target == modal_container) {
modal.style.display = 'none';
document.querySelector("body").style.overflow = 'auto';
div.remove()
index = 0
}
}



}


let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0
 


  modal.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  modal.addEventListener('touchstart', touchStart())
  modal.addEventListener('touchend', touchEnd)
  modal.addEventListener('touchmove', touchMove)

  function touchStart(){
   
    return function(event){
     
      startPos = getPositionX(event)
      console.log(startPos)
  
      isDragging = true;
    }
  }

  function touchEnd(){
    isDragging = false
    
   

    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -100 ) {
      index++

    if(index== new_array.length){
      //return to first slide
        index = 0;
     }
     div.remove()
     display_data(new_array[index])
      
  
    }

    if (movedBy > 100){

      if(index == 0){
        index = new_array.length-1;
        }else{
        index--;
        }
     div.remove()
     display_data(new_array[index])

    }

  }
  function touchMove(event){
    if(isDragging){
      const currentPosition = getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos

    }
}
function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}


