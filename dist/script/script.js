import {data_birthday} from "./data_birthday.js"
import {data_wedding} from "./data_wedding.js"



let birthday_ul = document.querySelector("#birthday_ul")
let list_birthday =data_birthday
let data_feature_birthday = list_birthday.slice(0,4)

for(let i = 0; i < data_feature_birthday.length; i++){
    let li = document.createElement('li')
    li.className += "item" 
    li.innerHTML =  `
                    <img src="${data_birthday[i].source}" class="identifier" alt="...">
                    <div id="${data_birthday[i].id}">
                    <p class="title">${data_birthday[i].name}</p>
                    <h4>${data_birthday[i].price}</h4>
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
                    <h4>${data_wedding[i].price}</h4>
                    </div>
             
            

    `
  wedding_ul.appendChild(li)
}


