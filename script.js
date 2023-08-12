function getComputerChoice(){
      let result;
      let option;
      for(let i = 0; i < 3; i++){
            option = Math.floor(Math.random() * 3)
            
      }

      if(option === 0){
            result = "rock"
      }
      else if(option === 1){
            result = "paper"
      }else{
            result = "scissors"
      }
      return result;
}

function playRound(playerSelection, computerSelection){
      let result;
      let player = playerSelection.toLowerCase()
      let computer = computerSelection.toLowerCase()
      if(player === computer){
            result = `You chose "${player}"
                      Computer also chose "${computer}"
                      It is a DRAW`
      }
      else if((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "rock")){
            result = `You WIN ${player} beats ${computer}`
      }else{
            result = `You Lose ${computer} beats ${player}`
      }

      return result;

}



function game(){
      let player, computer, gameBegins;
      let scorePlayer = 0, scoreComputer = 0;
      let winner;
      for(let i = 1; i <= 5; i++){
      
      player = prompt("Enter either rock,  paper. or scissors. Inputs are caseinsensitive")
      if(player === null){
            break;
      }
      computer = getComputerChoice()
       gameBegins = playRound(player, computer)
       if(gameBegins.includes("You Lose")){
            scoreComputer++
       }else if(gameBegins.includes("You WIN")){
            scorePlayer++;
       }
       alert(`${gameBegins} 
      Your current score = ${scorePlayer}
      Computer current score = ${scoreComputer}`)
       
      }
      if(scorePlayer > scoreComputer){
            winner = `You WIN with a total score of: ${scorePlayer}\nVS\nComputer total score of : ${scoreComputer}`
      }else if(scorePlayer < scoreComputer){
         winner = `Computer WIN with a total score of : ${scoreComputer}\nVS\nYour total score of:  ${scorePlayer}`   
      }else{
            winner = `Computer total score = ${scoreComputer}
            Your total score = ${scorePlayer}
            DRAW no WINNER`
      }
   alert(winner)
   return winner;
}

console.log(game())