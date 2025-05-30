const options = ["rock", "paper", "scissors"];

let playerChoice;

const computerDialogue = document.querySelector("#computerDialogue");

function getComputerChoice(){
    return computerGuess = options[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;

function updateScores(){
    const playerSc = document.querySelector("#playerScore");
    const computerSc = document.querySelector("#computerScore");

    playerSc.textContent = "Player Score: " + playerScore;
    computerSc.textContent = "Computer Score: " + computerScore;

    if(playerScore >= 5){
        playerSc.textContent += " -- Player Wins!";
    }
    else if(computerScore >= 5){
        computerSc.textContent += " -- Computer Wins!";
    }
}

function playRound(playerChoice, computerChoice){    
    if((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")){
            computerScore++;
            computerDialogue.textContent = "I win!";
    }
    else if((computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")){
            playerScore++;
            computerDialogue.textContent = "You beat me!";
    }
    else if(computerChoice === playerChoice){
            computerDialogue.textContent = "Draw!";
    }

    updateScores();
}

const optSection = document.querySelector(".options");

optSection.addEventListener('click', (e) =>{
    switch(e.target.id){
        case "rock":{
            playerChoice = "rock";
            break;
        }
        case "paper":{
            playerChoice = "paper";
            break;
        }
        case "scissors":{
            playerChoice = "scissors";
            break;
        }
        default:
            break;
    }

    playRound(playerChoice, getComputerChoice());
})

