const typed = new Typed(".typed-text",{
    strings: ["Video Editor.","Videographer."],
    typeSpeed:60,
    backSpeed:60,
    backDelay:1000,
    loop: true
    
});

let popUp = document.querySelector(".socials");
let popUpIcon = document.querySelectorAll("#social-btn");
let closeIcon = document.getElementById("close-icon");

let openBtn= document.querySelector('.contact-btn');

openBtn.addEventListener('click', () => {
    openPopUp();
    console.log(openBtn);
});

closeIcon.addEventListener('click',()=>{
    
    closePopUp();
})  


function openPopUp() {
       
        popUp.classList.add("open-popup");

        popUpIcon.forEach(icon => {
            icon.classList.add("open-icon");  
        });
        closeIcon.classList.add("close-popup");

        openBtn.disabled=true;
     
}

function closePopUp() {

    console.log("Executing closePopUp"); 
    openBtn.disabled=false;

        popUp.classList .remove("open-popup");

       
        
        popUpIcon.forEach(icon => {
            icon.classList.remove("open-icon");

            console.log(icon.classList);         
            console.log("Icon closed:", icon); // Debugging
        });
        closeIcon.classList.remove("close-popup");



        console.log(closeIcon.classList);
      console.log(closePopUp);
}
