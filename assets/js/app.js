// add current date to jumbotron (DDDD, Month, DD)
var currentDayDisplay = document.getElementById("currentDay");
var hourPast;
var hourCurrent;
var hourFuture;

currentDayDisplay.textContent = moment().format("dddd MMMM Do YYYY");

// add text content (blank text fill section) when clicked
function inputText() {
  document.getElementsByClassName("textarea").value = "";
}
// add gray to already past events

// add color red to present event time
// add green to future times
// store text content to local storage
// when refreshed the saved events persist
