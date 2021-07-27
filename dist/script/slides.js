import {data} from "./data.js"


for(let i = 0; i < data.length; i++){
    let div = document.createElement('div')
    div.className += "shadow-sm card" 
    div.innerHTML =  `
    
  
    <img id="${data[i].id}" src="${data[i].source}" class="hallo" alt="...">
    <div  class="card-body">
      <h5 class="card-title">${data[i].name}</h5>
      <p class="card-text">${data[i].description}</p>
      <p class="card-text">${data[i].size}</p>
    </div>
  

    `
    document.querySelector(".section-a").appendChild(div)
}
// let card = document.querySelectorAll(".card")

// Array.from(card).forEach(function(r){
//     console.log(r.innerHTML)
//    })

function getId(e){
    
    if( e.classList == "hallo"){
      console.log( e.getAttribute("id"))
      
    }
}
document.querySelector(".section-a").addEventListener("click",function(e){

    getId(e.target)
})
