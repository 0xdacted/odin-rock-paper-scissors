let userWins = 0;
let computerWins = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max) ) + min;
}

function computerPlay() {
   let computerChoice = getRndInteger(1,3); 
   switch(computerChoice) {
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

var buttons = document.querySelectorAll("[data-selection]");

const BUTTONS = [
"rock", "paper", "scissors"
]



buttons.forEach(button => { button.addEventListener('click', e => {
    const select = button.dataset.selection
   const userSelection =  BUTTONS.find(button => button === select)
    let computerSelection = computerPlay()
    isWinner(userSelection, computerSelection)
})
})

function isWinner(userSelection, computerSelection) {
    
    if (userSelection === computerSelection) {

        console.log("you have tied! " + userSelection + " ties to " + computerSelection);
    }

    else if (userSelection === "rock" && computerSelection === "scissors" || userSelection === "scissors" && computerSelection === "paper" || userSelection === "paper" && computerSelection === "rock") 
    {
        ++userWins;
        console.log("you have won! " + userSelection + " beats " + computerSelection + ". You have won " + userWins + " time(s)");
       
    }

    else {
        ++computerWins;
        console.log("you have lost! " + userSelection + " loses to " + computerSelection + ". You have lost " + computerWins + " time(s)");
        
    }
   }











//function game() {
    
//   for (let i = 0; i < 5; i++) {
//        let round = playRound();
  //      console.log(round);
    //   }
    
 //   if (playerWins > computerWins) {
//        return "You have beat the computer!";
//    }

//    else if (playerWins < computerWins) {
//        return "You have lost to the computer!";
//    }
    
//    else if (playerWins === computerWins) {
//        return "You have tied the computer!";
 //   }
//}
