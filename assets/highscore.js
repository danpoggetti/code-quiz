var highScore = document.querySelector("#HighScores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
var finalScore = document.querySelector("#finalScore")

// Here's an eventListener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Adds highscore to local storage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(localStorage.getItem("allScores"));
console.log("all scores: ", allScores)

if (allScores !== null) {
    console.log("I am Here")
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// Here's the eventListner to go back to index.html
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});