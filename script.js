

AOS.init({
duration:1200,
once:true
});

/* DARK MODE */

const modeToggle = document.getElementById('modeToggle');

modeToggle.onclick = () => {

document.body.classList.toggle('dark-mode');

if(document.body.classList.contains('dark-mode')){
modeToggle.classList.replace('fa-sun','fa-moon');
}else{
modeToggle.classList.replace('fa-moon','fa-sun');
}

}

/* MUSIC */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const logoClick = document.getElementById("logoClick");

music.volume = 0.4;

let isPlaying = false;

function toggleMusic(){

if(isPlaying){

music.pause();

musicBtn.innerHTML =
'<i class="fa-solid fa-music"></i>';

}else{

music.play();

musicBtn.innerHTML =
'<i class="fa-solid fa-pause"></i>';

}

isPlaying = !isPlaying;

}

musicBtn.addEventListener("click", toggleMusic);
logoClick.addEventListener("click", toggleMusic);

const typingText = document.querySelector(".typing-text");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      typingText.style.animation = "typing 3s steps(30, end) forwards, blink 0.7s infinite";
    }
  });
});

observer.observe(typingText);

/* SKILL ANIMATION */

const skillSection = document.querySelector('#skill');
const progressBars = document.querySelectorAll('.skill-progress');
const numbers = document.querySelectorAll('.skill-number');

let started = false;

window.addEventListener('scroll', () => {

const sectionTop = skillSection.offsetTop - 300;

if(window.scrollY >= sectionTop && !started){

progressBars.forEach((bar) => {
bar.style.width = bar.dataset.width;
});

numbers.forEach((num) => {

let start = 0;
let end = parseInt(num.dataset.target);

let counter = setInterval(() => {

start++;

num.innerHTML = start + "%";

if(start >= end){
clearInterval(counter);
}

},20);

});

started = true;

}

});



