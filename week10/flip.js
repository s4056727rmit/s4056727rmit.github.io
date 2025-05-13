const card = document.querySelector(".card");
console.log(card);

// Flip on hover
card.addEventListener("mouseenter", flipMe);
card.addEventListener("mouseleave", flipMeBack);
function flipMe() {
  card.classList.add("flip");
}
function flipMeBack() {
  card.classList.remove("flip");
}

// Flip on click
// card.addEventListener("click", toggleFlip);

// function toggleFlip() {
//   card.classList.toggle("flip");
// }
