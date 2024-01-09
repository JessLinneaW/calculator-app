function handler(event) {
    const value = event.target.innerText
    const display = document.getElementById("display")
    const result = parseFloat(display.innerText) / 100
    
    
    switch(value) {
      case "AC":
        display.innerText = ""
        break
  
      case "Delete":
        display.innerText = display.innerText.slice(0, -1)
        break
        
      case "=":
        display.innerText = eval(display.innerText)
        break

      case "%":
        display.innerText = result
        break
      
      default:
        display.innerText += value
    }
  }
  
  Array
    .from(
      document.getElementsByTagName("td")
    )
    .forEach(
      (td) => {
        td.addEventListener("click", handler)
      }
    )