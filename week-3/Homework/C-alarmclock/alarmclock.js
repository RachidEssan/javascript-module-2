function setAlarm() {

// function variables

  let inputTime = document.querySelector("#alarmSet")
  let timeRemaining = document.querySelector("#timeRemaining")
  let inputValue = inputTime.value
  let timer = setInterval(setAlarmCount, 1000)
  inputTime.value = ""

// setup counter function

  function setAlarmCount() {
    timeRemaining.textContent = "Time remaning: " + timeCount(inputValue)
    inputValue -= 1
    if (inputValue <= -1) {
      clearInterval(timer)
      playAlarm()
    }
  }

  setAlarmCount()

// setup counter aruguments

  function timeCount(time) {
    if (time >= 60) {
      let timeParsed = parseInt(time, 10)
      let minutes = Math.floor(timeParsed / 60)
      let seconds = timeParsed - minutes * 60
      return minutes + ":" + seconds
    }
    if (time < 10) {
      return "00:0" + time
    } else if (time <= 59 && time >= 10) {
      return "00:" + time
    } else {
      return "00:" + time;
    }
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;