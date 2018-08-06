// variables needed:
var losses = 0;
var wins = 0;
var numGuess = 9;
var guessesLeft = 9;

//Array of all options for computer's choice
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//random choice from array - Computer's guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

//when user preccess key - function is run
document.onkeyup = function (event) {
    // which key was pressed
    var userGuesses = event.key;
    console.log(userGuesses);


    if (userGuesses === computerGuess) {
        wins++;
        var userText = document.getElementById("wins-text");
        userText.textContent = wins;
    } else {
        losses++;
        var userText = document.getElementById("losses-text");
        userText.textContent = losses;
    }

    // new variable for losses and wins total to match with max counts for 1 round/game
    var counting = losses + wins;
    console.log(counting);

    if (counting === numGuess) {
        wins = 0;
        losses = 0;
        alert("No more choices! You lost! Try again?")
    }
    console.log(wins);
    console.log(losses);

    var guessesLeft = numGuess - 1;
    console.log(numGuess);

}