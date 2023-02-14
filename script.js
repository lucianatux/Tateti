let turn = 'X';
let cells = document.querySelectorAll('td');
let resultDisplay = document.querySelector('#result');
let resetButton = document.querySelector('#reset-button');
let currentPlayer = document.querySelector('#current-player');

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if (this.textContent === '') {
      this.textContent = turn;
      switchTurn();
    }
  });
}

resetButton.addEventListener('click', function() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  turn = "X";
  currentPlayer.innerHTML = "Turno del jugador " + turn;
  resultDisplay.innerHTML = "Resultado";
});

function switchTurn() {
  if (turn === 'X') {
    turn = 'O';
    currentPlayer.innerHTML = "Turno del jugador " + turn;
  } else {
    turn = 'X';
    currentPlayer.innerHTML = "Turno del jugador " + turn;
  }
}



document.getElementById('darkmode').addEventListener('click', function(){
    if (document.body.style.background == 'var(--second-color)'){
        document.body.style.background = 'var(--first-color)';
        document.body.style.color = 'var(--second-color)'
    }else{  
        document.body.style.background = 'var(--second-color)';
        document.body.style.color = 'var(--first-color)'
    }
})