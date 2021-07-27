import {data} from "./data.js"

console.log(data)

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
