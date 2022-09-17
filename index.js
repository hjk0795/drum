var audio = "";
var buttonPressed = "";

function makeSounds(key) {
  switch (key) {
    case 'w':
    audio = new Audio("./sounds/crash.mp3");
    audio.play();
    break;
    case 'a':
    audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    break;
    case 's':
    audio = new Audio("./sounds/snare.mp3");
    audio.play();
    break;
    case 'd':
    audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    break;
    case 'j':
    audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
    break;
    case 'k':
    audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    break;
    case 'l':
    audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    break;
    default:
    console.log("wrong input");
}}

function buttonAnimation (key) {
  document.querySelector('.'+key).classList.add('pressed');

  setTimeout(() => {
    document.querySelector('.'+key).classList.remove('pressed');
  }, 100);
}

// make sounds by clicking
for (let i=0;i<document.querySelectorAll(".drum").length;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonPressed = this.innerHTML;
    makeSounds(buttonPressed);
    buttonAnimation(buttonPressed);
    }
  )}


// make sounds by typing
document.addEventListener('keydown', function(event) {
  makeSounds(event.key);
  buttonAnimation(event.key);
})
