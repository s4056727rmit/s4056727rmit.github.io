/*The way I approached this assignment was creating a separate file to test and create features and building the code up by combining them together. Therefore, the constants and functions for each function was automatically grouped together and slightly modified by Claude AI when I was using it to learn new functions and adding them to my website, so it might be a little harder to locate them among the script.
I also received a big help from my friend around the end who is currently employed in the coding industry and he taught me a lot, but I can proudly claim that the majority of the script was completed before it :).*/
/*If I missed explaning any features, it's not because I don't know about it, it's probably the sickness and lack of sleep getting to me.*/

/*Content fading away when cursor is idle feature - Assisted by Claude AI and W3 School*/
let timer;
const hideTimer = 4000;
console.log(hideTimer);
const content = document.querySelector(".content");
console.log(content);

["mousemove", "click"].forEach((event) => {
  document.addEventListener(event, mouseActivity);
});

mouseActivity();

function mouseActivity() {
  if (timer) {
    clearTimeout(timer);
  }
  showContent();
  timer = setTimeout(hideContent, hideTimer);

  function showCursor() {
    document.body.classList.remove("hide-cursor");
  }

  function hideCursor() {
    document.body.classList.add("hide-cursor");
  }

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
}
/* As mentioned in style.css, the website's original concept was to act as a window to show a scenery suiting the corresponding playlist style to help the user be more engaged with the environment and focus better on studying. That's why I wanted to UIs on the screen to not interfere with the image on the screen. For this, I received help from ClaudeAI and W3School to generate a code and reassemble it to make it suitable for my website and IT WORKED!!!
I had a little trouble with it because I aimed to hide the content with both mouse click and move, but it didn't work with normal addEventListener structure. I did some research and discovered forEach() method (https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line) and somehow managed to add event into it. However, I later wanted to hide the cursor as well, but I couldn't make one function fade both UI and cursor so I just created a cursor fade function and added it under the content hide function.
This feature first creates a timer to create timed variable. If the website detects either mousemove or click, it triggers showcontent functions which resets the timer back to its value. If the timer runs out, it triggers the hide function which changes the opacity of the UI to 0, until mouseActivity is detected */

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
      source: "music/summer-seaside/summer-tropical-happy-314068.mp3",
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
        "music/summer-seaside/relax-your-thoughts-background-music-for-video-deep-house-version-309418.mp3",
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
      source: "music/soaring-sky/inspiring-atmosphere-125562.mp3",
      title: "Inspiring Atmosphere 125562",
      /* https://pixabay.com/music/acoustic-group-inspiring-atmosphere-125562/ */
    },
    {
      id: 407,
      source: "music/soaring-sky/ambient-piano-and-strings-10711.mp3",
      title: "Ambient Piano And Strings 10711",
      /* https://pixabay.com/music/beautiful-plays-ambient-piano-and-strings-10711/ */
    },
  ],
  5: [
    {
      id: 501,
      source: "music/forest-flora/sedative-110241.mp3",
      title: "Sedative 110241",
      /* https://pixabay.com/music/acoustic-group-sedative-110241/ */
    },
    {
      id: 502,
      source:
        "music/forest-flora/relaxing-music-with-nature-sound-and-flute-284493.mp3",
      title: "Relaxing Music With Nature Sound And Flute 284493",
      /* https://pixabay.com/music/meditationspiritual-relaxing-music-with-nature-sound-and-flute-284493/ */
    },
    {
      id: 503,
      source: "music/forest-flora/nature-relaxing-149223.mp3",
      title: "Nature Relaxing 149223",
      /* https://pixabay.com/music/ambient-nature-relaxing-149223/ */
    },
    {
      id: 504,
      source: "music/forest-flora/a-call-to-the-soul-149262.mp3",
      title: "A Call To The Soul 149262",
      /* https://pixabay.com/music/acoustic-group-a-call-to-the-soul-149262/ */
    },
    {
      id: 505,
      source: "music/forest-flora/cinematic-documentary-piano-248011.mp3",
      title: "Cinematic Documentary Piano 248011",
      /* https://pixabay.com/music/solo-piano-cinematic-documentary-piano-248011/ */
    },
    {
      id: 506,
      source: "music/forest-flora/nature-walk-124997.mp3",
      title: "Nature Walk 124997",
      /* https://pixabay.com/music/acoustic-group-nature-walk-124997/ */
    },
    {
      id: 507,
      source: "music/forest-flora/ethereal-ambient-269037.mp3",
      title: "Ethereal Ambient 269037",
      /* https://pixabay.com/music/modern-classical-ethereal-ambient-269037/ */
    },
  ],
  6: [
    {
      id: 604,
      source: "music/deepwater-depth/relaxing-music-ambient-204599.mp3",
      title: "Relaxing Music Ambient 204599",
      /* https://pixabay.com/music/corporate-relaxing-music-ambient-204599// */
    },
    {
      id: 602,
      source: "music/deepwater-depth/distance-piano-music-334367.mp3",
      title: "Distance Piano Music 334367",
      /* https://pixabay.com/music/ambient-distance-piano-music-334367/ */
    },
    {
      id: 603,
      source: "music/deepwater-depth/relaxing-piano-310597.mp3",
      title: "Relaxing Piano 310597",
      /* https://pixabay.com/music/modern-classical-relaxing-piano-310597/ */
    },
    {
      id: 601,
      source: "music/deepwater-depth/please-calm-my-mind-125566.mp3",
      title: "Please Calm My Mind 125566",
      /* https://pixabay.com/music/beautiful-plays-please-calm-my-mind-125566/ */
    },
    {
      id: 605,
      source: "music/deepwater-depth/space-158081.mp3",
      title: "Space 158081",
      /* https://pixabay.com/music/ambient-space-158081/ */
    },
    {
      id: 606,
      source:
        "music/deepwater-depth/wide-flower-fields-atmospheric-ambient-332274.mp3",
      title: "Wide Flower Fields Atmospheric Ambient 332274",
      /* https://pixabay.com/music/ambient-wide-flower-fields-atmospheric-ambient-332274/ */
    },
    {
      id: 607,
      source: "music/deepwater-depth/gentle-ambient-atmosphere-332292.mp3",
      title: "Gentle Ambient Atmosphere 332292",
      /* https://pixabay.com/music/ambient-gentle-ambient-atmosphere-332292/ */
    },
  ],
  7: [
    {
      id: 701,
      source: "music/moon-memento/relaxing-classical-piano-music-255722.mp3",
      title: "Relaxing Classical Piano Music 255722",
      /* https://pixabay.com/music/modern-classical-relaxing-classical-piano-music-255722/ */
    },
    {
      id: 702,
      source: "music/moon-memento/relaxing-music-no16-273727.mp3",
      title: "Relaxing Music No16 273727",
      /* https://pixabay.com/music/modern-classical-relaxing-music-no16-273727/ */
    },
    {
      id: 703,
      source:
        "music/moon-memento/inspirational-uplifting-calm-piano-254764.mp3",
      title: "Inspirational Uplifting Calm Piano 254764",
      /* https://pixabay.com/music/modern-classical-inspirational-uplifting-calm-piano-254764/ */
    },
    {
      id: 704,
      source:
        "Assignment2/music/moon-memento/i-am-waiting-sad-slow-piano-music-311530.mp3",
      title: "I AM Waiting Sad Slow Piano Music 311530",
      /* https://pixabay.com/music/modern-classical-i-am-waiting-sad-slow-piano-music-311530/ */
    },
    {
      id: 705,
      source: "music/moon-memento/sad-mood-126770.mp3",
      title: "Sad Mood 126770",
      /* https://pixabay.com/music/modern-classical-sad-mood-126770/ */
    },
    {
      id: 706,
      source:
        "music/moon-memento/sad-moment-sad-and-melancholy-piano-background-music-124488.mp3",
      title: "Sad Moment Sad And Melancholy Piano Background Music 124488",
      /* https://pixabay.com/music/modern-classical-sad-moment-sad-and-melancholy-piano-background-music-124488/ */
    },
    {
      id: 707,
      source: "music/moon-memento/piano-solo-334664.mp3",
      title: "Piano Solo 334664",
      /* https://pixabay.com/music/modern-classical-piano-solo-334664/ */
    },
  ],
};

const playlistBackground = {
  1: "https://cdn.pixabay.com/photo/2023/12/05/15/07/window-8431870_1280.jpg",
  2: "https://cdn.pixabay.com/photo/2018/08/15/13/10/new-year-background-3608029_1280.jpg",
  3: "https://cdn.pixabay.com/photo/2021/02/20/18/11/sea-6034191_1280.jpg",
  4: "https://cdn.pixabay.com/photo/2017/01/26/06/44/sky-2009916_1280.jpg",
  5: "https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg",
  6: "https://cdn.pixabay.com/photo/2018/03/24/03/45/sea-3255634_1280.jpg",
  7: "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg",
};
/* This is the constants for the playlists and its tracks and backgrounds. I've assigned them numbers as values so it becomes easier to play the selected playlist value with the music player controls later on. */

const buttonIcons = {
  play: "ui/Play Button.png",
  pause: "ui/Pause Button.png",
  next: "ui/Skip Button.png",
  previous: "ui/Previous Button.png",
  loopOn: "ui/Loop Button.png",
  loopOff: "ui/Loop disabled Button.png",
};
/* I've created the icons for the buttons using photoshop so there was no need to attach outer sources to it. */

const nowPlaying = document.getElementById("now-playing");
console.log(nowPlaying);
const trackListNumber = document.getElementById("track-list");
console.log(trackListNumber);
const playPauseButton = document.getElementById("play-pause-button");
console.log(playPauseButton);
const loopButton = document.getElementById("loop-button");
console.log(loopButton);
const previousButton = document.getElementById("previous-button");
console.log(previousButton);
const nextButton = document.getElementById("skip-button");
console.log(nextButton);
const hideButton = document.getElementById("hide-button");
console.log(hideButton);
const volumeSlider = document.getElementById("volume-slider");
console.log(volumeSlider);
const supportText = document.getElementById("supportText");
console.log(supportText);
const playerBackground = document.getElementById("player-background");
console.log(playerBackground);

const playPauseImg = document.getElementById("play-pause-button");
const loopImg = document.getElementById("loop-button");
const prevImg = document.getElementById("previous-button");
const nextImg = document.getElementById("skip-button");

let currentPlaylist = 0;
let currentTrackNumber = -1;
let isPlaying = false;
let isLooping = false;
let audioElement = new Audio();
let backgroundHide = "visible";
/* This sets the default values for the music player control.*/

/* Volume slider feature, assisted by Claude AI and */
volumeSlider.addEventListener("input", function (event) {
  audioElement.volume = event.target.value / 100;
  console.log("Volume: " + event.target.value + "%");
});

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

/* creating playlist buttons and directing playlist play behaviour, assited by Claude Ai and slightly by friend*/
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

function selectPlaylist(playlistNumber) {
  if (playlistNumber === currentPlaylist && isPlaying) {
    return;
  }

  for (let i = 0; i < playlistButtons.length; i++) {
    const button = playlistButtons[i];
    const buttonPlaylistNumber = +button.dataset.playlist;

    if (buttonPlaylistNumber === playlistNumber) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }

  currentPlaylist = playlistNumber;
  currentTrackNumber = 0;
  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack();
}

function updateTrackList() {
  trackListNumber.innerHTML = "";

  if (currentPlaylist === 0) {
    return;
  }

  const tracks = playlists[currentPlaylist];
  for (let i = 0; i < tracks.length; i++) {
    const trackElement = document.createElement("li");
    trackElement.className = "track";

    if (i === currentTrackNumber) {
      trackElement.classList.add("playing");
    } else {
      trackElement.classList.remove("playing");
    }

    trackElement.textContent = tracks[i].title;

    trackElement.addEventListener("click", function () {
      playTrack(i);
    });

    trackListNumber.appendChild(trackElement);
  }
}

function playTrack(index) {
  if (currentPlaylist === 0) {
    return;
  }

  if (isPlaying) {
    audioElement.pause();
  }

  currentTrackNumber = index;
  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack();
}

function playCurrentTrack() {
  if (currentPlaylist === 0 || currentTrackNumber === -1) {
    return;
  }

  const track = playlists[currentPlaylist][currentTrackNumber];

  audioElement.src = track.source;
  audioElement.play();
}

audioElement.addEventListener("ended", function () {
  playNextTrack();
});

/* This feature allows the music player control to play the clicked playlist using numeric values and designs its behaviours. 
It creates a constant for playlistButtons with a changing numeric value. When the playlist button is clicked, it gives that value to currentPlaylist which retrieves the values of the tracks within that playlist and starts playing the audio beginning from the first track.
It also updates the UI so the list inside the legend is updated when a playlist is selected.
My friend helped me in learning new features to add additional behaviours to the functions. 
The behaviours include:
- PlaylistButtons fetch the player-anchor when clicked, which scrolls to the player screen without needing an <a href> source in HTML
- An autoplay feature so the playlist don't stop after one track, which shares the same function with the skip button later.
- Stopping the audio and clearing currentPlaylist when no playlist is selected
*/

/* Updating the visual element feature, assisted by Claude AI and friend*/
function updatePlayerDisplay() {
  if (currentPlaylist === 0) {
    playerBackground.style.backgroundImage = "none";
    nowPlaying.textContent = "Nothing is playing right now";
    nowPlaying.style.fontFamily = "sans-serif";
    supportText.style.visibility = "visible";
  } else {
    if (backgroundHide == "visible") {
      playerBackground.style.backgroundImage = `url('${playlistBackground[currentPlaylist]}')`;
    }
    supportText.style.visibility = "hidden";

    if (currentTrackNumber !== -1) {
      const track = playlists[currentPlaylist][currentTrackNumber];
      nowPlaying.innerHTML = ` Now playing: ${track.title} `;
      nowPlaying.style.fontFamily =
        "Cascadia Code"; /*Entirely self-figured switching between 2 fonts for a single element within a function :D */
    }
  }

  updateButtonImages();

  updateTrackList();
}

/*Loop, skip and previous button feature, slightly assisted by friend */
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

function playNextTrack() {
  if (currentPlaylist === 0) {
    return;
  }

  const playlistLength = playlists[currentPlaylist].length;

  if (currentTrackNumber >= playlistLength - 1) {
    if (isLooping) {
      currentTrackNumber = 0;
    } else {
      isPlaying = false;
      currentPlaylist = 0;
      audioElement.pause();
      updatePlayerDisplay();
      return;
    }
  } else {
    currentTrackNumber++;
  }

  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack();
}

function playPreviousTrack() {
  if (currentPlaylist === 0) {
    return;
  }

  if (currentTrackNumber <= 0) {
    if (isLooping) {
      currentTrackNumber = playlists[currentPlaylist].length - 1;
    } else {
      currentTrackNumber = 0;
    }
  } else {
    currentTrackNumber--;
  }

  isPlaying = true;

  updatePlayerDisplay();
  playCurrentTrack();
}
/*While it wasn't hard to create a previous and next button, there was an issue where if they are pressed with the playlist paused, while the UI is updated the paused audio track would remain. 
Turns out I just had to add isPlaying = true after else to play audio without interferred by its previous status.
As the music player control contains looping feature, the skip button will end the playlist if there are no more tracks and looping is disabled. Meanwhile the previous button will start the track from beginning.*/

function togglePlayPause() {
  if (currentPlaylist === 0) {
    return;
  }

  if (isPlaying) {
    isPlaying = false;
    audioElement.pause();
  } else {
    isPlaying = true;
    audioElement.play();
  }
  updatePlayerDisplay();
}

function updateButtonImages() {
  if (isPlaying) {
    playPauseImg.src = "ui/Pause Button.png";
  } else {
    playPauseImg.src = "ui/Play Button.png";
  }

  if (isLooping) {
    loopButton.src = "ui/Loop Button.png";
  } else {
    loopButton.src = "ui/Loop disabled Button.png";
  }
}

/* Hiding background image feature, assisted by friend*/
function toggleHide() {
  if (currentPlaylist === 0) return;
  currentstate = playerBackground.style.backgroundImage;
  if (currentstate === "none") {
    playerBackground.style.backgroundImage = `url('${playlistBackground[currentPlaylist]}')`;
    hideButton.src = "ui/Visible Button.png";
    backgroundHide = "visible";
  } else {
    playerBackground.style.backgroundImage = `none`;
    hideButton.src = "ui/Invisible Button.png";
    backgroundHide = "hidden";
  }
}

/* Redirect to Index when refreshed function, assisted by Claude AI */
window.addEventListener("load", redirectOnRefresh);

function redirectOnRefresh() {
  if (performance.navigation.type === 1) {
    window.location.href = "index.html";
  }
}

/* This function allows me to travel back to the main menu when refreshed. If it detects the change made on the window page with navigation.type (page refresh) is equal (===, strictly compared to) to true (1), it relocates the window back to index.html. */

/* As much as this annoyed the crap out of me, I had found this quite fun and ended up spending a lot of effort and health onto making it and learnt quite a lot. Was it worth it? Could not tell.*/
