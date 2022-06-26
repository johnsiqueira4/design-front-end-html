let alunos = ["Jonatha", "Breno", "Rafael", "José", "Sofia", "Maria"];

// window.setTimeout(carregaAlunos, 5000);

window.setTimeout(function () {
  carregaAlunos();
}, 3000);

// window.setInterval(function () {
//   carregaAlunos();
// }, 3000);

function carregaAlunos() {
  // let objetosAlunos = document.querySelectorAll("main ul li");
  // objetosAlunos.forEach(function (item, index, array) {
  alunos.forEach(function (item, index, array) {
    let liNova = document.createElement("li");
    let nomeAluno = document.createTextNode(alunos[index]);
    liNova.appendChild(nomeAluno);

    document.querySelector("main ul").appendChild(liNova);

    //   if (index <= 1) {
    //     objetosAlunos[index].innerHTML =
    //       index + 1 + (index === 0 ? "st: " : "nd: ") + alunos[index];
    //     objetosAlunos[index].style.listStyle = "none";
    //     index === 0
    //       ? (objetosAlunos[index].style.background = "#00ff00")
    //       : (objetosAlunos[index].style.background = "yellow");
    //     objetosAlunos[index].style.fontSize = "40px";
    //     objetosAlunos[index].style.fontWeight = "700";
    //   } else {
    //     objetosAlunos[index].innerHTML = index + 1 + "th: " + alunos[index];
    //     objetosAlunos[index].style.listStyle = "none";

    //     index % 2 === 0
    //       ? (objetosAlunos[index].style.background = "#ccc")
    //       : undefined;
    //   }
  });
}
