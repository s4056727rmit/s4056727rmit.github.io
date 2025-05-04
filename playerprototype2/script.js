// STEP 1: Define our music tracks and playlists
// ====================================

// This is where you add your own music files
const tracks = {
  // Format: trackID: {title: "Track Name", source: "path/to/audio.mp3"}
  101: { title: "Happy Song", source: "audio/just-relax-11157.mp3" },
  102: { title: "Sad Song", source: "music/track102.mp3" },
  103: { title: "Dance Song", source: "music/track103.mp3" },
  104: { title: "Slow Song", source: "music/track104.mp3" },

  201: { title: "Rock Song", source: "music/track201.mp3" },
  202: { title: "Pop Song", source: "music/track202.mp3" },
  203: { title: "Jazz Song", source: "music/track203.mp3" },

  301: { title: "Country Song", source: "music/track301.mp3" },
  302: { title: "Hip Hop Song", source: "music/track302.mp3" },
  303: { title: "Classical Song", source: "music/track303.mp3" },
  304: { title: "Electronic Song", source: "music/track304.mp3" },
  305: { title: "Reggae Song", source: "music/track305.mp3" },

  401: { title: "Blues Song", source: "music/track401.mp3" },
  402: { title: "Folk Song", source: "music/track402.mp3" },
};

// Group tracks into playlists
const playlists = {
  1: [101, 102, 103, 104], // Playlist 1: various songs
  2: [201, 202, 203], // Playlist 2: more songs
  3: [301, 302, 303, 304, 305], // Playlist 3: even more songs
  4: [401, 402], // Playlist 4: final songs
};

// Colors for each playlist (backup if image doesn't load)
const playlistColors = {
  1: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)", // Pink/Peach
  2: "linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)", // Blue/Pink
  3: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)", // Purple/Blue
  4: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", // Green/Blue
};

// NEW: Background images for each playlist
const playlistBackgrounds = {
  1: "images/background1.jpg", // Happy/Mood playlist background
  2: "images/background2.jpg", // Rock/Pop playlist background
  3: "images/background3.jpg", // Various genres playlist background
  4: "images/background4.jpg", // Blues/Folk playlist background
};

// NEW: Icons for control buttons
const buttonIcons = {
  play: "images/play.png",
  pause: "images/pause.png",
  next: "images/next.png",
  prev: "images/prev.png",
  loop: "images/loop.png",
  loopActive: "images/loop-active.png",
};

// STEP 2: Set up variables to track what's playing
// ===============================================

// Which playlist is selected (0 = none)
let currentPlaylist = 0;

// Which track number in the playlist (0 = first track)
let currentTrack = -1;

// Is music playing right now?
let isPlaying = false;

// Should we repeat the playlist when it ends?
let isLooping = false;

// Create an audio player
const audioElement = new Audio();

// STEP 3: Connect to HTML elements
// ===============================

// Get all the buttons and displays from the HTML
const nowPlayingText = document.getElementById("nowPlaying");
const trackList = document.getElementById("trackList");
const playButton = document.getElementById("playPauseButton");
const loopButton = document.getElementById("loopButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const volumeControl = document.getElementById("volumeSlider");
const playlistButtons = document.querySelectorAll(".playlist");
const backgroundContainer = document.getElementById("background");

// STEP 4: Set up what happens when a track ends
// ===========================================

// When a song finishes playing, play the next one
audioElement.addEventListener("ended", function () {
  playNextSong();
});

// STEP 5: Add button click handlers
// ===============================

// Loop through each playlist button and add a click handler
for (let i = 0; i < playlistButtons.length; i++) {
  const button = playlistButtons[i];

  // When a playlist button is clicked
  button.addEventListener("click", function () {
    // Get playlist number from the button's data-playlist attribute
    const playlistNumber = +this.dataset.playlist;
    choosePlaylist(playlistNumber);
  });
}

// What happens when you click the Previous button
prevButton.addEventListener("click", function () {
  playPreviousSong();
});

// What happens when you click the Play/Pause button
playButton.addEventListener("click", function () {
  togglePlayPause();
});

// What happens when you click the Next button
nextButton.addEventListener("click", function () {
  playNextSong();
});

// What happens when you click the Loop button
loopButton.addEventListener("click", function () {
  toggleLoopMode();
});

// What happens when you move the volume slider
volumeControl.addEventListener("input", function () {
  audioElement.volume = this.value / 100;
});

// STEP 6: Define all our functions
// ==============================

// NEW: Update the background image
function updateBackground() {
  if (currentPlaylist === 0) {
    // Default background when nothing is playing
    backgroundContainer.style.backgroundImage = "none";
    backgroundContainer.style.backgroundColor = "#f5f5f5";
  } else {
    // Try to set the background image for this playlist
    const bgImage = playlistBackgrounds[currentPlaylist];

    if (bgImage) {
      // If we have an image, use it
      backgroundContainer.style.backgroundImage = `url(${bgImage})`;
    } else {
      // Fallback to gradient if no image
      backgroundContainer.style.backgroundImage =
        playlistColors[currentPlaylist];
    }
  }
}

// NEW: Update button images
function updateButtonImages() {
  // Update play/pause button image
  if (isPlaying) {
    playButton.innerHTML = `<img src="${buttonIcons.pause}" alt="Pause">`;
  } else {
    playButton.innerHTML = `<img src="${buttonIcons.play}" alt="Play">`;
  }

  // Update loop button image
  if (isLooping) {
    loopButton.innerHTML = `<img src="${buttonIcons.loopActive}" alt="Loop On">`;
  } else {
    loopButton.innerHTML = `<img src="${buttonIcons.loop}" alt="Loop Off">`;
  }

  // Set static images for prev/next
  prevButton.innerHTML = `<img src="${buttonIcons.prev}" alt="Previous">`;
  nextButton.innerHTML = `<img src="${buttonIcons.next}" alt="Next">`;
}

// Choose a playlist and start playing it
function choosePlaylist(playlistNumber) {
  // If this playlist is already playing, do nothing
  if (playlistNumber === currentPlaylist && isPlaying) {
    return;
  }

  // Update which playlist is selected
  currentPlaylist = playlistNumber;
  currentTrack = 0; // Start with the first song
  isPlaying = true; // Start playing

  // Update buttons to show which playlist is active
  highlightActivePlaylist();

  // Update the display and start playing
  updateDisplay();
  playSong();
}

// Highlight the active playlist button
function highlightActivePlaylist() {
  // Go through each playlist button
  for (let i = 0; i < playlistButtons.length; i++) {
    const button = playlistButtons[i];
    const buttonPlaylistNumber = +button.dataset.playlist;

    // If this is the active playlist, highlight it
    if (buttonPlaylistNumber === currentPlaylist) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
}

// Update all the visual elements
function updateDisplay() {
  // Update the background first
  updateBackground();

  // Update the button images
  updateButtonImages();

  // If no playlist is selected
  if (currentPlaylist === 0) {
    nowPlayingText.textContent = "Nothing is playing right now";
  } else {
    // Show what's playing if a track is selected
    if (currentTrack >= 0) {
      // Get the track ID and info
      const trackId = playlists[currentPlaylist][currentTrack];
      const trackInfo = tracks[trackId];

      // Update the "Now Playing" text
      nowPlayingText.textContent =
        "Playing: " + trackInfo.title + " (Playlist " + currentPlaylist + ")";
    }
  }

  // Update the track list
  updateTrackList();
}

// Update the list of tracks shown for the current playlist
function updateTrackList() {
  // Clear the current list
  trackList.innerHTML = "";

  // If no playlist is selected, leave the list empty
  if (currentPlaylist === 0) {
    return;
  }

  // Get the list of track IDs for this playlist
  const playlistTracks = playlists[currentPlaylist];

  // Add each track to the list
  for (let i = 0; i < playlistTracks.length; i++) {
    // Get the track ID and info
    const trackId = playlistTracks[i];
    const trackInfo = tracks[trackId];

    // Create a list item for this track
    const trackItem = document.createElement("li");
    trackItem.className = "track";

    // If this is the current track, highlight it
    if (i === currentTrack) {
      trackItem.classList.add("playing");
    }

    // Set the track title
    trackItem.textContent = trackInfo.title;

    // Add click handler to play this track when clicked
    trackItem.addEventListener("click", function () {
      chooseSong(i);
    });

    // Add this track to the list
    trackList.appendChild(trackItem);
  }
}

// Play the current song
function playSong() {
  // Do nothing if no playlist or track is selected
  if (currentPlaylist === 0 || currentTrack < 0) {
    return;
  }

  // Get the track ID and info
  const trackId = playlists[currentPlaylist][currentTrack];
  const trackInfo = tracks[trackId];

  // Set the audio source
  audioElement.src = trackInfo.source;

  // Try to play the audio
  audioElement.play().catch(function (error) {
    console.log("Couldn't play audio:", error);
    isPlaying = false;
    updateDisplay();
  });
}

// Choose and play a specific song
function chooseSong(trackNumber) {
  // Stop current song if playing
  audioElement.pause();

  // Update which track is playing
  currentTrack = trackNumber;
  isPlaying = true;

  // Update display and play
  updateDisplay();
  playSong();
}

// Play the next song
function playNextSong() {
  // Do nothing if no playlist is selected
  if (currentPlaylist === 0) {
    return;
  }

  // Get the number of tracks in this playlist
  const numberOfTracks = playlists[currentPlaylist].length;

  // Check if we're at the end of the playlist
  if (currentTrack >= numberOfTracks - 1) {
    // This is the last track

    if (isLooping) {
      // Loop back to first track
      currentTrack = 0;
      updateDisplay();
      playSong();
    } else {
      // Stop playing if we're not looping
      isPlaying = false;
      updateDisplay();
    }
  } else {
    // Move to the next track
    currentTrack = currentTrack + 1;
    updateDisplay();
    playSong();
  }
}

// Play the previous song
function playPreviousSong() {
  // Do nothing if no playlist is selected
  if (currentPlaylist === 0) {
    return;
  }

  // Check if we're at the first track
  if (currentTrack <= 0) {
    if (isLooping) {
      // If looping, wrap around to the last track
      const numberOfTracks = playlists[currentPlaylist].length;
      currentTrack = numberOfTracks - 1;
    } else {
      // If not looping, stay on the first track
      currentTrack = 0;
    }
  } else {
    // Move to the previous track
    currentTrack = currentTrack - 1;
  }

  // Update and play
  updateDisplay();
  playSong();
}

// Toggle between play and pause
function togglePlayPause() {
  // Do nothing if no playlist is selected
  if (currentPlaylist === 0) {
    return;
  }

  if (isPlaying) {
    // Pause the music
    isPlaying = false;
    audioElement.pause();
  } else {
    // Resume playing
    isPlaying = true;
    audioElement.play();
  }

  // Update the display
  updateDisplay();
}

// Toggle loop mode on/off
function toggleLoopMode() {
  // Flip the looping status
  isLooping = !isLooping;

  // Update loop button styling
  if (isLooping) {
    loopButton.classList.add("active");
  } else {
    loopButton.classList.remove("active");
  }

  // Update the display
  updateDisplay();
}

// Initialize the player when the page loads
window.addEventListener("DOMContentLoaded", function () {
  // Set up initial button images
  updateButtonImages();
});
