/* 

let dolar = 1040;
let euro = 1060;

let eleccion;
while (true) {
    eleccion = parseInt(prompt("Selecciona conversión Pesos a:\n 1. Dólar\n 2. Euro"));
    if (eleccion === 1 || eleccion === 2) {
        break;
    }
    alert("Por favor, elige una opción válida: 1 para Dólar o 2 para Euro.");
}



let ingresaPesos = parseFloat (prompt ("ingresa monto en Pesos"));

function conversion (pesos, elecciones) { 

    switch (elecciones) {
        case 1 :
             return pesos * dolar;
             case 2: 
             return pesos * euro;
             default:
                return "Elija 1 o 2.";
    }
}

let resultado = conversion (ingresaPesos, eleccion);


if (typeof resultado === 'number') {
    alert("El resultado de la conversión es: " + resultado.toFixed(2));
} else {
    alert(resultado);
}




 */



/* ------------------------------------------- */



const tasasCambio = {
    dolar: 1280,
    euro: 1380
};

let historialConversiones = [];

function convertir(pesos, tipoCambio) {
    return pesos / tipoCambio; 
}

function mostrarHistorial(historial) {
    if (historial.length === 0) {
        console.log("No hay conversiones en el historial.");
        return;
    }

    historial.forEach((conversion, index) => {
        console.log(`${index + 1}. ${conversion.monto} Pesos a ${conversion.moneda}: ${conversion.resultado.toFixed(2)}`);
    });
}

function iniciarConversion() {
    let eleccion;
    while (true) {
        eleccion = parseInt(prompt("Conversión Peso a:\n 1. Dólar\n 2. Euro"));
        if (eleccion === 1 || eleccion === 2) {
            break;
        }
        alert("Por favor, elige una opción válida: 1 para Dólar o 2 para Euro.");
    }

    let ingresaPesos = parseFloat(prompt("Ingresa monto en Pesos"));
    let moneda = eleccion === 1 ? 'dolar' : 'euro';
    let resultado = convertir(ingresaPesos, tasasCambio[moneda]);

    historialConversiones.push({
        monto: ingresaPesos,
        moneda: moneda,
        resultado: resultado
    });

    alert("El resultado de la conversión es: " + resultado.toFixed(2));
}



function reiniciar() {
    let continuar;
    while (true) {
        continuar = prompt("¿Desea realizar otra conversión? (si/no)").toLowerCase();
        if (continuar === 'si' || continuar === 'no') {
            break;
        }
        alert("Por favor, ingrese una respuesta válida: 'si' o 'no'.");
    }

    if (continuar === 'si') {
        iniciarConversion();
        mostrarHistorial(historialConversiones);
        reiniciar();
    } else {
        alert("Gracias por usar el convertidor de moneda.");
    }
}

// Iniciar el ciclo de conversiones
iniciarConversion();
mostrarHistorial(historialConversiones);
reiniciar();


