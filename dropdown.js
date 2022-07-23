const button = document.querySelector(".btn");

let clicked = false;
button.addEventListener('click', () => {dropDownMenu()});

function dropDownMenu(){
    const dropDown = document.querySelector(".dropDownMenu");
    if(clicked){
        clicked = false
        button.setAttribute("class", "btn");
        dropDown.setAttribute("style", "display: none;")

    }
    else{
        clicked = true;
        button.setAttribute("class", "clicked-btn")
        dropDown.setAttribute("style", "display: block;")
    }

      
      
  
}