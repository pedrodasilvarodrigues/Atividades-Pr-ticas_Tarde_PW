let prompt = require('prompt-sync')();
let nome38 = prompt("Nome: ");
let idade38 = parseFloat(prompt("Idade: "));
let risco = parseFloat(prompt("Grupo de risco (1, 2 ou 3): "));
if (idade38 >= 17 && idade38 <= 70) {
  if (idade38 >= 17 && idade38 <= 20) {
    if (risco === 1) {
      console.log("Categoria 1");
    } else if (risco === 2) {
      console.log("Categoria 2");
    } else if (risco === 3) {
      console.log("Categoria 3");
    }
  } else if (idade38 >= 21 && idade38 <= 24) {
    if (risco === 1) {
      console.log("Categoria 4");
    } else if (risco === 2) {
      console.log("Categoria 5");
    } else if (risco === 3) {
      console.log("Categoria 6");
    }
  } else {
    if (risco === 1) {
      console.log("Categoria 7");
    } else if (risco === 2) {
      console.log("Categoria 8");
    } else if (risco === 3) {
      console.log("Categoria 9");
    }
  }
} else {
  console.log("Idade fora da faixa para seguro");
}