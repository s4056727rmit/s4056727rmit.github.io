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

document.addEventListener("DOMContentLoaded", function () {
  // Music data - in a real application, this would likely come from a database
  const playlists = [
    {
      id: 1,
      name: "Winter Night",
      songs: [
        { id: 101, title: "Pop Song One", value: 10 },
        { id: 102, title: "Pop Song Two", value: 15 },
        { id: 103, title: "Pop Song Three", value: 20 },
      ],
    },
    {
      id: 2,
      name: "Outer Space",
      songs: [
        { id: 201, title: "Rock Song One", value: 25 },
        { id: 202, title: "Rock Song Two", value: 30 },
        { id: 203, title: "Rock Song Three", value: 35 },
        { id: 204, title: "Rock Song Four", value: 40 },
      ],
    },
    {
      id: 3,
      name: "Crystal Blue",
      songs: [
        { id: 301, title: "Jazz Song One", value: 45 },
        { id: 302, title: "Jazz Song Two", value: 50 },
      ],
    },
    {
      id: 4,
      name: "Soaring Sky",
      songs: [
        { id: 401, title: "Study Song One", value: 55 },
        { id: 402, title: "Study Song Two", value: 60 },
        { id: 403, title: "Study Song Three", value: 65 },
        { id: 404, title: "Study Song Four", value: 70 },
        { id: 405, title: "Study Song Five", value: 75 },
      ],
    },
    {
      id: 5,
      name: "Fresh Walk",
      songs: [
        { id: 401, title: "Study Song One", value: 55 },
        { id: 402, title: "Study Song Two", value: 60 },
        { id: 403, title: "Study Song Three", value: 65 },
        { id: 404, title: "Study Song Four", value: 70 },
        { id: 405, title: "Study Song Five", value: 75 },
      ],
    },
    {
      id: 6,
      name: "Sinking down",
      songs: [
        { id: 401, title: "Study Song One", value: 55 },
        { id: 402, title: "Study Song Two", value: 60 },
        { id: 403, title: "Study Song Three", value: 65 },
        { id: 404, title: "Study Song Four", value: 70 },
        { id: 405, title: "Study Song Five", value: 75 },
      ],
    },
  ];

  // Player state
  let currentPlaylist = null;
  let currentSongIndex = 0;
  let isPlaying = false;
  let volume = 100;
  let isLooping = false;

  // DOM Elements
  const playlistEls = document.querySelectorAll(".playlist");
  const songTitleEl = document.querySelector(".song-title");
  const playlistNameEl = document.querySelector(".playlist-name");
  const playBtn = document.querySelector(".play-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const loopBtn = document.querySelector(".loop-btn");
  const volumeSlider = document.querySelector(".volume-slider");

  // Initially disable control buttons when no playlist is selected
  prevBtn.disabled = true;
  playBtn.disabled = true;
  nextBtn.disabled = true;
  loopBtn.disabled = true;

  // Add event listeners to playlists
  playlistEls.forEach((playlistEl) => {
    playlistEl.addEventListener("click", function () {
      const playlistId = parseInt(this.getAttribute("data-id"));
      selectPlaylist(playlistId);
    });
  });

  // Add event listeners to player controls
  playBtn.addEventListener("click", togglePlay);
  prevBtn.addEventListener("click", playPrevious);
  nextBtn.addEventListener("click", playNext);
  loopBtn.addEventListener("click", toggleLoop);
  volumeSlider.addEventListener("input", adjustVolume);

  // Function to select a playlist
  function selectPlaylist(id) {
    // Remove active class from all playlists
    playlistEls.forEach((el) => el.classList.remove("active"));

    // Add active class to selected playlist
    const selectedPlaylistEl = document.querySelector(
      `.playlist[data-id="${id}"]`
    );
    if (selectedPlaylistEl) {
      selectedPlaylistEl.classList.add("active");
    }

    // Update current playlist
    currentPlaylist = playlists.find((playlist) => playlist.id === id);
    currentSongIndex = 0;

    // Enable controls
    prevBtn.disabled = false;
    playBtn.disabled = false;
    nextBtn.disabled = false;
    loopBtn.disabled = false;

    // Start playing the first song
    playSong();
  }

  // Function to play a song
  function playSong() {
    if (!currentPlaylist) {
      resetPlayer();
      return;
    }

    const song = currentPlaylist.songs[currentSongIndex];

    // Update UI
    songTitleEl.textContent = song.title;
    playlistNameEl.textContent = `From: ${currentPlaylist.name}`;
    playBtn.innerHTML = "⏸";
    isPlaying = true;

    // In a real application, you would actually play the audio file here
    console.log(
      `Playing: ${song.title} (value: ${song.value}) from ${currentPlaylist.name}`
    );

    // Simulate song ending after a few seconds (for demonstration purposes)
    // In a real app, you'd listen for the 'ended' event on an audio element
    setTimeout(() => {
      if (isPlaying) {
        playNext();
      }
    }, 5000);
  }

  // Function to reset player when nothing is playing
  function resetPlayer() {
    songTitleEl.textContent = "Nothing is playing right now";
    playlistNameEl.textContent = "";
    playBtn.innerHTML = "▶";
    isPlaying = false;

    // Disable controls when no playlist is selected
    prevBtn.disabled = true;
    playBtn.disabled = true;
    nextBtn.disabled = true;
    loopBtn.disabled = true;
    loopBtn.classList.remove("active");
    isLooping = false;
  }

  // Function to toggle play/pause
  function togglePlay() {
    if (!currentPlaylist) return;

    isPlaying = !isPlaying;
    playBtn.innerHTML = isPlaying ? "⏸" : "▶";

    if (isPlaying) {
      // Resume playing
      console.log(`Resuming: ${currentPlaylist.songs[currentSongIndex].title}`);
    } else {
      // Pause playing
      console.log(`Pausing: ${currentPlaylist.songs[currentSongIndex].title}`);
    }
  }

  // Function to play previous song
  function playPrevious() {
    if (!currentPlaylist) return;

    currentSongIndex--;
    if (currentSongIndex < 0) {
      currentSongIndex = currentPlaylist.songs.length - 1;
    }

    playSong();
  }

  // Function to play next song
  function playNext() {
    if (!currentPlaylist) return;

    currentSongIndex++;
    if (currentSongIndex >= currentPlaylist.songs.length) {
      // If looping is enabled, start from the beginning
      // Otherwise, only start from beginning if we're at the end of the playlist
      if (isLooping) {
        currentSongIndex = 0;
        playSong();
      } else {
        // Stop playing when we reach the end of the playlist
        currentSongIndex = 0;
        playSong();
      }
    } else {
      playSong();
    }
  }

  // Function to adjust volume
  function adjustVolume() {
    volume = volumeSlider.value;
    console.log(`Volume set to: ${volume}%`);

    // In a real application, you would set the volume of an audio element
  }

  // Function to toggle loop mode for the playlist
  function toggleLoop() {
    if (!currentPlaylist) return;

    isLooping = !isLooping;

    if (isLooping) {
      loopBtn.classList.add("active");
      console.log(`Playlist loop: ON`);
    } else {
      loopBtn.classList.remove("active");
      console.log(`Playlist loop: OFF`);
    }
  }
});

const playlists = {
  1: [101, 102, 103, 104],
  2: [201, 202, 203],
  3: [301, 302, 303, 304, 305],
  4: [401, 402],
};

// Player state
let currentPlaying = {
  playlist: null,
  track: null,
  isPlaying: false,
  currentIndex: -1,
};

// DOM elements
const playlistElements = document.querySelectorAll(".playlist");
const nowPlayingElement = document.getElementById("nowPlaying");
const trackListElement = document.getElementById("trackList");
const prevButton = document.getElementById("prevButton");
const playPauseButton = document.getElementById("playPauseButton");
const nextButton = document.getElementById("nextButton");
const volumeSlider = document.getElementById("volumeSlider");
const loopButton = document.getElementById("loopButton");

// Initialize loop state
let isLooping = false;

// Add event listeners to playlists
playlistElements.forEach((playlist) => {
  playlist.addEventListener("click", () => {
    const playlistId = parseInt(playlist.dataset.playlist);
    loadPlaylist(playlistId);
  });
});

// Load a playlist and start playing
function loadPlaylist(playlistId) {
  // Reset previous active playlist
  playlistElements.forEach((pl) => pl.classList.remove("active"));

  // Set new playlist as active
  document
    .querySelector(`.playlist[data-playlist="${playlistId}"]`)
    .classList.add("active");

  // Update current playing
  currentPlaying.playlist = playlistId;
  currentPlaying.currentIndex = 0;
  currentPlaying.track = playlists[playlistId][0];
  currentPlaying.isPlaying = true;

  // Update UI
  updateNowPlaying();
  updatePlayPauseButton();
  loadTrackList();

  // Simulate starting playback
  console.log(
    `Started playing track ${currentPlaying.track} from playlist ${currentPlaying.playlist}`
  );
}

// Update the now playing display
function updateNowPlaying() {
  if (currentPlaying.playlist === null) {
    nowPlayingElement.textContent = "Nothing is playing right now";
  } else {
    nowPlayingElement.textContent = `Playing: Track ${currentPlaying.track} from Playlist ${currentPlaying.playlist}`;
  }
}

// Load and display the track list for current playlist
function loadTrackList() {
  // Clear existing tracks
  trackListElement.innerHTML = "";

  if (currentPlaying.playlist === null) return;

  // Add tracks from current playlist
  playlists[currentPlaying.playlist].forEach((track, index) => {
    const li = document.createElement("li");
    li.className = "track";
    if (index === currentPlaying.currentIndex) {
      li.classList.add("playing");
    }
    li.textContent = `Track ${track}`;
    li.addEventListener("click", () => {
      playTrack(index);
    });
    trackListElement.appendChild(li);
  });
}

// Play a specific track
function playTrack(index) {
  if (currentPlaying.playlist === null) return;

  currentPlaying.currentIndex = index;
  currentPlaying.track = playlists[currentPlaying.playlist][index];
  currentPlaying.isPlaying = true;

  updateNowPlaying();
  updatePlayPauseButton();
  highlightCurrentTrack();

  console.log(`Playing track ${currentPlaying.track}`);

  // Simulate track duration (5 seconds) and auto-play next
  if (currentPlaying.isPlaying) {
    setTimeout(() => {
      if (currentPlaying.isPlaying) {
        playNextTrack();
      }
    }, 5000);
  }
}

// Highlight the currently playing track
function highlightCurrentTrack() {
  const tracks = document.querySelectorAll(".track");
  tracks.forEach((track, index) => {
    if (index === currentPlaying.currentIndex) {
      track.classList.add("playing");
    } else {
      track.classList.remove("playing");
    }
  });
}

// Play the previous track
function playPrevTrack() {
  if (currentPlaying.playlist === null) return;

  currentPlaying.currentIndex--;
  if (currentPlaying.currentIndex < 0) {
    if (isLooping) {
      // If looping, go to the last track
      currentPlaying.currentIndex =
        playlists[currentPlaying.playlist].length - 1;
    } else {
      currentPlaying.currentIndex = 0;
      return;
    }
  }

  currentPlaying.track =
    playlists[currentPlaying.playlist][currentPlaying.currentIndex];
  updateNowPlaying();
  highlightCurrentTrack();

  console.log(`Playing previous track: ${currentPlaying.track}`);
}

// Play the next track
function playNextTrack() {
  if (currentPlaying.playlist === null) return;

  currentPlaying.currentIndex++;
  if (
    currentPlaying.currentIndex >= playlists[currentPlaying.playlist].length
  ) {
    if (isLooping) {
      // If looping, go back to the first track
      currentPlaying.currentIndex = 0;
    } else {
      currentPlaying.currentIndex =
        playlists[currentPlaying.playlist].length - 1;
      currentPlaying.isPlaying = false;
      updatePlayPauseButton();
      return;
    }
  }

  currentPlaying.track =
    playlists[currentPlaying.playlist][currentPlaying.currentIndex];
  updateNowPlaying();
  highlightCurrentTrack();

  console.log(`Playing next track: ${currentPlaying.track}`);

  // Simulate track duration and auto-play next if still playing
  if (currentPlaying.isPlaying) {
    setTimeout(() => {
      if (currentPlaying.isPlaying) {
        playNextTrack();
      }
    }, 5000);
  }
}

// Toggle play/pause
function togglePlayPause() {
  if (currentPlaying.playlist === null) return;

  currentPlaying.isPlaying = !currentPlaying.isPlaying;
  updatePlayPauseButton();

  if (currentPlaying.isPlaying) {
    console.log(`Resumed playing track ${currentPlaying.track}`);
    // Simulate track duration and auto-play next
    setTimeout(() => {
      if (currentPlaying.isPlaying) {
        playNextTrack();
      }
    }, 5000);
  } else {
    console.log(`Paused track ${currentPlaying.track}`);
  }
}

// Update the play/pause button icon
function updatePlayPauseButton() {
  playPauseButton.textContent = currentPlaying.isPlaying ? "⏸" : "▶";
}

// Toggle loop mode
function toggleLoop() {
  isLooping = !isLooping;
  loopButton.classList.toggle("active", isLooping);
  console.log(`Loop mode: ${isLooping ? "ON" : "OFF"}`);
}

// Set up event listeners for controls
prevButton.addEventListener("click", playPrevTrack);
playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", playNextTrack);
loopButton.addEventListener("click", toggleLoop);

// Volume control
volumeSlider.addEventListener("input", () => {
  const volume = volumeSlider.value;
  console.log(`Volume set to: ${volume}%`);
});
