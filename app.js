const textoIngresado = document.querySelector(".texto-ingresado");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textoIngresado.value);
    mensaje.value = textoEncriptado;
    textoIngresado.value="";
    document.getElementById("mensaje").style.visibility = "visible";
    document.getElementById("boton-copiar").style.visibility ="visible";
    document.getElementById("imagen").style.display="none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textoIngresado.value);
    mensaje.value = textoEncriptado;
    textoIngresado.value ="";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
var copiarTexto = document.getElementById("mensaje");
copiarTexto.select();
navigator.clipboard.writeText(copiarTexto.value);
}