let prompt = require('prompt-sync')();
let nome30 = prompt("Nome: ");
let idade30 = parseInt(prompt("Idade: "));
let sexo30 = prompt("Sexo (M/F): ");
let salarioFixo = parseFloat(prompt("Salário fixo: "));
console.log("Nome: " + nome30);
console.log("Salário líquido: R$" + salarioFixo);