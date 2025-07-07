let prompt = require('prompt-sync')();
let nivel = parseFloat(prompt("Nível do professor (1, 2 ou 3): "));
let horas = parseFloat(prompt("Quantidade de horas/aula: "));
let valorHora = 0;
if (nivel === 1) {
  valorHora = 12;
} else if (nivel === 2) {
  valorHora = 17;
} else if (nivel === 3) {
  valorHora = 25;
} else {
  console.log("Nível inválido");
}
let salario = valorHora * horas;
console.log("Salário: R$" + salario);