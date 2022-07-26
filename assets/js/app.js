// add current date to jumbotron (DDDD, Month, DD)
var currentDayDisplay = document.getElementById("currentDay");
var timeBlocks = document.querySelectorAll(".time-block");

currentDayDisplay.textContent = moment().format("dddd MMMM Do YYYY");

// add text content (blank text fill section) when clicked
function inputText() {
  document.getElementsByClassName("textarea").value = "";
}

for (let index = 0; index < timeBlocks.length; index++) {
  const element = timeBlocks[index];
  var timeBlockHour = element.querySelector(".hour");
  console.log(timeBlockHour.textContent);
  console.log(moment(timeBlockHour.textContent, "hhA"));
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

// store text content to local storage
// when refreshed the saved events persist
