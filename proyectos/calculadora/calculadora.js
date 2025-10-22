const elemDisp = document.querySelector("#resultado").innerText="0";

let valor1 = 0;
let valor2 = 0;
let operacion = "";
let valorActual = "";

const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");
const boton5 = document.querySelector("#boton5");
const boton6 = document.querySelector("#boton6");
const boton7 = document.querySelector("#boton7");
const boton8 = document.querySelector("#boton8");
const boton9 = document.querySelector("#boton9");
const boton0 = document.querySelector("#boton0");

const botonSumar = document.querySelector("#botonSumar");
const botonRestar = document.querySelector("#botonRestar");
const botonMultiplicar = document.querySelector("#botonMultiplicar");
const botonDividir = document.querySelector("#botonDividir");
const botonIgual = document.querySelector("#botonIgual");
const botonBorrar = document.querySelector("#botonBorrar");
const resultado = document.querySelector("#resultado");


function calcular(num1, num2, op) {
    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 != 0 ? num1 / num2 : "Error: Division por cero";
        default: return "Error";
    }
}

function asignarvalor(valorActual){
    if(operacion===""){
        valor1=valorActual;
    } else {
        valor2=valorActual;
    }
}
function asignarValoryMostrar(valor){
    if(valorActual === "0" || valorActual === ""){
        valorActual = valor;
    } else {
        valorActual += valor;
    }
    document.querySelector("#resultado").innerText = valorActual;
}

boton0.addEventListener("click", () => asignarValoryMostrar(("0")));
boton1.addEventListener("click", () => asignarValoryMostrar(("1")));
boton2.addEventListener("click", () => asignarValoryMostrar(("2")));
boton3.addEventListener("click", () => asignarValoryMostrar(("3")));
boton4.addEventListener("click", () => asignarValoryMostrar(("4")));
boton5.addEventListener("click", () => asignarValoryMostrar(("5")));
boton6.addEventListener("click", () => asignarValoryMostrar(("6")));
boton7.addEventListener("click", () => asignarValoryMostrar(("7")));
boton8.addEventListener("click", () => asignarValoryMostrar(("8")));
boton9.addEventListener("click", () => asignarValoryMostrar(("9")));

// Event listeners para las operaciones
botonSumar.addEventListener("click", () => {
    asignarvalor(Number(valorActual));
    operacion = "+";
    valorActual = "";
});
botonRestar.addEventListener("click", () => {
    asignarvalor(Number(valorActual));
    operacion = "-";
    valorActual = "";
});
botonMultiplicar.addEventListener("click", () => {
    asignarvalor(Number(valorActual));
    operacion = "*";
    valorActual = "";
});
botonDividir.addEventListener("click", () => {
    asignarvalor(Number(valorActual));
    operacion = "/";
    valorActual = "";
});

botonIgual.addEventListener("click", () =>{
    asignarvalor(Number(valorActual));
    const total = calcular(valor1, valor2, operacion);
    resultado.innerText = total;
    valor1 = total;
    operacion = "";
    valor2 = 0;
    valorActual = total;
});

botonBorrar.addEventListener("click", () => {
    valor1 = 0;
    valor2 = 0;
    operacion = "";
    valorActual = "";
    resultado.innerText = 0;
});