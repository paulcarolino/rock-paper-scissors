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

//Function called game
//Up to 5 round game
//Keeps the score
//Reports the winner and loser
function game() {
    var player = 0;
    var computer = 0;
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("What is your pick (Rock, Paper, Scissors): ");
        var output = playRound(playerSelection, computerPlay());
        alert(output);
        if (output.toLowerCase().search("you win") != -1) {
            player += 1;
        } else if (output.toLowerCase().search("you lose") != -1) {
            computer += 1;
        }
    }
    if (player > computer) {
        console.log(`You win the score is Man: ${player} vs Computer ${computer}`);
    }
    else if (player < computer) {
        console.log(`You lose the score is Man: ${player} vs Computer ${computer}`);
    } else {
        console.log("Draw");
    }
}

game();