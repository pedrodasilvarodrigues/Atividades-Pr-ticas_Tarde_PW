 let prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Digite o numero: '))
if(numero>10){
console.log('O numero é maior que 10')
}else{
    console.log('O número é menor que 10')
}