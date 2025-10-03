const boton1=document.querySelector("#boton1");
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
const botonIgual =document.querySelector("#botonIgual");


function calcular(num1,num2,op){
    switch (op){
        case "+": return num1+num2;
        case "-": return num1-num2;
        case "*": return num1*num2;
        case "/": return valor2!=0 ? num1/num2 : "Error: Division por cero";
        default: return "Operacion No Valida";
    }
}

botonIgual.addEventListener("click", () =>{
    let total = calcular(valor1,valor2,operacion);
    document.querySelector("#resultado").innerText=total;
});
 