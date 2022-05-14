/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
const arrayOfColors = ["purple", "pink", "green", "red", "gray"]
const background = document.querySelector("body")
let colorIndex = 0

// Task 1

function changeBackground() {
  background.style.backgroundColor = arrayOfColors[colorIndex]
}

setTimeout(changeBackground, 5000)

// Task 2

function changeBackgroundAgain() {
  colorIndex += 1
    if (colorIndex === arrayOfColors.length) {
        colorIndex = 0
    }
  changeBackground()
}

setInterval(changeBackgroundAgain, 5000);



