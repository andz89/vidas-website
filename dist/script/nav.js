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
    setTimeout(function(){

    document.querySelector("body").classList.remove("spinner-1");
    document.querySelector("main").style.display = "block";
  document.querySelector(".container").style.display = "block";
},1000)
  });




import {data_birthday} from "./data_birthday.js"
import {data_wedding} from "./data_wedding.js"



let modal = document.querySelector(".modal")
function getId(e){
    
    if( e.classList == "identifier"){
        
         let id = e.nextElementSibling.getAttribute('id')

         let birthday_id;
        if(id.startsWith("b")){
          birthday_id = data_birthday;
        }
        if(id.startsWith("w")){
          birthday_id = data_wedding;
        }

        let data_filtered = birthday_id.filter(function(r){
        return r.id == id
        }).map(function(r){
        return r
        })

        data_filtered.forEach(function(data){
        let div = document.createElement('div')
        div.className += "modal-content" 
        div.innerHTML = `
          <div class="image-div">
          <a href="${data.link}">
       
        <img src="${data.source}" class="identifier"  alt="...">
        </a>
        <div class="view-image"><strong>•</strong> <p>Click the image to view high resolution photos</p></div>
        </div>

        <div id="${data.id}" class=details>
     
        <span class="close">← Back</span>
          <h5>${data.name}</h5>
          <h2>${data.price}</h2>
          <p class="size">Size:${data.size}</p>
          <p class="header_description"> Description</p>
          <p class="description">${data.description}</p>

          <div class="modal-contact">
          <h4> Contact us for your oders and querries:</h4>
          <div class="modal-flex">
                    <div class="modal-call">
                        
                        <div class="img_and_numbers">  <img src="img/call.svg"   alt=""> <p>827-3520 / 0955-846-4400</p></div>
                    </div>
  
                    <div class="modal-text">
                        <div class="img_and_link"> <img  src="img/facebook5.svg"  alt=""> <small>Click the link below to message us on facebook </small><a href="https://www.facebook.com/gwillevent">https://www.facebook.com/gwillevent</a> </div>
                    </div>
            </div>
        </div>
        </div>
  
       
        
        `
        document.querySelector("body").style.overflow = 'hidden';
        modal.style.display = 'block';
        modal.removeChild(modal.childNodes[0])
        modal.appendChild(div)
     
        
        let closeBtn = document.querySelector(".close")
        closeBtn.addEventListener('click', closeModal)
        window.addEventListener('click', outsideClick);

        // Close
        function closeModal() {
        modal.style.display = 'none';
        document.querySelector("body").style.overflow = 'auto';
        }

      // Close If Outside Click
      function outsideClick(e) {
      if (e.target == modal) {
      modal.style.display = 'none';
      document.querySelector("body").style.overflow = 'auto';
   
      }
      }
      })

      
    }
}

document.querySelector("main").addEventListener("click",function(e){

    getId(e.target)
})




