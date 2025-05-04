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
      source: "music/winter-warmth/aurora-piano-music-292992.mp3",
      title: "Aurora Piano Music 292992",
    } /* https://pixabay.com/music/modern-classical-aurora-piano-music-292992/ */,
    {
      id: 106,
      source:
        "music/winter-warmth/i-am-falling-high-relaxing-piano-music-311529.mp3",
      title: "I am Falling High Relaxing Piano Music 311529",
    } /* https://pixabay.com/music/modern-classical-i-am-falling-high-relaxing-piano-music-311529/ */,
    {
      id: 107,
      source: "music/winter-warmth/relaxing-melody-124570.mp3",
      title: "Relaxing Melody 124570",
    } /* https://pixabay.com/music/modern-classical-relaxing-melody-124570/ */,
  ],
  2: [
    {
      id: 201,
      source: "music/outer-orbits/time-to-relax-11152.mp3",
      title: "Time To Relax 11152",
    } /* https://pixabay.com/music/beats-time-to-relax-11152/ */,

    {
      id: 202,
      source: "music/outer-orbits/like-a-dream-future-garage-music-333588.mp3",
      title: "Like A Dream Future Garage Music 333588",
    } /* https://pixabay.com/music/beats-like-a-dream-future-garage-music-333588/ */,

    {
      id: 203,
      source: "music/outer-orbits/background-music-soft-calm-333111.mp3",
      title: "Background Music Soft Calm 333111",
    } /* https://pixabay.com/music/upbeat-background-music-soft-calm-333111/ */,

    {
      id: 204,
      source: "music/outer-orbits/elegant-abstract-ambient-334378.mp3",
      title: "Elegant Abstract Ambient 334378",
    } /* https://pixabay.com/music/beats-elegant-abstract-ambient-334378/ */,

    {
      id: 205,
      source: "music/outer-orbits/abstract-trap-vibe_orbital-303651.mp3",
      title: "Abstract Trap Vibe Orbital 303651",
    } /* https://pixabay.com/music/future-bass-abstract-trap-vibe-orbital-303651/ */,

    {
      id: 206,
      source:
        "music/outer-orbits/in-slow-motion-inspiring-ambient-lounge-219592.mp3",
      title: "In Slow Motion Inspiring Ambient Lounge 219592",
    } /* https://pixabay.com/music/future-bass-in-slow-motion-inspiring-ambient-lounge-219592/ */,

    {
      id: 207,
      source: "music/outer-orbits/abstract-beauty-248162.mp3",
      title: "Abstract Beauty 248162",
    } /* https://pixabay.com/music/beats-abstract-beauty-248162/ */,
  ],

  3: [
    {
      id: 301,
      source: "music/summer-seaside/peaceful-background-333476.mp3",
      title: "Peaceful Background 333476",
    } /* https://pixabay.com/music/upbeat-peaceful-background-333476/ */,

    {
      id: 302,
      source: "summer-seaside/summer-tropical-happy-314068.mp3",
      title: "Summer Tropical Happy 314068",
    } /* https://pixabay.com/music/upbeat-summer-tropical-happy-314068/ */,

    {
      id: 303,
      source: "music/summer-seaside/no-copyright-music-upbeat-fun-329743.mp3",
      title: "No Copyright Music Upbeat Fun 329743",
    } /* https://pixabay.com/music/upbeat-no-copyright-music-upbeat-fun-329743/ */,
    {
      id: 304,
      source: "music/summer-seaside/summer-317374.mp3",
      title: "Summer 317374",
    } /* https://pixabay.com/music/upbeat-summer-317374/ */,
    {
      id: 305,
      source:
        "summer-seaside/relax-your-thoughts-background-music-for-video-deep-house-version-309418.mp3",
      title:
        "Relax Your Thoughts Background Music For Video Deep House Version 309418",
    } /* https://pixabay.com/music/upbeat-relax-your-thoughts-background-music-for-video-deep-house-version-309418/ */,
    {
      id: 306,
      source: "music/summer-seaside/background-music-upbeat-335026.mp3",
      title: "Background Music Upbeat 335026",
    } /* https://pixabay.com/music/upbeat-background-music-upbeat-335026/ */,

    {
      id: 307,
      source: "music/summer-seaside/upbeat-background-music-278928.mp3",
      title: "Upbeat Background Music 278928",
    } /* https://pixabay.com/music/pop-upbeat-background-music-278928/ */,
  ],
  4: [
    {
      id: 401,
      source: "music/soaring-sky/emotional-piano-music-256262.mp3",
      title: "Emotional Piano Music 256262",
      /* https://pixabay.com/music/modern-classical-emotional-piano-music-256262/ */
    },
    {
      id: 402,
      source: "music/soaring-sky/love-romantic-hopeful-music-333017.mp3",
      title: "Emotional Piano Music 256262",
      /* https://pixabay.com/music/wedding-love-romantic-hopeful-music-333017/ */
    },
    {
      id: 403,
      source:
        "music/soaring-sky/delicate-reverie-background-piano-music-269613.mp3",
      title: "Delicate Reverie Background Piano Music 269613",
      /* https://pixabay.com/music/modern-classical-delicate-reverie-background-piano-music-269613/ */
    },
    {
      id: 404,
      source: "music/soaring-sky/relaxing-piano-music-for-saturday-263226.mp3",
      title: "Relaxing Music For Saturday 263226",
      /* https://pixabay.com/music/modern-classical-relaxing-piano-music-for-saturday-263226/ */
    },
    {
      id: 405,
      source: "music/soaring-sky/relaxing-music-spring-188658.mp3",
      title: "Relaxing Music Spring 188658",
      /* https://pixabay.com/music/beautiful-plays-relaxing-music-spring-188658/ */
    },
    {
      id: 406,
      source: "music/soaring-sky/love-romantic-hopeful-music-333017.mp3",
      title: "Emotional Piano Music 256262",
      /* https://pixabay.com/music/wedding-love-romantic-hopeful-music-333017/ */
    },
    {
      id: 407,
      source: "music/soaring-sky/love-romantic-hopeful-music-333017.mp3",
      title: "Emotional Piano Music 256262",
      /* https://pixabay.com/music/wedding-love-romantic-hopeful-music-333017/ */
    },
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
  2: "https://cdn.pixabay.com/photo/2018/08/15/13/10/new-year-background-3608029_1280.jpg", // Background for playlist 2
  3: "https://cdn.pixabay.com/photo/2021/02/20/18/11/sea-6034191_1280.jpg", // Background for playlist 3
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

  // Always set isPlaying to true when skip button is pressed
  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack(); // Always play the track, regardless of previous state
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

  // Always set isPlaying to true when previous button is pressed
  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack(); // Always play the track, regardless of previous state
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
