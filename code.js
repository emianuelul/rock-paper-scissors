const options = ["rock", "paper", "scissors"];

let playerChoice;

const result = document.querySelector("#result")

function getComputerChoice(){
    return computerGuess = options[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;

function updateScores(){
    const playerSc = document.querySelector("#playerScore");
    const computerSc = document.querySelector("#computerScore");
    const playerLabel = document.querySelector(".name.player");
    const computerLabel = document.querySelector(".name.computer");
    
    playerSc.textContent = playerScore;
    computerSc.textContent = computerScore;

    if(playerScore >= 5){
        playerLabel.textContent = "Player -- Player Wins!";
    }
    else if(computerScore >= 5){
        computerLabel.textContent = "Computer -- Computer Wins!";
    }
}

function playRound(playerChoice, computerChoice){    
    if((playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")){
            computerScore++;
            result.textContent = "Computer won this round!"
    }
    else if((computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")){
            playerScore++;
            result.textContent = "Player won this round!"
    }
    else if(computerChoice === playerChoice){
            console.log("Draw");
            result.textContent = "Draw!"
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

