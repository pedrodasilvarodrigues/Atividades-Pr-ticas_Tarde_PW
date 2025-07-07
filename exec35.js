let prompt = require('prompt-sync')();
let idade35 = parseFloat(prompt("Digite a idade do nadador: "));
if (idade35 >= 5 && idade35 <= 7) {
  console.log("Infantil A");
} else if (idade35 >= 8 && idade35 <= 10) {
  console.log("Infantil B");
} else if (idade35 >= 11 && idade35 <= 13) {
  console.log("Juvenil A");
} else if (idade35 >= 14 && idade35 <= 17) {
  console.log("Juvenil B");
} else if (idade35 >= 18 && idade35 <= 25) {
  console.log("Sênior");
} else {
  console.log("Idade fora da faixa etária");
}