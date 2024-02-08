function whoWon(player1,player2){

   if (player1 === 'rock' && player2 === 'rock'){
     return 'TIE!';
   }

   if (player1 === 'scissors' && player2 === 'scissors'){
    return 'TIE!';
  }

  if (player1 === 'paper' && player2 === 'paper'){
    return 'TIE!';
  }
   
  if (player1 === 'rock' && player2 === 'paper'){
    return 'Player 2 wins!';
  }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }

   if (player1 === 'rock' && player2 === 'scissors'){
    return 'Player 1 wins!';
  }

  if (player1 === 'paper' && player2 === 'rock'){
    return 'Player 1 wins!';
  }
  
  if (player1 === 'scissors' && player2 === 'paper'){
    return 'Player 1 wins!';
  }

  return 'Invalid choice!';
}

 module.exports = whoWon;