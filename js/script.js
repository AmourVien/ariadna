const startBtn = document.getElementById("showCarousel");
const carouselContainer = document.getElementById("carousel");
const startScreen = document.getElementById("start-screen");

startBtn.onclick = function(){
startScreen.style.display="none";
carouselContainer.style.display="flex";
};

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(){

carousel.style.transform = `translateX(-${index * 100}%)`;

}

next.onclick = function(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide();

};

prev.onclick = function(){

index--;

if(index < 0){
index = slides.length - 1;
}

showSlide();

};

/* autoplay */

setInterval(()=>{

index++;

if(index >= slides.length){
index = 0;
}

showSlide();

},4000);