let prompt = require('prompt-sync')();
let n125 = parseFloat(prompt("Número 1: "));
let n225 = parseFloat(prompt("Número 2: "));
if (n125 === n225) {
  console.log("Iguais");
} else if (n125 > n225) {
  console.log("Diferentes, maior: " + n125);
} else {
  console.log("Diferentes, maior: " + n225);
}