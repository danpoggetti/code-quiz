// Var with array and object for questions 
var questions = [{
        title: "What are the first two words every programmer learns to code first?",
        choices: ["A. Hello Planet!", "B. Hello World!", "C. Look out", "D. Silly Goose"],
        answer: "B. Hello World!"
    },
    {
        title: "What does HTML stand for",
        choices: ["A. Hi To My Love", "B. Help To Make Learn", "C. HyperText Markup Language", "D. HyperText Marketing Level"],
        answer: "C. HyperText Markup Language"
    },
    {
        title: "Which of these does NOT run using a computer program?",
        choices: ["A. Bicycle", "B. Car", "C. Space Ship", "D. All of the Above"],
        answer: "A. Bicycle"
    },
    {
        title: "What tag is used to define or add an image to an HTML page?",
        choices: ["A. <div>", "B. <table>", "C. <img>", "D. <code>"],
        answer: "C. <img>"
    },
    {
        title: "Which of these is NOT a programming language?",
        choices: ["A. Java", "B. Python", "C. Ruby", "D. Grape"],
        answer: "D. Grape"
    },

];

// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}