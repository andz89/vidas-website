

import {data_birthday} from "./data_birthday.js";
import {data_wedding} from "./data_wedding.js";


let filtered_data_birthday;
let filtered_data_wedding;

function getData(className){
  let element = document.querySelector(className);
  if(element != null){
        filtered_data_birthday = data_birthday.filter(function(e){
          return e.display == true 
        })
        filtered_data_wedding = data_wedding.filter(function(e){
          return e.display == true 
        })
  }else{
        filtered_data_birthday =  data_birthday
        filtered_data_wedding = data_wedding
  }
}
getData(".section_feature")



function loopData(id, data){
  let birthday = document.querySelector(id)
  if(birthday != null) {
    for(let i = 0; i < data.length; i++){
        let li = document.createElement('li')
      
        li.innerHTML =  `
     
        <img src="${data[i].source}" class="identifier" alt="...">
        <div id="${data[i].id}">
        <p class="title">${data[i].name}</p>
        <h4>${data[i].price}</h4>
        </div>
          
        `
      birthday.appendChild(li)
    }
  
  }


}

loopData('#birthday', filtered_data_birthday)
loopData('#wedding', filtered_data_wedding)





