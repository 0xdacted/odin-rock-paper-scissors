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

    if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors")   
    {
        return "you have tied! " + playerSelection + " ties to " + computerSelection;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") 
    {
        return "you have won! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection.textContent === "scissors") 
    {
        return "you have lost! " + playerSelection + " loses to " + computerSelection;
    }

    else {
    return "error";
}


}
