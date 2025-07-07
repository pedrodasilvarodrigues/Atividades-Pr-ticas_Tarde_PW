let prompt = require('prompt-sync')();
let aptos = 0;
let inaptos = 0;
let n21 = parseInt(prompt("Quantas pessoas: "));
for (let i=0; i<n21; i++) {
  let nome = prompt("Nome: ");
  let sexo = prompt("Sexo (M/F): ");
  let idade = parseInt(prompt("Idade: "));
  let saude = prompt("Saúde (S/N): ");
  if (sexo.toUpperCase() === "M" && idade >= 18 && saude.toUpperCase() === "S") {
    console.log(nome + " apto");
    aptos++;
  } else {
    console.log(nome + " não apto");
    inaptos++;
  }
}
console.log("Aptos: " + aptos);
console.log("Inaptos: " + inaptos);
