const buttonContact = document.querySelector(".btn-2");

let clickedContact = false;
buttonContact.addEventListener('click', () => {contactList()});

function contactList(){

    if(clickedContact){
        const contactList = document.querySelector(".contactList");
        clickedContact = false
        buttonContact.setAttribute("class", "btn-2");
        contactList.setAttribute("class", "hiddencontactList");

    }
    else{
        const contactList = document.querySelector(".hiddencontactList");
        clickedContact = true;
        buttonContact.setAttribute("class", "btn-2-clicked");
        contactList.setAttribute("class", "contactList");
    }

      
      
  
}