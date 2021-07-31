import {data_birthday} from "./data_birthday.js"
import {data_wedding} from "./data_wedding.js"



let birthday_ul = document.querySelector("#birthday_ul")
let list_birthday =data_birthday
let data_feature_birthday = list_birthday.slice(0,4)

for(let i = 0; i < data_feature_birthday.length; i++){
    let li = document.createElement('li')
    li.className += "shadow-sm" 
    li.innerHTML =  `
                    <img src="${data_birthday[i].source}" class="identifier" alt="...">
                    <div id="${data_birthday[i].id}">
                    <p class="title">${data_birthday[i].name}</p>
                    </div>
    ` 
  birthday_ul.appendChild(li)
}

let wedding_ul = document.querySelector("#wedding_ul")
let list_wedding = data_wedding;
let data_feature_wedding = list_wedding.slice(0,4)

for(let i = 0; i < data_feature_wedding.length; i++){
    let li = document.createElement('li')
    li.className += "shadow-sm" 
    li.innerHTML =  `
    
    
                    <img src="${data_wedding[i].source}" class="identifier" alt="...">
                    <div id="${data_wedding[i].id}">
                    <p class="title">${data_wedding[i].name}</p>
                    </div>
             
            

    `
  wedding_ul.appendChild(li)
}


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
        <img src="${data.source}" class="identifier"  alt="...">
        </div>
        <div id="${data.id}" class=details>
        <span class="close">&times;</span>
         
          <h5>${data.name}</h5>
          <p class="size">Availabale sizes: ${data.size}</p>
          <p class="description">${data.description}</p>
          
        </div>
       
        
        `
      
        modal.style.display = 'block';
        modal.removeChild(modal.childNodes[0])
        modal.appendChild(div)
     
        
        let closeBtn = document.querySelector(".close")
        closeBtn.addEventListener('click', closeModal)
        window.addEventListener('click', outsideClick);

        // Close
        function closeModal() {
        modal.style.display = 'none';
  
        }

      // Close If Outside Click
      function outsideClick(e) {
      if (e.target == modal) {
      modal.style.display = 'none';

      }
      }
      })

      
    }
}

document.querySelector("main").addEventListener("click",function(e){

    getId(e.target)
})

