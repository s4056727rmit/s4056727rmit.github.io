let a = 100;
let b = 25;

function add(val1, val2) {
  let sum = val1 + val2;
  console.log(sum);
  return sum;
}
let total = add(10, 20);
console.log(total);
total = add(a, b);
console.log(total);

function subtract(val1, val2) {
  let res = val1 - val2;
  return res;
}

total = subtract(a, b);
console.log(total);

let grade = 40;
let myMarks = 84;
let myGrade = whatIsMyGrade(myMarks);
console.log(myGrade);

if (grade > 75) {
  console.log("yay you got distinction.");
} else {
  console.log("You just passed dumb.");
}

function whatIsMyGrade(marks) {
  if (marks < 40) {
    //console.log("sorry you failed");//
    return "failed";
  } else if (marks > 80) {
    return "HD";
  } else {
    return "pass";
  }
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
let course = "HII";
let subject = "wiwiwi";
header.innerHTML += `<h1> ${subject} is ${course} </h1>`;

const topHeading = document.querySelector("h1");
console.log(topHeading);
//console.log(topHeading.textContent);//
topHeading.textContent = "Your heading is replaced L";
topHeading.style.color = "red";
topHeading.style.fontSize = "60px";

const allParas = document.querySelectorAll("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid blue";
  allParas[i].style.backgroundColor = "lightgreen";
}

const sh1 = document.querySelector("#first-subheading");
console.log(sh1.textContent);
sh1.style.fontSize = "29px";

const blue1 = document.querySelectorAll(".blue-color");
console.log(blue1);
for (let i = 0; i < blue1.length; i++) {
  console.log(blue1[i].textContent);
}

const allSubHeadings = document.querySelectorAll("h2");
console.log(allSubHeadings);

const myButton = document.querySelector("#my-button");
console.log(myButton);
const myCat = document.querySelector("#wiwiwi");
console.log(myCat);

myButton.addEventListener("click", handleClick);
myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);
function addMe() {
  myCat.classList.add("round");
}
function removeMe() {
  myCat.classList.remove("round");
}

function handleClick() {
  console.log("MANJIJIMAAAAAAAH");
  myCat.classList.toggle("round");
}
