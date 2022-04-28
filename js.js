/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
var txtEntrada = document.getElementById("textarea-ingreso");
var txtSalida = document.getElementById("textarea-resultado");
function cambiarLetras(cadena) {
    return cadena
        .replace(/e/ig, "enter")
        .replace(/i/ig, "imes")
        .replace(/a/ig, "ai")
        .replace(/o/ig, "ober")
        .replace(/u/ig, "ufat");
}
function revLetras(rev) {
    return rev
        .replace(/enter/ig, "e")
        .replace(/imes/ig, "i")
        .replace(/ai/ig, "a")
        .replace(/ober/ig, "o")
        .replace(/ufat/ig, "u");
}
function encriptar() {
    var txt = txtEntrada.value;
    var nTxt = txt.toLowerCase();
    var nTn = nTxt.normalize("NFKD");
    txtSalida.textContent = cambiarLetras(nTn);
}

function desencriptar() {
    var txt = txtEntrada.value;
    var nTxt = txt.toLowerCase();
    var nTn = nTxt.normalize("NFKD");
    txtSalida.textContent = revLetras(nTn);
}

// Funcion y variables para copiar resultado
var buttonCopy = document.querySelector("#copiar");
var inputResultado = document.querySelector("#textarea-resultado");
var message = document.querySelector("#message");

buttonCopy.addEventListener("click", function () {
    inputResultado.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");

    message.innerHTML = "Copiado al portapapeles"
    setTimeout(() => message.innerHTML = "", 5000);
})