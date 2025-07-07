let prompt = require('prompt-sync')();
let somaCusto = 0;
let somaVenda = 0;
for (let i=0; i<40; i++) {
  let custo = parseFloat(prompt("Custo: "));
  let venda = parseFloat(prompt("Venda: "));
  if (venda > custo) {
    console.log("Lucro");
  } else if (venda < custo) {
    console.log("Prejuízo");
  } else {
    console.log("Empate");
  }
  somaCusto += custo;
  somaVenda += venda;
}
console.log("Média custo: " + (somaCusto/40));
console.log("Média venda: " + (somaVenda/40));
