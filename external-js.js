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

function playRound() {
    let computerChoice = computerPlay();
    let userChoice = userSelection();
    
    if (computerChoice === userChoice) {

        console.log("you have tied! " + userChoice + " ties to " + computerChoice);
    }

    else if (computerChoice === "scissors" && userChoice === "rock" || computerChoice === "rock" && userChoice === "paper" 
    || computerChoice === "paper" && userChoice === "scissors")
    {
        console.log("you have won! " + userChoice + " beats " + computerChoice);
       
    }

    else {
        console.log("you have lost! " + userChoice + " loses to " + computerChoice);
        
    }
}

function userSelection () {
if (selectRock) {
    return "rock"
}

else if (selectPaper) {
    return "paper"
}
else {
    return "scissors"
}

}

const selectRock = document.querySelector("#rock-btn");
selectRock.addEventListener('click', playRound);

const selectPaper = document.querySelector("#paper-btn");
selectPaper.addEventListener('click', playRound);


const selectScissors = document.querySelector("#scissors-btn");
selectScissors.addEventListener('click', playRound);









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
