function generarTableroLleno() {
  let tablero = [];
  let resultado;

  // Generar tablero lleno hasta que sea válido
  do {
    // Crear array de 9 elementos con X y O
    let piezas;
    if (Math.random() < 0.5) {
      piezas = ["X","X","X","X","X","O","O","O","O"];
    } else {
      piezas = ["O","O","O","O","O","X","X","X","X"];
    }

    // Mezclar aleatoriamente
    piezas = piezas.sort(() => Math.random() - 0.5);

    // Convertir a matriz 3x3
    tablero = [];
    for (let i = 0; i < 3; i++) {
      tablero.push(piezas.slice(i*3, i*3 + 3));
    }

    resultado = analizarMatriz(tablero);
  } while (resultado === "Inválido"); // Repetir si hay errores

  mostrarTablero(tablero);
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function mostrarTablero(tablero) {
  const pre = document.getElementById("tablero");
  pre.innerText = tablero
    .map(fila => fila.join(" | "))
    .join("\n---------\n");
}

function analizarMatriz(tablero) {
  const ganador = (player) => {
    for (let i = 0; i < 3; i++) {
      if (tablero[i].every(c => c === player)) return true; // fila
      if (tablero[0][i] === player && tablero[1][i] === player && tablero[2][i] === player) return true; // columna
    }
    if (tablero[0][0] === player && tablero[1][1] === player && tablero[2][2] === player) return true; // diagonal \
    if (tablero[0][2] === player && tablero[1][1] === player && tablero[2][0] === player) return true; // diagonal /
    return false;
  }

  const xGana = ganador("X");
  const oGana = ganador("O");

  if (xGana && oGana) return "Inválido"; // no pueden ganar ambos
  if (xGana) return "X";
  if (oGana) return "O";

  // Todas las casillas están llenas => empate
  return "Empate";
}

// Inicializar y asignar botón
window.addEventListener("DOMContentLoaded", () => {
  generarTableroLleno();
  document.getElementById("btn-generar").addEventListener("click", generarTableroLleno);
});