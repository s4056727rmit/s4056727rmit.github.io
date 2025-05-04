const startButton = document.querySelector("#start-button");
console.log(startButton);

/*Content Fading in - Assisted by Claude AI and W3 School*/

let timer;
const hideTimer = 2000;
console.log(hideTimer);

const content = document.querySelector(".content");
console.log(content);

function showContent() {
  if (content) {
    content.style.opacity = 1;
    content.style.transition = `opacity 1000ms`;
  }

  showCursor();
}

function hideContent() {
  if (content) {
    content.style.opacity = 0;
  }

  hideCursor();
}

function showCursor() {
  document.body.classList.remove("hide-cursor");
}

function hideCursor() {
  document.body.classList.add("hide-cursor");
}

/*This function creates different opacity values for two status of the content. */

function mouseActivity() {
  if (timer) {
    clearTimeout(timer);
  }
  showContent();
  timer = setTimeout(hideContent, hideTimer);
}

["mousemove", "click"].forEach((event) => {
  document.addEventListener(event, mouseActivity);
});

mouseActivity();

/* I wanted to have the fading feature for the main player screen and used ClaudeAI and W3School to reassemble the generated code with my knowledge and IT WORKED!
I had a little trouble with it because I aimed to hide the content with both mouse click and move, but I failed to try to add second input to the code and ended up just adding a second feature instead.*/

const playlists = {
  1: [
    {
      id: 101,
      source: "music/winter-warmth/beautiful-piano-music-331537.mp3",
      title: "Beautiful Piano Music 331537",
    } /*https://pixabay.com/music/beautiful-plays-just-relax-11157/ */,
    {
      id: 102,
      source: "music/winter-warmth/just-relax-11157.mp3",
      title: "Just Relax 11157",
    } /*https://pixabay.com/music/modern-classical-beautiful-piano-music-331537/ */,
    {
      id: 103,
      source: "music/winter-warmth/prelude-piano-music-331538.mp3",
      title: "Prelude Piano Music 331538",
    } /* https://pixabay.com/music/modern-classical-prelude-piano-music-331538/ */,
    {
      id: 104,
      source: "music/winter-warmth/daylight-piano-music-292993.mp3",
      title: "Daylight Piano Music 292993",
    } /* https://pixabay.com/music/modern-classical-daylight-piano-music-292993/ */,
    {
      id: 105,
      source: "music/winter-warmth/just-relax-11157.mp3",
      title: "Just Relax 11157",
    } /*https://pixabay.com/music/modern-classical-beautiful-piano-music-331537/ */,
    {
      id: 106,
      source: "music/winter-warmth/just-relax-11157.mp3",
      title: "Just Relax 11157",
    } /*https://pixabay.com/music/modern-classical-beautiful-piano-music-331537/ */,
    {
      id: 107,
      source: "music/winter-warmth/just-relax-11157.mp3",
      title: "Just Relax 11157",
    } /*https://pixabay.com/music/modern-classical-beautiful-piano-music-331537/ */,
  ],
  2: [
    { id: 201, source: "path/to/track201.mp3", title: "Track 201" },
    { id: 202, source: "path/to/track202.mp3", title: "Track 202" },
    { id: 203, source: "path/to/track203.mp3", title: "Track 203" },
  ],
  3: [
    { id: 301, source: "path/to/track301.mp3", title: "Track 301" },
    { id: 302, source: "path/to/track302.mp3", title: "Track 302" },
    { id: 303, source: "path/to/track303.mp3", title: "Track 303" },
    { id: 304, source: "path/to/track304.mp3", title: "Track 304" },
    { id: 305, source: "path/to/track305.mp3", title: "Track 305" },
  ],
  4: [
    { id: 401, source: "path/to/track401.mp3", title: "Track 401" },
    { id: 402, source: "path/to/track402.mp3", title: "Track 402" },
  ],
};

// Button icon image sources
const buttonIcons = {
  play: "ui/Play Button.png",
  pause: "ui/Pause Button.png",
  next: "ui/Skip Button.png",
  previous: "ui/Previous Button.png",
  loopOn: "ui/Loop Button.png",
  loopOff: "ui/Loop disabled Button.png",
};

// Background image sources for each playlist
const playlistBackground = {
  1: "https://cdn.pixabay.com/photo/2023/12/05/15/07/window-8431870_1280.jpg",
  2: "images/background-playlist2.jpg", // Background for playlist 2
  3: "images/background-playlist3.jpg", // Background for playlist 3
  4: "images/background-playlist4.jpg", // Background for playlist 4
};

// Player state
let currentPlaylist = 0;
let currentTrackNumber = -1;
let isPlaying = false;
let isLooping = false;
let audioElement = new Audio();

let hideStatus = "visible";

// Set up audio element to play next track when current track ends
audioElement.addEventListener("ended", function () {
  playNextTrack();
});

// Get HTML elements
const nowPlaying = document.getElementById("nowPlaying");
const trackListNumber = document.getElementById("trackList");
const playPauseButton = document.getElementById("play-pause-button");
const loopButton = document.getElementById("loop-button");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("skip-button");
const hideButton = document.getElementById("hide-button");
const volumeSlider = document.getElementById("volume-slider");
const supportText = document.getElementById("supportText");
const playerBackground = document.getElementById("player-background");

// Get image elements
const playPauseImg = document.getElementById("play-pause-button");
const loopImg = document.getElementById("loop-button");
const prevImg = document.getElementById("previous-button");
const nextImg = document.getElementById("skip-button");

// Set up volume control
volumeSlider.addEventListener("input", function (event) {
  audioElement.volume = event.target.value / 100;
  console.log("Volume: " + event.target.value + "%");
});

// Set up playlist buttons
const playlistButtons = document.querySelectorAll(".playlist");
console.log(playlistButtons);
for (let i = 0; i < playlistButtons.length; i++) {
  const playlistButton = playlistButtons[i];
  playlistButton.addEventListener("click", function () {
    const playlistNumber = +this.dataset.playlist;
    selectPlaylist(playlistNumber);
    document
      .getElementById("player-anchor")
      .scrollIntoView({ behavior: "smooth" });
  });
}

// Set up control buttons
previousButton.addEventListener("click", function () {
  playPreviousTrack();
});

playPauseButton.addEventListener("click", function () {
  togglePlayPause();
});

nextButton.addEventListener("click", function () {
  playNextTrack();
});

loopButton.addEventListener("click", function () {
  toggleLoop();
});

hideButton.addEventListener("click", function () {
  toggleHide();
});

// Select and start playing a playlist
function selectPlaylist(playlistNumber) {
  // Check if we're already playing this playlist
  if (playlistNumber === currentPlaylist && isPlaying) {
    return;
  }

  // Update UI to show selected playlist
  for (let i = 0; i < playlistButtons.length; i++) {
    const button = playlistButtons[i];
    const buttonPlaylistNumber = +button.dataset.playlist;

    if (buttonPlaylistNumber === playlistNumber) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }

  // Set the playlist and start with first track
  currentPlaylist = playlistNumber;
  currentTrackNumber = 0;
  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack();
}

// Play the currently selected track
function playCurrentTrack() {
  if (currentPlaylist === 0 || currentTrackNumber === -1) {
    return; // No playlist or track selected
  }

  // Get the track object
  const track = playlists[currentPlaylist][currentTrackNumber];

  // Set the audio source and play
  audioElement.src = track.source;
  audioElement.play();
}

// Update all visual elements
function updatePlayerDisplay() {
  // Update background
  if (currentPlaylist === 0) {
    playerBackground.style.backgroundImage = "none";
    nowPlaying.textContent = "Nothing is playing right now";
    supportText.style.visibility = "visible";
  } else {
    if (hideStatus == "visible") {
      playerBackground.style.backgroundImage = `url('${playlistBackground[currentPlaylist]}')`;
    }
    supportText.style.visibility = "hidden";

    // Show current track info
    if (currentTrackNumber !== -1) {
      const track = playlists[currentPlaylist][currentTrackNumber];
      nowPlaying.innerHTML = ` Now playing: ${track.title} `;
    }
  }

  updateButtonImages();

  // Update the track listing
  updateTrackList();
}

// Update the list of tracks shown
function updateTrackList() {
  // Clear track list
  trackListNumber.innerHTML = "";

  if (currentPlaylist === 0) {
    return;
  }

  // Add each track to the list
  const tracks = playlists[currentPlaylist];
  for (let i = 0; i < tracks.length; i++) {
    const trackElement = document.createElement("li");
    trackElement.className = "track";

    if (i === currentTrackNumber) {
      trackElement.classList.add("playing");
    } else {
      // Ensure no playing class if not the current track
      trackElement.classList.remove("playing");
    }

    trackElement.textContent = tracks[i].title;

    // Add click handler
    trackElement.addEventListener("click", function () {
      playTrack(i);
    });

    trackListNumber.appendChild(trackElement);
  }
}

// Play a specific track
function playTrack(index) {
  if (currentPlaylist === 0) {
    return;
  }

  // Pause current audio if playing
  if (isPlaying) {
    audioElement.pause();
  }

  currentTrackNumber = index;
  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack();
}

// Play the next track
function playNextTrack() {
  if (currentPlaylist === 0) {
    return;
  }

  // Check if we're at the end of the playlist
  const playlistLength = playlists[currentPlaylist].length;

  if (currentTrackNumber >= playlistLength - 1) {
    // At the last track
    if (isLooping) {
      // Loop back to first track
      currentTrackNumber = 0;
    } else {
      // Stop playing at the end if not looping
      isPlaying = false;
      currentPlaylist = 0;
      audioElement.pause();
      updatePlayerDisplay();
      return;
    }
  } else {
    // Move to next track
    currentTrackNumber++;
  }

  updatePlayerDisplay();
  if (isPlaying) {
    playCurrentTrack();
  }
}

// Play the previous track
function playPreviousTrack() {
  if (currentPlaylist === 0) {
    return;
  }

  // Check if we're at the beginning of the playlist
  if (currentTrackNumber <= 0) {
    if (isLooping) {
      // Jump to last track if looping
      currentTrackNumber = playlists[currentPlaylist].length - 1;
    } else {
      // Stay on first track
      currentTrackNumber = 0;
    }
  } else {
    // Move to previous track
    currentTrackNumber--;
  }

  updatePlayerDisplay();
  if (isPlaying) {
    playCurrentTrack();
  }
}

// Toggle play/pause
function togglePlayPause() {
  if (currentPlaylist === 0) {
    return;
  }

  if (isPlaying) {
    // Pause the audio
    isPlaying = false;
    audioElement.pause();
  } else {
    // Resume playing from where it was paused
    isPlaying = true;
    audioElement.play();
  }

  updatePlayerDisplay();
}

// Toggle loop mode
function toggleLoop() {
  if (isLooping) {
    isLooping = false;
    loopButton.classList.remove("active");
  } else {
    isLooping = true;
    loopButton.classList.add("active");
  }

  updatePlayerDisplay();
}

function updateButtonImages() {
  // Update play/pause button image
  if (isPlaying) {
    playPauseImg.src = "ui/Pause Button.png";
  } else {
    playPauseImg.src = "ui/Play Button.png";
  }

  // Update loop button image
  if (isLooping) {
    loopButton.src = "ui/Loop Button.png";
  } else {
    loopButton.src = "ui/Loop disabled Button.png";
  }
}

function toggleHide() {
  if (currentPlaylist === 0) return;
  currentstate = playerBackground.style.backgroundImage;
  if (currentstate == "none") {
    playerBackground.style.backgroundImage = `url('${playlistBackground[currentPlaylist]}')`;
    hideButton.src = "ui/Visible Button.png";
    hideStatus = "visible";
  } else {
    playerBackground.style.backgroundImage = `none`;
    hideButton.src = "ui/Invisible Button.png";
    hideStatus = "hidden";
  }
}
