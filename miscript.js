// Función para el primer botón
function fnGeo() {
    let dato = document.getElementById("txtDato").value;
    alert("Dato ingresado: " + dato);
    
    // Se pasa la variable 'dato' a las funciones externas
    fuctionSalidaParrafo(dato);
    fnalerta(dato);
}

// Función para la calculadora (Operaciones básicas)
function fnCalculaRider() {
    // 1. Obtener el primer número por su ID
    let num1 = Number(document.getElementById("txtNum1").value);

    // 2. Obtener el segundo número por su CLASS (la primera coincidencia [0])
    let num2 = Number(document.getElementsByClassName("txtNum2")[0].value);

    // 3. Obtener la operación seleccionada
    let operacion = document.getElementById("operacion").value;

    let resultado = 0;

    // 4. Realizar el cálculo según la operación elegida
    switch(operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            // Validación para evitar división por cero
            if (num2 === 0) {
                alert("Error: No se puede dividir entre cero.");
                return; // Detiene la función aquí
            }
            resultado = num1 / num2;
            break;
        case "modulo":
            // Validación para evitar módulo por cero
            if (num2 === 0) {
                alert("Error: No se puede calcular el residuo dividiendo entre cero.");
                return; 
            }
            resultado = num1 % num2; // Este es el residuo de la división
            break;
        default:
            alert("Operación no válida");
            return;
    }

    // 5. Mostrar el resultado en alerta
    alert("El resultado de la operación es: " + resultado);
    
    // 6. Enviar el resultado al párrafo
    fuctionSalidaParrafo(resultado);
}

// --- FUNCIONES AUXILIARES ---

function fuctionSalidaParrafo(datoVariable) {
    document.getElementById("pfosalida").innerHTML = "El resultado obtenido es: " + datoVariable;
}

function fnalerta(datoVariable) {
    alert("El dato registrado/calculado fue: " + datoVariable);
}