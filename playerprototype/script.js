// Define playlists with their tracks
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
