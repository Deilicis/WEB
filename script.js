//Krāsas
let maincolor1 = localStorage.getItem('maincolor1') || '#04436E';
let maincolor2 = localStorage.getItem('maincolor2') || '#1F699B';

document.documentElement.style.setProperty('--maincolor', maincolor1);
document.documentElement.style.setProperty('--maincolor2', maincolor2);

let blue = document.getElementById("dot1");
let pink = document.getElementById("dot2");
let black = document.getElementById("dot3");
let yellow = document.getElementById("dot4");

blue.addEventListener("click", () => {
    document.documentElement.style.setProperty('--maincolor', '#04436E');
    document.documentElement.style.setProperty('--maincolor2', '#1F699B');
    localStorage.setItem('maincolor1', '#04436E');
    localStorage.setItem('maincolor2', '#1F699B');
});

pink.addEventListener("click", () => {
    document.documentElement.style.setProperty('--maincolor', '#902094');
    document.documentElement.style.setProperty('--maincolor2', '#c755cb');
    localStorage.setItem('maincolor1', '#902094');
    localStorage.setItem('maincolor2', '#c755cb');
});

black.addEventListener("click", () => {
    document.documentElement.style.setProperty('--maincolor', '#1B1B1B');
    document.documentElement.style.setProperty('--maincolor2', '#4f4f4f');
    localStorage.setItem('maincolor1', '#1B1B1B');
    localStorage.setItem('maincolor2', '#4f4f4f');
});

yellow.addEventListener("click", () => {
    document.documentElement.style.setProperty('--maincolor', '#CABE11');
    document.documentElement.style.setProperty('--maincolor2', '#fff562');
    localStorage.setItem('maincolor1', '#CABE11');
    localStorage.setItem('maincolor2', '#fff562');
});

//Poga uz augšu
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Slaidi
let slideIndex = -1;
let slideInterval;

showSlides();

function plusSlides(n) {
    clearTimeout(slideInterval);
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n === undefined) {slideIndex++} 
    if (slideIndex >= slides.length) {slideIndex = 0} 
    if (slideIndex < 0) {slideIndex = slides.length - 1}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";
    slideInterval = setTimeout(showSlides, 5000);
}