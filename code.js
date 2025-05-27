const options = ["rock", "paper", "scissors"];

// #1. Generate computer option
function getComputerChoice(){
    return computerGuess = options[Math.floor(Math.random() * 3)];
}
// #2. Take input from the player
function getHumanChoice(){
    return prompt("Rock, Paper, Scissors! Which one will you choose?");
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice){    
    playerChoice = playerChoice.toLowerCase();

    if((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")){
        alert("I chose " + computerChoice + "! You lose!");
        computerScore++;
    }
    else if((computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")){
        alert("Impossible! You beat me!");
        playerScore++;
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = getHumanChoice();

playRound(playerSelection, computerSelection);
console.log("Player: " + playerScore + " Computer: " + computerScore);
