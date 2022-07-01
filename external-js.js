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


const results = document.querySelector('.results');
const youWin = document.querySelector('.youWin');
const computerWin = document.querySelector('.computerWin');



function isWinner(userSelection, computerSelection) {
    
    if (userSelection === computerSelection) {

        results.textContent = "you have tied! " + userSelection + " ties to " + computerSelection;
    }

    else if (userSelection === "rock" && computerSelection === "scissors" || userSelection === "scissors" && computerSelection === "paper" || userSelection === "paper" && computerSelection === "rock") 
    {
        ++userWins;
       results.textContent = "you have won! " + userSelection + " beats " + computerSelection;
       
    }

    else {
        ++computerWins;
        results.textContent = "you have lost! " + userSelection + " loses to " + computerSelection;
        
    }
    score();
   }

   function score() {
    if (computerWins === 5) {
        results.textContent = "The computer has won 5 rounds, the computer wins!"
        computerWin.textContent = "The computer has won " + computerWins + " times";

    }
    else if (userWins === 5) {
        results.textContent = "You have won 5 rounds, you win!"
        youWin.textContent = "You have won " + userWins + " times";

    }
    else {
    computerWin.textContent = "The computer has won " + computerWins + " times";
    youWin.textContent = "You have won " + userWins + " times";
    }
   }




