const startButton = document.querySelector("#start-button");
console.log(startButton);

/*Content Fading in - Assisted by Claude AI and W3 School*/

let timer;
const hideTimer = 2000;
const content = document.querySelector(".content");

function showContent() {
  if (content) {
    content.style.opacity = 1;
    content.style.transition = `opacity 1000ms`;
  }
  // Also show cursor
  showCursor();
}

function hideContent() {
  if (content) {
    content.style.opacity = 0;
  }
  // Also hide cursor
  hideCursor();
}

function showCursor() {
  document.body.classList.remove("hide-cursor");
}

function hideCursor() {
  document.body.classList.add("hide-cursor");
}

// Unified activity handler
function mouseActivity() {
  if (timer) {
    clearTimeout(timer);
  }
  showContent();
  timer = setTimeout(hideContent, hideTimer);
}

// Attach events
["mousemove", "click"].forEach((event) => {
  document.addEventListener(event, mouseActivity);
});

mouseActivity();

/*This function creates different opacity values for two status of the content. */

/*if (document) {
  document.addEventListener("mousemove", function () {
    if (timer) {
      clearTimeout(timer);
    }

    showContent();

    timer = setTimeout(fadeContent, fadeDelay);
  });
  document.addEventListener("click", function () {
    if (timer) {
      clearTimeout(timer);
    }

    showContent();
    timer = setTimeout(fadeContent, fadeDelay);
  });
}
    // Reset the timer
    clearTimeout(timer);
    timer = setTimeout(() => {
        // Add the class only if not already added
        if (!document.body.classList.contains('hide-cursor')) {
            document.body.classList.add('hide-cursor');
        }
    }, 2000); // 3 seconds of inactivity

// Listen for multiple types of user activity
['mousemove', 'click', 'keydown'].forEach(event => {
    document.addEventListener(event, showCursor);
});

showCursor();

/* I wanted to have the fading feature for the main player screen and used ClaudeAI and W3School to reassemble the generated code with my knowledge and IT WORKED!
I had a little trouble with it because I aimed to hide the content with both mouse click and move, but I failed to try to add second input to the code and ended up just adding a second feature instead.*/
