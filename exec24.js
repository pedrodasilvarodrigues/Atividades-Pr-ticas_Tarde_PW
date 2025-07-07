let prompt = require('prompt-sync')();
let qnt24 = parseFloat(prompt("Quantos números: "));
for (let i=0; i<qnt24; i++) {
  let num = parseFloat(prompt("Número: "));
  if (num > 0) {
    console.log("Positivo");
  } else if (num < 0) {
    console.log("Negativo");
  } else {
    console.log("Zero");
  }
}
