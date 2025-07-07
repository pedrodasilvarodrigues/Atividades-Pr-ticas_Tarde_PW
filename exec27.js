let prompt = require('prompt-sync')();
let totalDesc27 = 0;
let totalPago27 = 0;
while (true) {
  let val27 = parseFloat(prompt("Valor veículo (0 sai): "));
  if (val27 === 0) break;
  let comb = prompt("Combustível: ").toLowerCase();
  let desc = 0;
  if (comb === "álcool") desc = val27*0.25;
  else if (comb === "gasolina") desc = val27*0.21;
  else if (comb === "diesel") desc = val27*0.14;
  else {console.log("Combustível errado"); continue;}
  console.log("Desconto: " + desc);
  console.log("Valor a pagar: " + (val27-desc));
  totalDesc27 += desc;
  totalPago27 += (val27-desc);
}
console.log("Total desconto: " + totalDesc27);
console.log("Total pago: " + totalPago27);