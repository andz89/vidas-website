import {data} from "./data.js"


for(let i = 0; i < data.length; i++){
    let div = document.createElement('div')
    div.className += "shadow-sm card" 
    div.innerHTML =  `
    
  
    <img src="${data[i].source}"  alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[i].name}</h5>
      <p class="card-text">${data[i].description}</p>
      <p class="card-text">${data[i].size}</p>

  

    `
    document.querySelector(".section-a").appendChild(div)
}

