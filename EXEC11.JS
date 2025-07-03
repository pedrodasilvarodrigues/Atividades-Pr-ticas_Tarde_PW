 let prompt = require('prompt-sync')();
let preco = parseFloat(prompt('Digite o preço : '))
let percentual = parseFloat(prompt('Digite o percentual : '))

let acrescismo = preco*percentual
let precoFinal = preco + acrescismo

console.log('O preço final do produto é : ',precoFinal)