 
 export function appendElement(createElement, css, text){
    let element = document.createElement(createElement)
    element.className += css
    element.innerHTML = text
    return element
  }
  
  export function addListener(elementListener, event, sample, elementTarget, css){
    if(sample == null){
      elementListener.addEventListener(event, function(e){
        elementTarget.style.cssText = css
      })
    }
    else{
      elementListener.addEventListener(event, function(e){
        if(e.target == sample){
          elementTarget.style.cssText = css
          }
      })
    }
  }
  
  export function element(element){
    return  document.querySelector(element)
  }
  export function elementAll(element){
    return  document.querySelectorAll(element)
  }