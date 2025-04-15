const myVideo = document.querySelector("#myVideo");
console.log(myVideo);

const happyButton = document.querySelector("#happyButton");
console.log(happyButton);

function playVideo() {
  myVideo.play();
}

const noHappyButton = document.querySelector("#noHappyButton");
console.log(happyButton);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseButtonImg = document.querySelector("#play-pause-img");
console.log(playPauseButtonImg);

playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseButton.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    myVideo.pause();
    playPauseButtonImg.src =
      "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}
