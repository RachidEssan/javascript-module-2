// assigned variables for part 1

const jumbotron = document.querySelector(".jumbotron")
const donate = document.getElementById("donateBikeBtn")
const volunteer = document.getElementById("volunteerBtn")

// blue button

const blueChanges = document.getElementById("blueBtn")


blueChanges.addEventListener("click", function () {
    jumbotron.style.backgroundColor = "#588fbd";
    donate.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "black";
    volunteer.style.color = "white";
})

// orange button

const orangeChanges = document.getElementById("orangeBtn")

orangeChanges.addEventListener("click", function () {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donate.style.backgroundColor = "#5751fd";
    volunteer.style.backgroundColor = "#31b0d5";
    volunteer.style.color = "white";
})

//green button

const greenChanges = document.getElementById("greenBtn")

greenChanges.addEventListener("click", function () {
    jumbotron.style.backgroundColor = "#87ca8a";
    donate.style.backgroundColor = "black";
    volunteer.style.backgroundColor = "#8c9c08";
})

// assigned variables for part 2

const submitBtn = document.getElementById("submitBtn")
const emailArea = document.getElementById("exampleInputEmail1")
const nameArea = document.getElementById("example-text-input")
const descriptionArea = document.getElementById("exampleTextarea")

// submit button

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (emailArea.length === 0 ||
        emailArea.value.includes("@") === false ||
        nameArea.length === 0 ||
        descriptionArea.length === 0) {
        emailArea.style.backgroundColor = "red"
        nameArea.style.backgroundColor = "red"
        descriptionArea.style.backgroundColor = "red"
    } else {
        alert("Thank you for filling out the form!")
        emailArea.value === ""
        nameArea.value === ""
        descriptionArea.value === ""
    }

})