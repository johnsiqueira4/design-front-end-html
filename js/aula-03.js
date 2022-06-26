let alunos = ["Jonatha", "Breno", "Rafael", "José", "Sofia", "Maria"];

let objetosAlunos = document.querySelectorAll("main ul li");

objetosAlunos.forEach(function (item, index, array) {
  if (index <= 1) {
    objetosAlunos[index].innerHTML =
      index + 1 + (index === 0 ? "st: " : "nd: ") + alunos[index];
    objetosAlunos[index].style.listStyle = "none";
    index === 0
      ? (objetosAlunos[index].style.background = "#00ff00")
      : (objetosAlunos[index].style.background = "yellow");
    objetosAlunos[index].style.fontSize = "40px";
    objetosAlunos[index].style.fontWeight = "700";
  } else {
    objetosAlunos[index].innerHTML = index + 1 + "th: " + alunos[index];
    objetosAlunos[index].style.listStyle = "none";

    index % 2 === 0
      ? (objetosAlunos[index].style.background = "#ccc")
      : undefined;
  }
});
