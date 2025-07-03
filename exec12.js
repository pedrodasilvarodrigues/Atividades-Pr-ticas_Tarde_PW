 let prompt = require('prompt-sync')();

let custoFabrica = parseFloat(prompt('Digite o valor do custo de fábrica : '))
 let imposto = custoFabrica*0.45
 let custoImposto = custoFabrica + imposto
 let distribuidor = custoImposto*0.28
 let consumidor = distribuidor + custoImposto  
 console.log('O valor final para o Consumidor é : ',consumidor)