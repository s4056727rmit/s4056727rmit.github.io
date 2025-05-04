const playlists = {
  1: [
    { id: 101, source: "audio/just-relax-11157.mp3", title: "Track 101" },
    { id: 102, source: "path/to/track102.mp3", title: "Track 102" },
    { id: 103, source: "path/to/track103.mp3", title: "Track 103" },
    { id: 104, source: "path/to/track104.mp3", title: "Track 104" },
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

// Background gradients for each playlist
const playlistBackground = {
  1: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)", // Pink/Peach
  2: "linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)", // Blue/Pink
  3: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)", // Purple/Blue
  4: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", // Green/Blue
};

// Player state
let currentPlaylist = 0;
let currentTrackNumber = -1;
let isPlaying = false;
let isLooping = false;
let audioElement = new Audio();

// Set up audio element to play next track when current track ends
audioElement.addEventListener("ended", function () {
  playNextTrack();
});

// Get HTML elements
const nowPlaying = document.getElementById("nowPlaying");
const trackListNumber = document.getElementById("trackList");
const playPauseButton = document.getElementById("playPauseButton");
const loopButton = document.getElementById("loopButton");
const previousButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const volumeSlider = document.getElementById("volumeSlider");

// Set up volume control
volumeSlider.addEventListener("input", function (event) {
  audioElement.volume = event.target.value / 100;
  console.log("Volume: " + event.target.value + "%");
});

// Set up playlist buttons
const playlistButtons = document.querySelectorAll(".playlist");
for (let i = 0; i < playlistButtons.length; i++) {
  const playlistButton = playlistButtons[i];
  playlistButton.addEventListener("click", function () {
    const playlistNumber = +this.dataset.playlist;
    selectPlaylist(playlistNumber);
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
  audioElement.play().catch((error) => {
    console.log("Playback error:", error);
    isPlaying = false;
    updatePlayerDisplay();
  });
}

// Update all visual elements
function updatePlayerDisplay() {
  // Update background
  if (currentPlaylist === 0) {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#f5f5f5";
    nowPlaying.textContent = "Nothing is playing right now";
  } else {
    document.body.style.backgroundImage = playlistBackground[currentPlaylist];

    // Show current track info
    if (currentTrackNumber !== -1) {
      const track = playlists[currentPlaylist][currentTrackNumber];
      nowPlaying.textContent = `Playing: ${track.title} from Playlist ${currentPlaylist}`;
    }
  }

  // Update button icons
  playPauseButton.textContent = isPlaying ? "⏸" : "▶";
  loopButton.textContent = isLooping ? "🔁" : "🔂";

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
    updatePlayerDisplay();
  }

  updatePlayerDisplay();
}

// Toggle loop mode
function toggleLoop() {
  isLooping = !isLooping;

  if (isLooping) {
    loopButton.classList.add("active");
  } else {
    loopButton.classList.remove("active");
  }

  updatePlayerDisplay();
}
