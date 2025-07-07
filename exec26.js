let prompt = require('prompt-sync')();
let n26 = parseFloat(prompt("Número 1 a 5: "));
if (n26 === 1) {
  console.log("Um");
} else if (n26 === 2) {
  console.log("Dois");
} else if (n26 === 3) {
  console.log("Três");
} else if (n26 === 4) {
  console.log("Quatro");
} else if (n26 === 5) {
  console.log("Cinco");
} else {
  console.log("Inválido");
}

