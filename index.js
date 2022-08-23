//Detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/sweet.wav");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/angry.wav");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/cartoon.wav");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/purr.wav");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/slow.wav");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/hungry.wav");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/tired.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
