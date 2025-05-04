const myVideo = document.querySelector("#my-video");
console.log(myVideo);

myVideo.addEventListener("timeupdate", updateProgressbar);

function updateProgressbar() {
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(progress);
  progressBar.style.width = progress + "%";
}

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", togglePlay);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.pause();
  }
}

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    myVideo.muted = false;
  } else {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = true;
  }
}

const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 43.54;
}

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

const heartButton = document.querySelector("#heart-button");
console.log(heartButton);
heartButton.addEventListener("click", updateLikes);

let likes = 0;
const likesContainer = document.querySelector("#likes");

function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}

const playlist = [
  {
    id: 1,
    src: "stardust.mp4",
    name: "Stardust",
  },
  {
    id: 2,
    src: "zenscape.mp4",
    name: "Zenscape",
  },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Music video",
  },
];

const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseStardust() {
  chooseSrc("stardust.mp4");
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

zenscapeButton.addEventListener("click", function chooseZenscape() {
  chooseSrc("zenscape.mp4");
});

const musicvidButton = document.querySelector("#musicvideo-vid-button");
console.log(musicvidButton);

musicvidButton.addEventListener("click", function chooseMusicVideo() {
  chooseSrc(
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4"
  );
});

function chooseVideo(no) {
  myVideo.src = playlist(no).src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}

function chooseSrc(src) {
  myVideo.src = src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}
