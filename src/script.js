const imgUrls = [
    "../images/logos/HTML5_logo_and_wordmark.svg",
    "../images/logos/CSS3_logo_and_wordmark.svg",
    "../images/logos/JavaScript-Tutorial.svg",
    "../images/logos/Typescript.svg",
    "../images/logos/C_Programming_Language.svg",
    "../images/logos/ISO_C++_Logo.svg",
    "../images/logos/React_Logo_SVG.svg",
    "../images/logos/Nextjs-logo.svg",
    "../images/logos/Bootstrap_logo.svg",
    "../images/logos/Tailwind_CSS_logo.svg",
    "../images/logos/WordPress_logo.svg",
    "../images/logos/Git-logo.svg",
    "../images/logos/GitHub_Invertocat_Logo.svg",
    "../images/logos/Npm-logo.svg"
];

const proficiency = [100,100,95,85,85,75,75,75,100,100,90,75,95,90];
const problemSolvingSkills = [100, 100, 80, 80, 75, 70, 75, 70, 100, 100, 100, 100, 100, 100];
const experienceLevel = [100, 100, 75, 75, 50, 50, 50, 50, 100, 100, 75, 50, 75, 75];
const familiarity = [100, 100, 75, 75, 50, 50, 75, 75, 100, 100, 90, 80, 90, 90];

const skillList = document.querySelector(".skill-list");
const skillItems = document.getElementsByClassName("skill-item");
const skillDetail = document.querySelector(".skill-detail");
const closeDetail = document.querySelector("#close-detail");
const btn = document.getElementById("btn");
const skillDetailImg = document.getElementById("skill-detail-img");
const progessBarsTitle = document.querySelectorAll(".progressBarsTitle");
const progressLevel = document.querySelectorAll(".progressLevel");
const skills = document.getElementById("skills");
const skillsParent = document.getElementById("skillsParent");
const progessBarsParent = document.querySelectorAll(".progressBarsParent");


const detailFunc = (index) => {
    skillDetailImg.src = imgUrls[index];
    progressLevel[0].style.width = `${proficiency[index]}%`;
    progressLevel[0].innerHTML = `${proficiency[index]}%`;
    
    if([0,1,8,9,10,11,12,13].includes(index)){
        progessBarsParent[1].classList.add('hidden');
    }
    progressLevel[1].style.width = `${problemSolvingSkills[index]}%`;
    progressLevel[1].innerHTML = `${problemSolvingSkills[index]}%`;

    progressLevel[2].style.width = `${experienceLevel[index]}%`
    progressLevel[2].innerHTML = (experienceLevel[index] == 100) ? "Expert" : (experienceLevel[index] == 75) ? "Advanced" : (experienceLevel[index] == 50) ? "Intermediate" : (experienceLevel[index] == 25 ) ? "Beginner" : " ";

    if([4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(index)){
        progessBarsTitle[3].innerHTML = "Familiarity";
    }
    progressLevel[3].style.width = `${experienceLevel[index]}%`;
    progressLevel[3].innerHTML= `${experienceLevel[index]}%`;
    
    if(index == 10){
        skillDetailImg.classList.add("bg-white");
    }
    else{
        skillDetailImg.classList.remove("bg-white");
    }
}

Array.from(skillItems).forEach((element, index) => {
    element.addEventListener("click", function () {
        skillDetail.classList.remove("hidden");
        detailFunc(index);
    });
});


closeDetail.addEventListener("click", function (e) {
    skillDetail.classList.add("hidden");
});