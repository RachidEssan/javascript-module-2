/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const getAllPElements = document.querySelectorAll('p');
console.log(getAllPElements);

const getFirstDiv = document.querySelector('.site-header');
console.log(getFirstDiv);

const getJumbotronText = document.getElementById('jumbotron-text')
console.log(getJumbotronText)

const primaryContent = document.querySelector('.primary-content');
const primaryAll = primaryContent.querySelectorAll("p");
console.log(primaryAll);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertButton = document.getElementById("alertBtn")

alertButton.addEventListener("click", function () {
    alert("Thanks for visiting Bikes for Refugees!");
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeColorBtn = document.getElementById("bgrChangeBtn")

changeColorBtn.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "grey"
})


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addText = document.getElementById("addTextBtn")

addText.addEventListener("click", function (event) {
    let p = document.createElement("p");
    p.innerHTML = "LEARN MORE";
    document.getElementById("addTextBtn").appendChild(p);
})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinks = document.getElementById("largerLinksBtn")
let links = document.querySelectorAll("a")

largerLinks.addEventListener("click", function (event) {
    for (var i = 0; i < links.length; i++) {
        if (links[i].style.fontSize === "1em") {
            links[i].style.fontSize = "x-large"
        } else {
            links[i].style.fontSize = "1em"
        }
    }
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addBtn = document.getElementById("addArticleBtn")
const inputField = document.getElementById("inputField")

addBtn.addEventListener("click", function () {
    let p = document.createElement("p");
    p.classList.add("article-lead")
    let article = document.createElement("article")
    article.classList.add("article")
    p.innerHTML = inputField.value;
    article.appendChild(p)
    document.getElementById("mainArticles").appendChild(article)
    
})



/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const changeColorBtnAgain = document.getElementById("bgrChangeBtn")
const colors = ["grey", "brown", "purple", "red", "yellow"]
let i = 0

changeColorBtn.addEventListener("click", function (event) {
    event.target.style.backgroundColor = colors[i];
    if (i === 4) {
        return i = 0
    } else {
        i++
    }
})