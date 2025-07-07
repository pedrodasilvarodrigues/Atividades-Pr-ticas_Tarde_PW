let prompt = require('prompt-sync')();
let nome37 = prompt("Nome: ");
let sexo37 = prompt("Sexo (M/F): ");
let altura37 = parseFloat(prompt("Altura (em metros): "));
let idade37 = parseFloat(prompt("Idade: "));
let pesoIdeal = 0;
if (sexo37 === "M") {
  pesoIdeal = (72.7 * altura37) - 58;
} else if (sexo37 === "F") {
  pesoIdeal = (62.1 * altura37) - 44.7;
} else {
  console.log("Sexo inválido");
}
console.log(nome37 + ", seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");

