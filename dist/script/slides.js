import {data} from "./data.js"

let section = document.querySelector(".section-a")
for(let i = 0; i < data.length; i++){
    let div = document.createElement('div')
    div.className += "shadow-sm card" 
    div.innerHTML =  `
    
 
    <img src="${data[i].source}" class="identifier" alt="...">
    <div id="${data[i].id}"  class="card-body">
  
      <h5 class="card-title">${data[i].name}</h5>
      <p class="card-text">${data[i].description}</p>
      <p class="card-text">${data[i].size}</p>
    </div>
  

    `
  section.appendChild(div)
}


let modal = document.querySelector(".modal")
function getId(e){
    
    if( e.classList == "identifier"){
        
         let id = e.nextElementSibling.getAttribute('id')
         modal.style.display = 'block';
        let data_filtered = data.filter(function(r){
        return r.id == id
        }).map(function(r){
        return r
        })

        data_filtered.forEach(function(data){
        let div = document.createElement('div')
        div.className += "modal-content" 
        div.innerHTML = `
          <div>
        <img src="${data.source}" class="identifier"  alt="...">
        </div>
        <div id="${data.id}" class=details>
      
          <h5>${data.name}</h5>
          <p>${data.description}</p>
          <p>${data.size}</p>
        </div>
        <span class="close">&times;</span>
        
        `
      
        
       
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







document.querySelector(".section-a").addEventListener("click",function(e){

    getId(e.target)
})
