let turn = "X";
let cells = document.querySelectorAll("td");
let resultDisplay = document.querySelector("#result");
let resetButton = document.querySelector("#reset-button");
let currentPlayer = document.querySelector("#current-player");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (this.textContent === "") {
      this.textContent = turn;
      switchTurn();
    }
  });
}

resetButton.addEventListener("click", function () {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  turn = "X";
  currentPlayer.innerHTML = "Turno del jugador " + turn;
  resultDisplay.innerHTML = "Resultado";
});

function switchTurn() {
  if (turn === "X") {
    turn = "O";
    currentPlayer.innerHTML = "Turno del jugador " + turn;
  } else {
    turn = "X";
    currentPlayer.innerHTML = "Turno del jugador " + turn;
  }
}

function checkForWin() {
  let cellValues = [];
  for (let i = 0; i < cells.length; i++) {
    cellValues.push(cells[i].textContent);
  }

  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    let a = winConditions[i][0];
    let b = winConditions[i][1];
    let c = winConditions[i][2];
    if (
      cellValues[a] !== "" &&
      cellValues[a] === cellValues[b] &&
      cellValues[b] === cellValues[c]
    ) {
      switchTurn();
      resultDisplay.textContent = "¡" + turn + " ganó!";
      showPapelPicado();
      return true;
    }
  }
}

document.getElementById("darkmode").addEventListener("click", function () {
  if (document.body.style.background == "var(--second-color)") {
    document.body.style.background = "var(--first-color)";
    document.body.style.color = "var(--second-color)";
  } else {
    document.body.style.background = "var(--second-color)";
    document.body.style.color = "var(--first-color)";
  }
});
