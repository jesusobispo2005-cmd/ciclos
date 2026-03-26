const btnAgregar = document.getElementById("btnAgregar");
const inpTxt = document.getElementById("inpTxt");
const btnTrash = document.getElementById("btnTrash");
const selObject = document.getElementById("selObject");
const lista = document.getElementById("lista");
let arrayObj = [];
let arrayLista = [];

btnAgregar.addEventListener("click", () => {
  let newItem = { name: "", type: "" };
  newItem.name = inpTxt.value;
  newItem.type = selObject.options[selObject.selectedIndex].textContent;
  arrayObj.push(newItem);
  actualizarLista(newItem);
});

function actualizarLista(nuevoItem) {
  borrarLista();
  crearLista();
}

btnTrash.addEventListener("click", () => {
  for (let i = arrayObj.length - 1; i >= 0; i--) {
    if (arrayObj[i].name.length < 3) {
      const objToDelete = arrayLista[i];
      arrayLista.splice(i, 1);
      arrayObj.splice(i, 1);
      objToDelete.remove();
      console.log(arrayLista);
      console.log(arrayObj);
    }
  }
});

function crearLista() {
  arrayObj.forEach((element) => {
    let nuevoObjeto = document.createElement("li");
    nuevoObjeto.textContent = element.name;
    switch (element.type) {
      case "Pocion":
        nuevoObjeto.style.backgroundColor = "blue";
        break;
      case "Espada":
        nuevoObjeto.style.backgroundColor = "red";
        break;
      case "Escudo":
        nuevoObjeto.style.backgroundColor = "green";
        break;

      default:
        nuevoObjeto.style.backgroundColor = "yellow";
        break;
    }
    lista.appendChild(nuevoObjeto);
    arrayLista.push(nuevoObjeto);
  });
}

function borrarLista() {
  for (let i = arrayLista.length - 1; i >= 0; i--) {
    const objToDelete = arrayLista[i];
    arrayLista.splice(i, 1);
    objToDelete.remove();
  }
}
