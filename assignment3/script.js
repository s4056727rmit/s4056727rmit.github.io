const cube = document.querySelector(".cube");
const cubeContainer = document.querySelector(".cube-container");

let isDragging = false;
let startX = 0;
let startY = 0;
let currentRotateX = 0;
let currentRotateY = 0;
const rotationValue = 270;
let buttonsGenerated = false;
let currentButton = 1;
let lastButton = 6;

let milisecond = 0;
let second = 0;
let timer = false;

const mouseDown = (event) => {
  if (event.target.classList.contains("number-button")) {
    return;
  }
  // Disables dragging when clicking on a button to prevent possible errors.
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
};

const mouseMove = (event) => {
  if (!isDragging) return;

  const deltaX = event.clientX - startX;
  const deltaY = event.clientY - startY;

  const rotateX =
    currentRotateX - (deltaY / window.innerHeight) * rotationValue;
  const rotateY = currentRotateY + (deltaX / window.innerWidth) * rotationValue;

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
//The cube from the tutorial was rotated through simply moving the cursor around, which was not fitting for my project. Therefore I did some research and assisted by W3School https://www.w3schools.com/html/html5_draganddrop.asp and Youtube Tutorial: Drag & Drop with Javascript in 4 minutes by Appwrite https://www.youtube.com/watch?v=ymDjvycjgUM&ab_channel=Appwrite, I've changed the function to mouseDown, mouseMove and mouseUp which allows me to change the value of the cube through moving the cursor.

const mouseUp = (event) => {
  if (!isDragging) return;

  isDragging = false;

  const deltaX = event.clientX - startX;
  const deltaY = event.clientY - startY;

  currentRotateX =
    currentRotateX - (deltaY / window.innerHeight) * rotationValue;
  currentRotateY =
    currentRotateY + (deltaX / window.innerWidth) * rotationValue;
};
//After getting hold and drag as the trigger for cube rotation, I came to an issue where the cube moved back to its original form for every new drag. Assisted by my friend, I've created a new const for the currentRotationValue and make the mouseMove function start at that value.

cubeContainer.addEventListener("mousedown", mouseDown);
window.addEventListener("mousemove", mouseMove);
window.addEventListener("mouseup", mouseUp);

function generateButtons() {
  const startButton = document.querySelector(".start-button");
  startButton.innerHTML = "Reset";
  currentButton = 1;
  timer = true;
  stopwatch();

  if (buttonsGenerated) {
    clearButtons();
    startButton.innerHTML = "Start";
    timer = false;
    milisecond = 0;
    second = 0;
    return;
  }
  //If there are any, clear out existing buttons and reset the timer when the Start button is clicked.
  const faces = document.querySelectorAll(".cube-face");

  for (let i = 1; i <= lastButton; i++) {
    const button = document.createElement("button");
    button.className = "number-button";
    button.id = `${i}-number-button`;
    button.textContent = i;
    button.onclick = (e) => {
      e.stopPropagation();
      button;
      handleButtonClick(i);
    };
    const randomFace = faces[Math.floor(Math.random() * faces.length)];
    const randomX = Math.random() * 220 + 30; // 40-260px (leaving 40px margin)
    const randomY = Math.random() * 220 + 30; // 40-260px (leaving 40px margin)

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

    randomFace.appendChild(button);
  }

  buttonsGenerated = true;
  console.log("6 buttons generated on random faces!");
}
//Assisted by Google response, I've created a function to generate buttons in a numeric order which generates around random positions, excluding the edges, of a random face of the cube when start button is clicked.

function stopwatch() {
  if (timer) {
    milisecond++;
    if (milisecond == 100) {
      second += 1;
      milisecond = 0;
    }
    let secString = second;
    let milisecString = milisecond;

    if (second < 10) {
      secString = "0" + secString;
    }

    if (milisecond < 10) {
      milisecString = "0" + milisecString;
    }
    document.querySelector(
      ".timer-number"
    ).innerHTML = `${secString}.${milisecString}`;
    setTimeout(stopwatch, 10);
  } else {
    let secString = second;
    let milisecString = milisecond;

    if (second < 10) {
      secString = "0" + secString;
    }

    if (milisecond < 10) {
      milisecString = "0" + milisecString;
    }
    document.querySelector(
      ".timer-number"
    ).innerHTML = `${secString}.${milisecString}`;
  }
}
//This function starts stopwatch to count the time it takes to click all buttons. Assisted by GeeksForGeeks https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/ and friend, I originally wanted to count milisecond level, but for some reason Javascript was counting it with a different speed. We never figured out what the problem was so I simply removed the last digit and it worked, or it seemed like it worked until now which I realised that the count is actually slower than the real time. I'm assuming it has something to do with Javascript's internal counting rate, but at this point I cannot figure out how to fix it.

function clearButtons() {
  const buttons = document.querySelectorAll(".number-button");
  buttons.forEach((button) => button.remove());
  buttonsGenerated = false;
}

function regenerateButtons() {
  clearButtons();
  setTimeout(() => {
    generateButtons();
  }, 100);
}

function handleButtonClick(number) {
  const clickedButton = event.target;
  const clickButtonId = clickedButton.id.split("-")[0];
  if (currentButton != clickButtonId) {
    return;
  }
  currentButton += 1;
  //If the value of the clicked button does not equal to the currentButton, return. Or else, increase the value of the currentButton by 1.
  clickedButton.style.display = "none";
  if (clickButtonId == lastButton) {
    timer = false;
  }
}
//Removes the button once its clicked and whne the clickedButtonId is equal to lastButton value, it stops the timer.

//If I had time, I would've liked to add a scoreboard which tracks and keeps the top 5 fastest record made per session, but I ran out of time and effort and braincells to have any additional features.. at least I think the fundamental function does it's job (EXCEPT FOR THE TIMER)
