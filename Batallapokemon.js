function obtenerEfectividad(atacante, defensor) {
  atacante = atacante.toLowerCase();
  defensor = defensor.toLowerCase();

  switch (atacante) {
    case "agua":
      if (defensor === "fuego") return 2;
      if (defensor === "planta" || defensor === "electrico") return 0.5;
      break;

    case "fuego":
      if (defensor === "planta") return 2;
      if (defensor === "agua") return 0.5;
      break;

    case "planta":
      if (defensor === "agua") return 2;
      if (defensor === "fuego") return 0.5;
      break;

    case "electrico":
      if (defensor === "agua") return 2;
      if (defensor === "planta") return 0.5;
      break;
  }

  return 1;
}

function mensajeEfectividad(e) {
  if (e === 2) return "¡Es súper efectivo!";
  if (e === 0.5) return "No es muy efectivo...";
  return "Ataque neutral.";
}

function batalla() {
  const tipoAtacante = document.getElementById("atacante").value;
  const tipoDefensor = document.getElementById("defensor").value;
  const ataque = parseInt(document.getElementById("ataque").value);
  const defensa = parseInt(document.getElementById("defensa").value);
  const resultado = document.getElementById("resultado");

  if (ataque < 1 || ataque > 100 || defensa < 1 || defensa > 100) {
    resultado.innerHTML = "Ataque y defensa deben estar entre 1 y 100";
    return;
  }

  const efectividad = obtenerEfectividad(tipoAtacante, tipoDefensor);
  const danio = 50 * (ataque / defensa) * efectividad;

  resultado.innerHTML =
  "<p>Atacante: " + tipoAtacante + "</p>" +
  "<p>Defensor: " + tipoDefensor + "</p>" +
  "<p>" + mensajeEfectividad(efectividad) + "</p>" +
  "<p>Efectividad: x" + efectividad + "</p>" +
  "<p>Daño: " + danio.toFixed(2) + "</p>";
}

document.getElementById("btn-generar").addEventListener("click", generarTablero);