let prompt = require('prompt-sync')();
let lado1 = parseFloat(prompt("Lado 1: "));
let lado2 = parseFloat(prompt("Lado 2: "));
let lado3 = parseFloat(prompt("Lado 3: "));
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo Equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não é um triângulo");
}