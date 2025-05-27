const options = ["rock", "paper", "scissors"];

// #1. Generate computer option
function getComputerChoice(){
    return computerGuess = options[Math.floor(Math.random() * 3)];
}


console.log(getComputerChoice);

// #2. Take input from the player
let playerGuess = prompt("Rock, Paper, Scissors! Which one will you choose?");

console.log(playerGuess);

if((playerGuess === "rock" && computerGuess === "paper") ||
    (playerGuess === "paper" && computerGuess === "scissors") ||
    (playerGuess === "scissors" && computerGuess === "rock")){
    alert("I chose " + computerGuess + "! You lose!");
}
else if((computerGuess === "rock" && playerGuess === "paper") ||
    (computerGuess === "paper" && playerGuess === "scissors") ||
    (computerGuess === "scissors" && playerGuess === "rock")){
    alert("Impossible! You beat me!");
}
