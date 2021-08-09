import {data_birthday} from "./data_birthday.js";
import {data_wedding} from "./data_wedding.js";

let filtered_data_birthday;
let filtered_data_wedding;

function getDataToIndexView(className){
  let element = document.querySelector(className);

  if(element != null){

        filtered_data_birthday = data_birthday.filter(function(e){

          return e.display == true 
        })

        filtered_data_wedding = data_wedding.filter(function(e){
          return e.display == true 
        })

  }

}
getDataToIndexView(".section_feature")

function getDataToListView(className){
  let element = document.querySelector(className);
  if(element != null){
    filtered_data_birthday =  data_birthday
    filtered_data_wedding = data_wedding
  }
}
getDataToListView(".list")

let birthday = document.querySelector("#birthday")
if(birthday != null) {

  let birthday_id= document.querySelector("#birthday").getAttribute("id")
  
if(birthday_id == "birthday"){

  for(let i = 0; i < filtered_data_birthday.length; i++){
      let li = document.createElement('li')
      li.className += "shadow-sm" 
      li.innerHTML =  `
      
      <img src="${filtered_data_birthday[i].source}" class="identifier" alt="...">
      <div id="${filtered_data_birthday[i].id}">
      <p class="title">${filtered_data_birthday[i].name}</p>
      <h4>${filtered_data_birthday[i].price}</h4>
      </div>
               
      `
    birthday.appendChild(li)
  }
}
}



let section_wedding = document.querySelector("#wedding")
if(section_wedding != null){

  let section_wedding_id = document.querySelector("#wedding").getAttribute("id")

  if(section_wedding_id == "wedding"){
  //wedding
  for(let i = 0; i < filtered_data_wedding.length; i++){
      let li = document.createElement('li')
      li.className += "shadow-sm" 
      li.innerHTML =  `
      
      
                      <img src="${filtered_data_wedding[i].source}" class="identifier" alt="...">
                      <div id="${filtered_data_wedding[i].id}">
                      <p class="title">${filtered_data_wedding[i].name}</p>
                      <h4>${filtered_data_birthday[i].price}</h4>
                      </div>
               
      `
    section_wedding.appendChild(li)
  }
  
  }
}




