let prompt = require('prompt-sync')();
let num = 0 
let numero = 0 
do {
    let numero1 = parseFloat(prompt("Digite o primeiro numero : "))
    numero++
    console.log('Posição : ' + numero)
    if (numero1 > 10  && numero1 <150){
        
        num++
        
    }else{
        console.log('Não maior que')
    }
}while (numero <3)
    console.log('São : ', num + ' Numeros maiores que 10 e menors que 150')