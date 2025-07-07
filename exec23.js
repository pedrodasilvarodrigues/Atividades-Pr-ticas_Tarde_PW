let prompt = require('prompt-sync')();
let n23 = parseFloat(prompt("Número: "));
if (n23 > 80) {
  console.log("Maior que 80");
} else if (n23 < 25) {
  console.log("Menor que 25");
} else if (n23 === 40) {
  console.log("Igual a 40");
}
