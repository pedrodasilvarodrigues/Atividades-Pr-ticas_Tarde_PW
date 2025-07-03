 let prompt = require('prompt-sync')();
let numero1 = parseFloat (prompt('Digite o primeiro Numero : '))
let numero2 = parseFloat (prompt('Digite o segundo Numero : '))

if(numero1>numero2){
    console.log('O número1 é maior')
   }else{
    console.log('O número2 é maior ')
   }