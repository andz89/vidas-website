import {data_birthday} from "./data_birthday.js";
import {data_wedding} from "./data_wedding.js";



let section_id= document.querySelector(".section_feature").getAttribute("id")
let section = document.querySelector(".section_feature")

if(section_id == "birthday"){

  for(let i = 0; i < data_birthday.length; i++){
      let li = document.createElement('li')
      li.className += "shadow-sm" 
      li.innerHTML =  `
      
      
                      <img src="${data_birthday[i].source}" class="identifier" alt="...">
                      <div id="${data_birthday[i].id}">
                      <p class="title">${data_birthday[i].name}</p>
                      <h4>${data_birthday[i].price}</h4>
                      </div>
               
              
  
      `
    section.appendChild(li)
  }
}

if(section_id == "wedding"){
//wedding
for(let i = 0; i < data_wedding.length; i++){
    let li = document.createElement('li')
    li.className += "shadow-sm" 
    li.innerHTML =  `
    
    
                    <img src="${data_wedding[i].source}" class="identifier" alt="...">
                    <div id="${data_wedding[i].id}">
                    <p class="title">${data_wedding[i].name}</p>
                    <h4>${data_birthday[i].price}</h4>
                    </div>
             
    `
  section.appendChild(li)
}

}



