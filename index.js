// Definir tasas de cambio
const tasaUSDToEUR = 0.82;

// Función para convertir USD a EUR
function convertirUSDAEUR(cantidadUSD) {
    return cantidadUSD * tasaUSDToEUR;
}

// Función para convertir EUR a USD
function convertirEURAUSD(cantidadEUR) {
    return cantidadEUR / tasaUSDToEUR;
}

// Función principal del simulador
function simuladorConvertidor() {
    let continuar = true;

    while (continuar) {
        let opcion = parseInt(prompt("¿Qué deseas hacer?\n1. Convertir USD a EUR\n2. Convertir EUR a USD\n3. Salir"));

        if (opcion === 1) {
            let cantidadUSD = parseFloat(prompt("Ingresa la cantidad de USD:"));

            if (!isNaN(cantidadUSD)) {
                let cantidadEUR = convertirUSDAEUR(cantidadUSD);
                console.log(`${cantidadUSD} USD equivale a ${cantidadEUR.toFixed(2)} EUR`);
            } else {
                alert("Porfa pa, agregame un numero valido.");
            }
        } else if (opcion === 2) {
            let cantidadEUR = parseFloat(prompt("Ingresa la cantidad de EUR:"));

            if (!isNaN(cantidadEUR)) {
                let cantidadUSD = convertirEURAUSD(cantidadEUR);
                console.log(`${cantidadEUR} EUR equivale a ${cantidadUSD.toFixed(2)} USD`);
            } else {
                alert("Porfa pa, agregame un numero valido.");
            }
        } else if (opcion === 3) {
            continuar = false;
            console.log("¡Hasta luego mi reyyyy!");
        } else {
            alert("Opción no válida. Por favor, elige una opción válida.");
        }
    }
}
simuladorConvertidor();
