var currentDayDisplay = document.getElementById("currentDay");
var timeBlocks = document.querySelectorAll(".time-block");
var storageInput = document.querySelector("textarea"); // selectorAll??
var button = document.querySelector(".saveBtn"); // selectorAll??

// add current date to jumbotron (DDDD, Month, DD)
currentDayDisplay.textContent = moment().format("dddd MMMM Do YYYY");

// add text content (blank text fill section) when clicked
function inputText() {
  document.getElementsByClassName("textarea").value = "";
}

for (let index = 0; index < timeBlocks.length; index++) {
  const element = timeBlocks[index];
  var timeBlockHour = element.querySelector(".hour");
  console.log(timeBlockHour.textContent);
  var currentTime = moment(timeBlockHour.textContent, "hhA");
}

// use function and the css to change background while comparing the curring time with the hhA.
// function displayGray() {
//   var col = document.getElementById("demo");
//   col.style.backgroundColor = "#BBB4BD";
// }

// if (currentHour > timeRows) {
//   displayGray;
// }

// add gray to already past events
// add color red to present event time
// add green to future times

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }

// store text content to local storage (add event listener to save button)
// when refreshed the saved events persist
storageInput.addEventListener("input", (letter) => {
  storageInput.textContent = letter.target.value;
});

var saveToLocalStorage = () => {
  localStorage.setItem("textinput", storageInput.textContent);
};

button.addEventListener("click", saveToLocalStorage);
