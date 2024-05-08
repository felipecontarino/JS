
let dolar = 1040;
let euro = 1060;

let eleccion = parseInt (prompt ("selecciona: \n 1.Dolar\n 2.Euro"));
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
console.log (resultado);




