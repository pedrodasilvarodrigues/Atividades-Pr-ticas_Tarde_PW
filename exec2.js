let prompt = require('prompt-sync')();
let numero1 = parseFloat (prompt('Digite o primeiro Numero : '))
let numero2 = parseFloat (prompt('Digite o segundo Numero : '))

console.log('O seu Resultado eh : ',(numero1 + numero2))
console.log('O seu Resultado eh : ',(numero1 - numero2))
console.log('O seu Resultado eh : ',(numero1 * numero2))
console.log('O seu Resultado eh : ',(numero1 / numero2).toFixed(2))