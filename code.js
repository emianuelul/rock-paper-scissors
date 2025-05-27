const options = ["rock", "paper", "scissors"];

const number = parseInt(prompt("How many rounds of Rock, Paper, Scissors do you want to play?"));

playGame(number);

function getComputerChoice(){
    return computerGuess = options[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    return prompt("Rock, Paper, Scissors! Which one will you choose?");
}

function playGame(roundCount){
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerChoice, computerChoice){    
        playerChoice = playerChoice.toLowerCase();

        if((playerChoice === "rock" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "rock")){
                computerScore++;
                alert("Player: " + playerScore + " Computer: " + computerScore +  "\n" + "I chose " + computerChoice + "! You lose!");
        }
        else if((computerChoice === "rock" && playerChoice === "paper") ||
            (computerChoice === "paper" && playerChoice === "scissors") ||
            (computerChoice === "scissors" && playerChoice === "rock")){
                playerScore++;
                alert("Player: " + playerScore + " Computer: " + computerScore +  "\n" + "Impossible! You beat me!");
        }
        else if(computerChoice === playerChoice){
                alert("Player: " + playerScore + " Computer: " + computerScore +  "\n" + "Draw!");
        }
    }

    for(i = 0; i < roundCount; i++){
        console.log("Round " + i);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        const playerSelection = getHumanChoice();
        playRound(playerSelection, computerSelection);
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }

    if(playerScore > computerScore){
        alert("You beat me fair and square.");
    }
    else{
        alert("Better luck next time!");
    }
}