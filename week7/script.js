const heading = document.querySelector("#heading");
console.log(heading);
let oldHeading = heading.textContent;

const bonk = document.querySelector("#bonk");
console.log(bonk);

const bonkButton = document.querySelector("#bonkButton");
console.log(bonkButton);

bonkButton.addEventListener("click", playAudio);

let newHeading = "audio is currently playing";

function playAudio() {
  newHeading = "audio is currently playing";
  bonk.play();
  heading.textContent = newHeading;
}

const pauseButton = document.querySelector("#pause");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  newHeading = "audio is paused";
  bonk.pause();
  heading.textContent = newHeading;
}

const explodeSound = document.querySelector("#explode");
console.log(explodeSound);

const explodeButton = document.querySelector("#explodeButton");
console.log(explodeButton);

explodeButton.addEventListener("click", explodePlay);

function explodePlay() {
  newHeading = "KABOOM";
  explodeSound.play();
  heading.textContent = newHeading;
  if (explodeSound.ended === true) {
    heading.textContent = oldHeading;
  }
}

//bonk.play();
