 
class Elements{

  static appendElement(createElement, css, text){
    let element = document.createElement(createElement)
    element.className += css
    element.innerHTML = text
    return element
  }
  static addListener(elementListener, event, sample, elementTarget, css){
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
  
 static element(element){
    return  document.querySelector(element)
  }
  static elementAll(element){
    return  document.querySelectorAll(element)
  }

}

export{Elements}


  
    