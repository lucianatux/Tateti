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
      checkForWin();
    }
  });
}

function resetButtonClick() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
      }
      turn = "X";
      currentPlayer.innerHTML = "Turno del jugador " + turn;
      resultDisplay.innerHTML = "Resultado";
}

resetButton.addEventListener("click", resetButtonClick);

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
      setTimeout(resetButtonClick, 2000);
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

function showPapelPicado() {
  let container = document.getElementById("papel-picado-container");
  for (let i = 0; i < 50; i++) {
    let papelPicado = document.createElement("div");
    papelPicado.classList.add("papel-picado");
    papelPicado.style.setProperty(
      "--x",
      Math.random() * window.innerWidth + "px"
    );
    papelPicado.style.setProperty(
      "--y",
      Math.random() * window.innerHeight + "px"
    );
    container.appendChild(papelPicado);
  }
}
