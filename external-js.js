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
   
