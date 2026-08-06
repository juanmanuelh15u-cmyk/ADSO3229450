function fnGeo() {

    let datoVariable = "";

    datoVariable = document.getElementById("txtDato").value;

    console.log("Dato: ", datoVariable);

    fnSalidaParrafo(datoVariable);
    fnAlerta(datoVariable);

}

function fnSalidaParrafo(dato){

    document.getElementById("salida").innerHTML = dato;

}

function fnAlerta(dato){

    alert(dato);

}

function fnCalculaRider(){

    let num1 = Number(document.getElementById("txtNum1").value);

    let num2 = Number(document.getElementsByClassName("TxtNum2")[0].value);

    let suma = num1 + num2;

    console.log("Suma:", suma);

    document.getElementById("salida").innerHTML = "La suma es: " + suma;

}
function fnCalcularSeno() {

    let angulo = 0;
    let resultadoSeno = 0;

    angulo = Number(document.getElementById("txtAngulo").value);

    // Math.sin trabaja en radianes
    resultadoSeno = Math.sin(angulo * Math.PI / 180);

    console.log("Ángulo:", angulo);
    console.log("Seno:", resultadoSeno);

    fnSalidaContenedorDivSeno(angulo, resultadoSeno);

}

function fnSalidaContenedorDivSeno(angulo, resultadoSeno) {

    document.getElementById("divSeno").textContent =
    "El seno de " + angulo + "° es: " + resultadoSeno;

    function fnCalcularSenoCoseno(){

    let numero = 0;
    let resultadoSeno = 0;
    let resultadoCoseno = 0;

    numero = Number(document.getElementById("txtNumero").value);

    resultadoSeno = Math.sin(numero);
    resultadoCoseno = Math.cos(numero);

    fnSalidaSenoCoseno(numero, resultadoSeno, resultadoCoseno);

}

function fnSalidaSenoCoseno(numero, resultadoSeno, resultadoCoseno){

    document.getElementById("divResultado").textContent =
    "Número: " + numero +
    " | Seno: " + resultadoSeno +
    " | Coseno: " + resultadoCoseno;
let numero = Number(document.getElementById("txtNumero").value);

let seno = Math.sin(numero);
let coseno = Math.cos(numero);
}
}