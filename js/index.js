var vez = 1;
var vencedor = "";

function restart() {
  let table = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i of table) {
    document.getElementById("casa" + i).innerHTML = "💠";
  };

  vez = 1;
  vencedor = "";

  let result = document.querySelector("#response");
  result.innerHTML = "é a vez do jogador 1 (❌)";
  
  let stopEvent = document.querySelector('table');
  stopEvent.style = "pointer-events: all;";
};

function verificarCasas(a, b, c) {
  let casaA = document.getElementById("casa"+a);
  let casaB = document.getElementById("casa"+b);
  let casaC = document.getElementById("casa"+c);

  let cttA = casaA.innerHTML;
  let cttB = casaB.innerHTML;
  let cttC = casaC.innerHTML;

  if ((cttA == cttB) && (cttB == cttC) && (cttA != '💠') && (cttB != '💠') && (cttC != '💠')) {
    if (cttA == "❌") {
      vencedor = "1";
      return true;
    } else if (cttA == "⭕") {
      vencedor = "2";
      return true;
    }
  } else {
    return false;
  };
};

function jdv(id) {
  let bg = document.querySelector(id);
  let pass = document.querySelector('#response');
  if (bg.innerHTML == "💠") {
    if (vez == 1) {
      bg.innerHTML = "❌";
      pass.innerHTML = "é a vez do jogador 2 (⭕)";
    } else {
      bg.innerHTML = "⭕";
      pass.innerHTML = "é a vez do jogador 1 (❌)";
    };
    vez = (vez == 1 ? 2 : 1);
    verificarFim();
  };
};

function verificarFim() {
  if( verificarCasas(1, 2, 3) || verificarCasas(4, 5, 6) || verificarCasas(7, 8, 9) ||
      verificarCasas(1, 4, 7) || verificarCasas(2, 5, 8) || verificarCasas(3, 6, 9) ||
      verificarCasas(1, 5, 9) || verificarCasas(3, 5, 7)
      ) {
        let result = document.querySelector("#response");
        result.innerHTML = "O jogador <a style='color: lightgreen;'>" + vencedor + "</a> venceu!";
        let stopEvent = document.querySelector('table');
        stopEvent.style = "pointer-events: none;";
  };
};
