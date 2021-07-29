import {data_wedding} from "./data_wedding.js"

//wedding
let section_wedding = document.querySelector(".section_wedding")
for(let i = 0; i < data_wedding.length; i++){
    let li = document.createElement('li')
    li.className += "shadow-sm" 
    li.innerHTML =  `
    
    
                    <img src="${data_wedding[i].source}" class="identifier" alt="...">
                    <div id="${data_wedding[i].id}">
                    <p class="title">${data_wedding[i].name}</p>
                    <p class="lead">${data_wedding[i].description}</p>
                    <p class="card-text">${data_wedding[i].size}</p>
                    </div>
             
            

    `
  section_wedding.appendChild(li)
}

let modal = document.querySelector(".modal")
let section_ul = document.querySelector("ul")
function getId(e){
    
    if( e.classList == "identifier"){
        
         let id = e.nextElementSibling.getAttribute('id')
         modal.style.display = 'block';
        let data_filtered = data_wedding.filter(function(r){
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
      
        
        section_ul.style.display = "none"
        modal.removeChild(modal.childNodes[0])
        modal.appendChild(div)
      
        
        let closeBtn = document.querySelector(".close")
        closeBtn.addEventListener('click', closeModal)
        window.addEventListener('click', outsideClick);

        // Close
        function closeModal() {
        modal.style.display = 'none';
        section_ul.style.display = "grid"
        }

      // Close If Outside Click
      function outsideClick(e) {
      if (e.target == modal) {
      modal.style.display = 'none';
      section_ul.style.display = "grid"
      }
      }
      })

      
    }
}







document.querySelector(".section_wedding").addEventListener("click",function(e){

    getId(e.target)
})
