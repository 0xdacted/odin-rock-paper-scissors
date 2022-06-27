function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max) ) + min;
}

function computerPlay() {
   let computerSelection = getRndInteger(1,3); 
   switch(computerSelection) {
    case 1:
        return "The computer chose rock!"
        break;
    case 2:
        return "The computer chose paper!"
        break;
    case 3:
        return "The computer chose Scissors!"
        break;


   }

   
   
}