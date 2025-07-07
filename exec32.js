let prompt = require('prompt-sync')();
let A = parseFloat(prompt("Digite o valor de A: "));
let B = parseFloat(prompt("Digite o valor de B: "));
let C = prompt("Digite o operador (+ - * /): ");
if (C === "+") {
  console.log("Resultado: " + (A + B));
} else if (C === "-") {
  console.log("Resultado: " + (A - B));
} else if (C === "*") {
  console.log("Resultado: " + (A * B));
} else if (C === "/") {
  if (B !== 0) {
    console.log("Resultado: " + (A / B));
  } else {
    console.log("Erro: divisão por zero");
  }
} else {
  console.log("Operador não definido");
}
