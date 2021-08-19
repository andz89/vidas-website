import {data_birthday} from "./data_birthday.js";
import {data_wedding} from "./data_wedding.js";
import {Elements} from "./element.js";

//------------------------------modal--------------------------------
let modal = Elements.appendElement('div', 'modal', null)
let prev_btn = Elements.appendElement('div', 'prev', '<div class="prev-btn"></div>')
let next_btn = Elements.appendElement('div', 'next', '<div class="next-btn"></div>')
let close_btn = Elements.appendElement('span', 'close','&times;')

modal.appendChild(next_btn)
modal.appendChild(prev_btn)  
document.body.appendChild(modal)


let div; //create element for modal-content
let index = 0
let new_array;

export class Modal{

    //get the id of a list

  static getId(e){

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
    
      Modal.display_data(new_array[index])
      
    }
}

static closeModal(e){
  let modal_container = document.querySelector(".modal-container")
  if(e == modal_container || e == close_btn){
    div.remove()
    modal.style.display = 'none'
    document.querySelector("body").style.overflow = 'auto';
  }
}

static next(e){
  if(e.classList == "next-btn"){

    index++

    if(index== new_array.length){
      //return to first slide
        index=0;
     }
     div.remove()
     Modal.display_data(new_array[index])
  }
  if(e.classList == "prev-btn"){
    if(index == 0){
    index = new_array.length-1;
    }else{
    index--;
    }
    div.remove()
 Modal.display_data(new_array[index])
}

}


static display_data(data){
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
  }

}





//---------------------Mobile Drag and touch Event, this is inside of modal-content --------------------------------//

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0


class MobileDrag{

 static touchStart(){
   
    return function(event){
     
      startPos = MobileDrag.getPositionX(event)

      isDragging = true;
      modal.classList.add('grabbing')
    }
  }

  static touchEnd(){
    isDragging = false
    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -100 ) {
      index++

    if(index== new_array.length){
      //return to first slide
        index = 0;
     }
     div.remove()
     Modal.display_data(new_array[index])
    }
    if (movedBy > 100){
      if(index == 0){
        index = new_array.length-1;
        }else{
        index--;
        }
     div.remove()
     Modal.display_data(new_array[index])

    }

    modal.classList.remove('grabbing')
  }
  
  static touchMove(event){
    if(isDragging){
      const currentPosition = MobileDrag.getPositionX(event)
      currentTranslate = prevTranslate + currentPosition - startPos

    }
}
static getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

}
// Touch events
modal.addEventListener('dragstart', (e) => e.preventDefault())
modal.addEventListener('touchstart', MobileDrag.touchStart())
modal.addEventListener('touchend', MobileDrag.touchEnd)
modal.addEventListener('touchmove', MobileDrag.touchMove)




