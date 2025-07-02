let prompt = require('prompt-sync')();
let nome = prompt('Digite o seu Nome : ') 
let vendas =  prompt('Digite sua quantidade de Vendas : ') 
let salario = parseFloat(prompt('Digite o seu salário :'))
 
let comisao = vendas*0.15
let salarioFinal = salario+comisao


console.log('Olá, meu nome é ' + nome + 'meu salario antes era ' + salario + 'no final ficou '+salarioFinal)