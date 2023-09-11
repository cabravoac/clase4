//  repaso
/*
let valorUno = parseFloat(prompt("ingrese un valor"))
let valorDos = parseFloat(prompt("ingrese otro valor"))
let operacion = prompt("ingrese una operación")

while(valorUno || valorUno === 0){
    let resultado = 0
    switch(operacion){
        case "+":
            resultado = valorUno +  valorDos
            break
        case "-":
            resultado = valorUno - valorDos
            break
        case "*":
            resultado = valorUno * valorDos
            break
        case "/":
            resultado = valorUno / valorDos
            break 

    }
    alert(resultado)
    valorUno = parseFloat(prompt("ingrese un valor"))
    valorDos = parseFloat(prompt("ingrese otro valor"))
    operacion = prompt("ingrese una operación")
}
*/



// fin repaso


/*
function saludar (){
    let nombre = prompt("ingrese una funcion")
    alert("hola" + " " + nombre)
}

saludar()
*/



function suma (valorUno, valorDos){
    let resultado = valorUno + valorDos
    alert(resultado)
}
suma(10, 50)



function suma(valorUno, valorDos){
    let resultado = valorUno + valorDos
    return resultado
 }

 function mostrar (valor){
    alert("el valor es:" + valor)
 }
 mostrar(suma(12,5))