import {data_birthday} from "./data_birthday.js";
import {data_wedding} from "./data_wedding.js";
import * as el from "./element.js";
//------------------------------modal--------------------------------
let modal = el.appendElement('div', 'modal', null)
let prev_btn = el.appendElement('div', 'prev', '<div class="prev-btn"></div>')
let next_btn = el.appendElement('div', 'next', '<div class="next-btn"></div>')
let close_btn = el.appendElement('span', 'close','&times;')

modal.appendChild(next_btn)
modal.appendChild(prev_btn)  

document.body.appendChild(modal)


let div; //create element for modal-content
let index = 0
let new_array;

//get the id of a list
function getId(e){

    if( e.classList == "identifier"){
        
         let id = e.nextElementSibling.getAttribute('id')
 
        if(id.startsWith("b")){

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
  if(e.classList == "next-btn"){

    index++

    if(index== new_array.length){
      //return to first slide
        index=0;
     }
     div.remove()
     display_data(new_array[index])
  }
  if(e.classList == "prev-btn"){
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
  modal.scrollTop = 0;
  modal.appendChild(div)
  modal.querySelector(".modal-content").appendChild(close_btn)
 

  close_btn.addEventListener('click', function(){
    modal.style.display = 'none';
    document.querySelector("body").style.overflow = 'auto';
    div.remove()
    index = 0
  
  })

  window.addEventListener('click', function(e){
    let modal_container = document.querySelector(".modal-container")
    if (e.target == modal_container) {
    modal.style.display = 'none';
    document.querySelector("body").style.overflow = 'auto';
    div.remove()
    index = 0
    }
  });
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

      isDragging = true;
      modal.classList.add('grabbing')
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

    modal.classList.remove('grabbing')
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


