for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var audio=new Audio('sounds/tom-1.mp3');
    // audio.play();
    this.style.color="#fff";
  });
}
