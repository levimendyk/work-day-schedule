// add current date to jumbotron (DDDD, Month, DD)
var currentDayDisplay = document.getElementById("currentDay");
const timeRows = document.getElementsByClassName("textarea");
var currentHour = parseInt(moment().format("H"));

currentDayDisplay.textContent = moment().format("dddd MMMM Do YYYY");

// add text content (blank text fill section) when clicked
function inputText() {
  document.getElementsByClassName("textarea").value = "";
}

function displayGray() {
  var col = document.getElementById("demo");
  col.style.backgroundColor = "#BBB4BD";
}

if (currentHour > timeRows) {
  displayGray;
}

// add gray to already past events
// add color red to present event time
// add green to future times

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }

// store text content to local storage
// when refreshed the saved events persist
