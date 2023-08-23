

let currentSection = document.querySelector("#sec1");
const aboutMeCard = document.querySelector("#about-me");
const techStackCard = document.querySelector("#tech-stack");
const projectsCard = document.querySelector("#projects");
const getInTouchCard = document.querySelector("#get-in-touch");


function home(e){
    currentSection.style.display = "none";
    currentSection = document.querySelector("#sec1");
    currentSection.style.display = "flex";
}

function showAboutMe(e){
    currentSection.style.display = "none";
    currentSection = document.querySelector("#about");
    currentSection.style.display = "flex";
}

function showTechStack(e){
    currentSection.style.display = "none";
    currentSection = document.querySelector("#tech-stack-sec");
    currentSection.style.display = "flex";
}

function showProjects(e){
    currentSection.style.display = "none";
    currentSection = document.querySelector("#projects-sec");
    currentSection.style.display = "flex";
}

function showGetInTouch(e){
    currentSection.style.display = "none";
    currentSection = document.querySelector("#contact-sec");
    currentSection.style.display = "flex";

}

aboutMeCard.addEventListener("click", showAboutMe);
techStackCard.addEventListener("click", showTechStack);
projectsCard.addEventListener("click", showProjects);
getInTouchCard.addEventListener("click", showGetInTouch);