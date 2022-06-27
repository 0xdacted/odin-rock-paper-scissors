let playerWins = 0;
let computerWins = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max) ) + min;
}

function computerPlay() {
   let computerSelection = getRndInteger(1,3); 
   switch(computerSelection) {
    case 1:
        return "rock"
        break;
    case 2:
        return "paper"
        break;
    case 3:
        return "scissors"
        break;
   }
}

function playerPlay() {
    let playerSelection = prompt("Please type rock, paper, or scissors").toLowerCase();
    switch(playerSelection) {
        case playerSelection.textContent = "rock":
            return "rock"
            break;
        
        case playerSelection.textContent = "paper":
            return "paper"
            break;
        
        case playerSelection.textContent = "scissors":
            return "scissors"
            break;

        default:
            return "Please type rock, paper, or scissors"
    }
}

function playRound() {
   
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {

        return "you have tied! " + playerSelection + " ties to " + computerSelection;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") 
    {
        ++playerWins;
        return "you have won! " + playerSelection + " beats " + computerSelection + ". You have won " + playerWins + " time(s)";
       
    }

    else {
        ++computerWins;
        return "you have lost! " + playerSelection + " loses to " + computerSelection + ". You have lost " + computerWins + " time(s)";
        
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        let round = playRound();
        console.log(round);
       }
    
    if (playerWins > computerWins) {
        return "You have beat the computer!";
    }

    else if (playerWins < computerWins) {
        return "You have lost to the computer!";
    }
    
    else if (playerWins === computerWins) {
        return "You have tied the computer!";
    }
}
