let prompt = require('prompt-sync')();
let v1 = parseInt(prompt("Digite o primeiro número: "));
let v2 = parseInt(prompt("Digite o segundo número: "));
let v3 = parseInt(prompt("Digite o terceiro número: "));
let numeros = [v1, v2, v3];
numeros.sort((a, b) => a - b);
console.log("Ordem crescente: " + numeros);