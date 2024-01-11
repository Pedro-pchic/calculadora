//llamar a nuestros operadores o dar seguimientos a nuestros operadores 
const txtOp1 =document.getElementById("op1");
const txtOperacion =document.getElementById("operacion");
const txtOp2 =document.getElementById("op2");
const btnCalcular =document.getElementById("calcular");
const pResultado =document.getElementById("resultado");
//boton para calculuar 
btnCalcular.addEventListener('click', calcular);
// cuando queremos realizar o calcular para que nos muestre el resultado 
function calcular(){
const operacion=txtOperacion.value;
const op1 =txtOp1.value;
const op2 =txtOp2.value;

// usaremos un if para que nos vea que perador debemos usar y no poner cualquier cosas para que nos resulba
if((operacion =="+" || operacion =="-" || operacion =="*" || operacion =="/" )&& !isNaN(op1) && !isNaN(op2)){
    let resultado;
    switch(operacion){
        case "+":
           resultado= op1+op2
            break;
        case "-":
            resultado =op1-op2;
            break;
        case "*":
            resultado =op1*op2;
            break;
        case "/":
            resultado =op1/op2;
            break;
    }
    pResultado.style+"color:black"
    pResultado.innerText ="="+ resultado;
}else{
    pResultado.style ="color:red"
    pResultado.innerText ="calculo imposible";
}
}