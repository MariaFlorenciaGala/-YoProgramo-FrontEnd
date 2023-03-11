var numPantalla = "0";
var pantallaConNumero = "si"; //Si o No
var usarPunto = "no"; //Si o No
var numEspera = 0;
var operaPendiente = "";
var solucion = "";

function ingresarNumero(x) {
    if (x != ".") {

        if (numPantalla == "0" || pantallaConNumero == "si") {
            document.Calculadora.txtboxnros.value = x;
            numPantalla = x;
        } else if (x != ".") {
            document.Calculadora.txtboxnros.value += x;
            numPantalla += x;
        }
    }

    if (x == "." && usarPunto == "no" && numPantalla == "0") {
        document.Calculadora.txtboxnros.value = "0.";
        numPantalla = x;
        usarPunto = "si";
    } else if (x == "." && usarPunto == "no") {

        document.Calculadora.txtboxnros.value += x;
        numPantalla += x;
        usarPunto = "si";
    } else if (x == "." && usarPunto == "si") {
    }
    pantallaConNumero = "no";
}

function ingresaOperacion(y) {
    if (operaPendiente == "") {

        numEspera = document.Calculadora.txtboxnros.value;
        document.Calculadora.txtboxnros.value += y;
        operaPendiente = y;
        pantallaConNumero = "no";
        numPantalla = "";
        usarPunto = "no";
    }

}

function resultado() {

    if (operaPendiente != "") {
        solucion = numEspera + operaPendiente + numPantalla;
        document.Calculadora.txtboxnros.value = eval(solucion);
        numPantalla = eval(solucion);
        pantallaConNumero = "si";
        operaPendiente = "";
        usarPunto = "no";

    }

}

function raiz() {

    if (operaPendiente == "") {
        document.Calculadora.txtboxnros.value = Math.sqrt(numPantalla);
        pantallaConNumero = "no";
        operaPendiente = "";
        usarPunto = "no";
    }
}

function limpiar() {

    numPantalla = "0";
    pantallaConNumero = "si";
    usarPunto = "no";
    numEspera = 0;
    operaPendiente = "";
    solucion = "";
    document.Calculadora.txtboxnros.value = "0";
}