//Create a Function that is Computer Play
//Computer Play will produce random (Rock, Paper, Scissors)

function computerPlay() {
    var choices = ["Rock", "Paper", "Scissors"];
    var computerSelection = choices[(Math.floor(Math.random() * 3))];
    return computerSelection;
}


//Function that accepts two inputs for the player and the output is the winner for the round
//The inout should be case sensitive
function playRound(playerSelection, computerSelection) {
    var output;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        output = "DRAW"
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        output = "You lose (Paper beats Rock)"
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        output = "You win (Rock beats Scissors)"
    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        output = "DRAW"
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        output = "You win (Paper beats Rock)"
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        output = "You lose (Scissors beats Paper)"
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        output = "DRAW"
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        output = "You win (Scissors beats Paper)"
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        output = "You lose (Rock beats Scissors)"
    }
    else {
        output = "Invalid Input";
    }

    return output;
}




//Create an add event listener to each button
//get the value of the button
//Change the Display for Computer 
//Store the result of the game per Round
// Store for winner-player
// Store for ties
// Store for winner computer
//Announce the winner of the game once someone reaches at 5 points
//There should be a counter for the variable to know that it is 5 points
var button = document.querySelectorAll('button');
var displayPlayer = document.querySelector("#playerChoice");
var displayComputer = document.querySelector("#computerChoice");
var counter = 1;
var winsPlayer = document.querySelector(".wins-player span");
var ties = document.querySelector(".ties span");
var winsComputer = document.querySelector(".wins-computer span");
var round = document.querySelector(".round h1");
var winnerDisplay = document.querySelector(".winner h1");
button.forEach(playerChoice => {
    playerChoice.addEventListener('click', (e) => {
        counter += 1;
        round.innerText = `ROUND ${counter}`
        var computerSelection = computerPlay();
        displayPlayer.innerText = playerChoice.value;
        displayComputer.innerText = computerSelection;
        var output = playRound(playerChoice.value, computerSelection);
        game(output);
        winner();
    });
});


function game(output) {
    if (output.toLowerCase().search("you win") != -1) {
        winsPlayer.innerText = parseInt(winsPlayer.innerText) + 1;
    } else if (output.toLowerCase().search("you lose") != -1) {
        winsComputer.innerText = parseInt(winsComputer.innerText) + 1;
    }
    else {
        ties.innerText = parseInt(ties.innerText) + 1;
    }
}

function winner() {

    if (parseInt(winsPlayer.innerText) === 5) {
        winnerDisplay.innerHTML = "<h1>The winner is <em>You</em></h1>";
        reset();
    } else if (parseInt(winsComputer.innerText) === 5) {
        winnerDisplay.innerHTML = "<h1>The winner is the <em>Computer</em></h1>"
        reset();
    }
    else {
        winnerDisplay.innerHTML = ""
    }


}

function reset() {
    winsPlayer.innerText = "-";;
    winsComputer.innerText = "-";;
    ties.innerText = "-";
    round.innerText = `ROUND -`
}