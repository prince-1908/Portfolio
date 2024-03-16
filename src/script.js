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
const projectClass = document.querySelectorAll(".project-class");
const projectCarousel = document.getElementById("project-carousel");
const carouselImg = document.querySelectorAll(".carousel-img");
const carouselSlides = document.querySelectorAll(".carousel-slides");
const contactClick = document.querySelectorAll(".contactclick");
const detailFunc = (index) => {
    skillDetailImg.src = imgUrls[index];
    progressLevel[0].style.width = `${proficiency[index]}%`;
    progressLevel[0].innerHTML = `${proficiency[index]}%`;

    if ([0, 1, 8, 9, 10, 11, 12, 13].includes(index)) {
        progessBarsParent[1].classList.add('hidden');
    }
    progressLevel[1].style.width = `${problemSolvingSkills[index]}%`;
    progressLevel[1].innerHTML = `${problemSolvingSkills[index]}%`;

    progressLevel[2].style.width = `${experienceLevel[index]}%`
    progressLevel[2].innerHTML = (experienceLevel[index] == 100) ? "Expert" : (experienceLevel[index] == 75) ? "Advanced" : (experienceLevel[index] == 50) ? "Intermediate" : (experienceLevel[index] == 25) ? "Beginner" : " ";

    if ([4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(index)) {
        progessBarsTitle[3].innerHTML = "Familiarity";
    }
    progressLevel[3].style.width = `${experienceLevel[index]}%`;
    progressLevel[3].innerHTML = `${experienceLevel[index]}%`;

    if (index == 10) {
        skillDetailImg.classList.add("bg-white");
    }
    else {
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


Array.from(projectClass).forEach((element, projectIndex) => {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
        projectCarousel.classList.remove("hidden");
        projectCarousel.classList.add("block");
        Array.from(carouselImg).forEach((element, index) => {
            element.src = projectsImgs[projectIndex][index];
        });
        Array.from(carouselSlides).map((element, index) => {
            element.src = projectsImgs[projectIndex][index];
        });
    });
});

document.addEventListener('click', (e) => {
    if (projectCarousel.classList.contains("block")) {
        if (e.target !== projectCarousel && !projectCarousel.contains(e.target)) {
            projectCarousel.classList.add("hidden");
        }
    }
});

Array.from(contactClick).map((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(contactUrls[index], '_blank');
    }
    )
});
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

const projectsImgs = [
    [
        "./images/projects/soc portfolio/Screenshot (447).png",
        "./images/projects/soc portfolio/Screenshot (448).png",
        "./images/projects/soc portfolio/Screenshot (449).png",
        "./images/projects/soc portfolio/Screenshot (450).png",
        "./images/projects/soc portfolio/Screenshot (451).png",
        "./images/projects/soc portfolio/Screenshot (452).png",
        "./images/projects/soc portfolio/Screenshot (453).png"
    ],
    [
        "./images/projects/beta list clone/Screenshot (454).png",
        "./images/projects/beta list clone/Screenshot (455).png",
        "./images/projects/beta list clone/Screenshot (456).png",
        "./images/projects/beta list clone/Screenshot (457).png",
        "./images/projects/beta list clone/Screenshot (458).png",
        "./images/projects/beta list clone/Screenshot (459).png",
    ],
    [
        "./images/projects/skyWatch/Screenshot (462).png",
        "./images/projects/skyWatch/Screenshot (463).png",
        "./images/projects/skyWatch/Screenshot (464).png",
        "./images/projects/skyWatch/Screenshot (465).png",
        "./images/projects/skyWatch/Screenshot (466).png",
        "./images/projects/skyWatch/Screenshot (467).png",
    ],
    [
        "./images/projects/todo/267878400-878bff35-b14e-4dc0-82ee-421bc89ff901.png",
        "./images/projects/todo/267878472-6c8200c0-2bc1-41fc-8326-0152294a6fa5.png",
        "./images/projects/todo/267878499-6f38e80d-57c1-4f3c-bed2-06ec056604bb.png",
        "./images/projects/todo/267878534-28d95224-bacd-4ae6-b0e7-47797a00bad0.png",
        "./images/projects/todo/267878566-6cb7dda8-e14e-4049-800b-ca4d9099ea84.png",
        "./images/projects/todo/267878400-878bff35-b14e-4dc0-82ee-421bc89ff901.png"
    ]
];

const contactUrls = [
    "mailto:princesinghchouhan7470@gmail.com",
    "https://www.linkedin.com/in/prince-singh-chouhan/",
    "https://github.com/prince-1908",
    "https://twitter.com/Prince_1908"
];
const proficiency = [100, 100, 95, 85, 85, 75, 75, 75, 100, 100, 90, 75, 95, 90];
const problemSolvingSkills = [100, 100, 80, 80, 75, 70, 75, 70, 100, 100, 100, 100, 100, 100];
const experienceLevel = [100, 100, 75, 75, 50, 50, 50, 50, 100, 100, 75, 50, 75, 75];
const familiarity = [100, 100, 75, 75, 50, 50, 75, 75, 100, 100, 90, 80, 90, 90];