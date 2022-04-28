/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function encriptador(frase) {
    var frase = document.getElementsByTagName("textarea")[0].value;
    var fraseEncriptada = btoa(frase);
    document.getElementById("textarea-resultado").innerHTML = fraseEncriptada;
}

/*function encriptador(frase){

    for(let i = 0; i <= length.frase; i++){
        if(frase[i] == "a"){
            replace("a", ai);
        }
        else if(frase[i] == "e"){

        }
        else if(frase[i] == "i"){

        }
        else if(frase[i] == "o"){
            
        }
        else if(frase[i] == "u"){
            
        }
    }
}   
function desencriptador(frase){

}
*/


var buttonCopy = document.querySelector("#copiar");
var inputResultado = document.querySelector("#textarea-resultado");
var message = document.querySelector("#message");

buttonCopy.addEventListener("click", function(){
    inputResultado.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");

    message.innerHTML = "Copiado al portapapeles"
    setTimeout(()=> message.innerHTML = "", 5000);
})