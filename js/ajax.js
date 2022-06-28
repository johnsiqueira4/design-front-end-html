


function mostrarComentarios() {

    var connection = new XMLHttpRequest();
    connection.responseType = "json";
    connection.open("GET","js/comentarios.json");
    connection.send();

    connection.onreadystatechange = function() {
        if(connection.readyState == 4 && connection.status == 200) { /* passa por outra status antes do 4 ex: carregando */
            let documento = connection.response;
            let ulComentarios = document.querySelector('article section ul');
            documento.comentarios.forEach(function(item, index, array){


                    let novaLi = document.createElement('li');
                    let spanAutor = document.createElement('span');
                    let spanSeguidores = document.createElement('span');
                    let spanTexto = document.createElement('span');
                    spanTexto.append(item.texto);
                    spanAutor.append(item.autor);
                    spanSeguidores.className = "seguidores";
                    spanTexto.className = "texto"
                    spanSeguidores.append(item.seguidores + " seguidores");
                    if (index == 0) {
                        novaLi.className = "primeira";
                    }
                    novaLi.append(spanTexto);
                    novaLi.append(spanAutor);
                    novaLi.append(spanSeguidores);

                    ulComentarios.append(novaLi);
                

            });
        }
        else if (connection.status == 404) {
            window.alert("Não foi possível carregar os comentários");
        }
    }

    document.querySelector('article section').style.display = "block";
    document.querySelector('article button').style.display = "none";

}

window.onload = function() {

    document.querySelector('article button').onclick = function(){
        mostrarComentarios();
    };
    
}