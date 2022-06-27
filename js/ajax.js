


function mostrarComentarios() {

    var con = new XMLHttpRequest();
    con.responseType = "json";
    console.log(con);

    con.onreadystatechange = function() {
        if(con.readyState == 4 && con.status == 200) {
            let documento = con.response;
            let ulComentarios = document.querySelector('article section ul');
            documento.comentarios.forEach(function(item, index, array){
                let novaLi = document.createElement('li');
                novaLi.append(item.texto);
                ulComentarios.append(novaLi);
            });
        }
    }

    con.open("GET","js/comentarios.json", true);
    con.send();

    document.querySelector('article section').style.display = "block";
    document.querySelector('article button').style.display = "none";


}

window.onload = function() {
    document.querySelector('article button').onclick = function(){
        mostrarComentarios();
    }
}