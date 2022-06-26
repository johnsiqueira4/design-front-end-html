var frutas = [
  "Maçã",
  "Banana",
  "Abacate",
  "Abacaxi",
  "Jambo",
  "Carambola",
  "Uva",
  "Morango",
];

frutas.forEach(function (item, indice, array) {
  if (indice === 0) {
    document.getElementById("fruta1").innerHTML += "( " + item + " | ";
  } else if (indice === array.length - 1) {
    document.getElementById("fruta1").innerHTML += item + " ) ";
  } else {
    document.getElementById("fruta1").innerHTML += item + " | ";
  }
});
