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

// Begins timer onclick, prompts a display to user
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

// Will display questions and choices to page: 
function render(questionIndex) {
    // Clears data if any existed 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops section
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New questions for each choice
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// Creates what happens if answer is correct or incorrect with penalty and display
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Yes! The answer is:  " + questions[questionIndex].answer;
            // Correct condition
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Sorry! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "Congratualations, the quiz is done!" + " " + "You got " + score + "/" + questions.length + " correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}

