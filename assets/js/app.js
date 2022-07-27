var currentDayDisplay = document.getElementById("currentDay");
var timeBlocks = document.querySelectorAll(".time-block");
var storageInput = document.querySelector("textarea"); // selectorAll??
var button = document.querySelectorAll(".saveBtn"); // selectorAll??
var container = document.querySelector(".container");

document.querySelector("#text-9").textContent = localStorage.getItem("0900");
document.querySelector("#text-10").textContent = localStorage.getItem("1000");
document.querySelector("#text-11").textContent = localStorage.getItem("1100");
document.querySelector("#text-12").textContent = localStorage.getItem("1200");
document.querySelector("#text-1").textContent = localStorage.getItem("1300");
document.querySelector("#text-2").textContent = localStorage.getItem("1400");
document.querySelector("#text-3").textContent = localStorage.getItem("1500");
document.querySelector("#text-4").textContent = localStorage.getItem("1600");
document.querySelector("#text-5").textContent = localStorage.getItem("1700");

// add current date to jumbotron (DDDD, Month, DD)
currentDayDisplay.textContent = moment().format("dddd MMMM Do YYYY");
var currentTime = moment().format("HH[00]");

for (let index = 0; index < button.length; index++) {
  const element = button[index];
  var buttonElId = element.id;
  var textAreaEl = element.previousElementSibling;
  if (currentTime > buttonElId) {
    textAreaEl.classList.add("past");
  } else if (currentTime < buttonElId) {
    textAreaEl.classList.add("future");
  } else {
    textAreaEl.classList.add("present");
  }
}
// add text content (blank text fill section) when clicked
function inputText() {
  document.getElementsByClassName("textarea").value = "";
}

// for (let index = 0; index < timeBlocks.length; index++) {
//   const element = timeBlocks[index];
//   var timeBlockHour = element.querySelector(".hour");
//   console.log(timeBlockHour.textContent);
//   var currentTime = moment(timeBlockHour.textContent, "hhA");
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

var saveToLocalStorage = (event) => {
  if (event.path[0].textContent == "💾") {
    var textAreaValue = event.path[0].previousElementSibling.value;
    var buttonId = event.path[0].id;
    localStorage.setItem(buttonId, textAreaValue);
  }
};

container.addEventListener("click", saveToLocalStorage);
