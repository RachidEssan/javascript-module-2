const moviePosters = [
    "https://collider.com/wp-content/uploads/2016/04/martian-poster.jpg",
    "https://collider.com/wp-content/uploads/2016/04/127-hours-poster.jpg",
    "https://collider.com/wp-content/uploads/2017/06/us-poster.jpg",
    "https://collider.com/wp-content/uploads/2016/04/conjuring-poster.jpg",
    "https://collider.com/wp-content/uploads/2016/04/kingsman-poster.jpg",
    "https://collider.com/wp-content/uploads/2016/04/black-swan-poster.jpg",
    "https://collider.com/wp-content/uploads/2017/06/blackkklansman-poster.jpg",
    "https://collider.com/wp-content/uploads/2017/06/baby-driver-poster.jpg",
    "https://collider.com/wp-content/uploads/2017/06/mother-poster.jpg",
    "https://collider.com/wp-content/uploads/2016/04/hunger-games-catching-fire-poster.jpg",
]

const background = document.getElementById("background")
const autoBackBtn = document.getElementById("auto-back-btn")
const backBtn = document.getElementById("back-btn")
const stopBtn = document.getElementById("stop-btn")
const forwardBtn = document.getElementById("forward-btn")
const autoForwardBtn = document.getElementById("auto-forward-btn")
const mainImg = document.getElementById("poster")
let index = 0
let intervalId = null

autoBackBtn.addEventListener("click", autoBackBtnEvent)
backBtn.addEventListener("click", backBtnEvent)  
stopBtn.addEventListener("click", stopBtnEvent)  
forwardBtn.addEventListener("click", forwardBtnEvent)  
autoForwardBtn.addEventListener("click", autoForwardBtnEvent)

function showPoster() {
    mainImg.src = moviePosters[index]
    document.body.style.backgroundImage = 'url(' + moviePosters[index] + ')'
}

showPoster()

function autoBackBtnEvent() {
    clearInterval(intervalId)
    intervalId = setInterval(backBtnEvent, 1000)
}

function backBtnEvent() {
    index -= 1
    if (index < 0) {
        index = moviePosters.length - 1 
    }
    showPoster()
}

function stopBtnEvent() {
    clearInterval(intervalId)
}

function forwardBtnEvent() {
    index += 1
    if (index === moviePosters.length) {
        index = 0
    }
    showPoster()
}

function autoForwardBtnEvent() {
    clearInterval(intervalId)
    intervalId = setInterval(forwardBtnEvent, 1000)
}

