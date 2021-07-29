import {data_birthday} from "./data_birthday.js"
import {data_wedding} from "./data_wedding.js"

let contact = document.querySelector(".contact")
let main = document.querySelector("main")
let nav_home = document.querySelector(".nav_home")
let nav_contact = document.querySelector(".nav_contact")


nav_contact.addEventListener('click', function(){
    contact.style.display = "grid";
    nav_contact.style.color = "#d15f20"
    nav_home.style.color = "#fff"

    main.style.display = "none"

})
nav_home.addEventListener('click', function(){
    contact.style.display = "none";
    nav_contact.style.color = "#fff"
    nav_home.style.color = "#d15f20"

    main.style.display = "grid"

})


let section_birthday = document.querySelector(".section_birthday_feature")
let list_birthday = data_birthday
let data_feature_birthday = list_birthday.slice(0,4)

for(let i = 0; i < data_feature_birthday.length; i++){
    let li = document.createElement('li')
    li.className += "shadow-sm" 
    li.innerHTML =  `
    
    
                    <img src="${data_birthday[i].source}" class="identifier" alt="...">
                    <div id="${data_birthday[i].id}">
                    <p class="title">${data_birthday[i].name}</p>
                    <p class="lead">${data_birthday[i].description}</p>
                    <p class="card-text">${data_birthday[i].size}</p>
                    </div>
             
            

    `
  section_birthday.appendChild(li)
}

let section_wedding = document.querySelector(".section_wedding_feature")
let list_wedding = data_wedding;
let data_feature_wedding = list_wedding.slice(0,4)

for(let i = 0; i < data_feature_wedding.length; i++){
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