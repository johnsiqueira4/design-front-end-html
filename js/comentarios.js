let comentarios = [];
comentarios[0] = "Não concordo - Fulano de tal";
comentarios[1] = "Espero que as ligações de São Paulo acabem - Sicrano";
comentarios[2] = "Isso tudo é politicagem - Daniel Silva";
comentarios[3] = "Vem em boa hora - Marcela Albertin";
comentarios[4] = "Trabalho em uma empresa que foi multada - Abelardo Tite";

function mostrarComentarios() {
  let ulComentarios = document.querySelector("article section ul");

  comentarios.forEach(function (item, index, array) {
    let liNovoComentario = document.createElement("li");
    liNovoComentario.append(item);
    ulComentarios.append(liNovoComentario);
  });

  document.querySelector("article section").style.display = "block";
  document.querySelector("article button").style.display = "none";
}

window.onload = function () {
  document.querySelector("article button").onclick = function () {
    mostrarComentarios();
  };
};
