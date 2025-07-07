let prompt = require('prompt-sync')();
let tipo = parseFloat(prompt("Tipo de cliente (1-Residência, 2-Comércio, 3-Indústria): "));
let kw = parseFloat(prompt("Quantidade de KW/h: "));
let preco = 0;
if (tipo === 1) {
  preco = 0.6;
} else if (tipo === 2) {
  preco = 0.48;
} else if (tipo === 3) {
  preco = 1.29;
} else {
  console.log("Tipo inválido");
}
let total = preco * kw;
console.log("Valor da conta: R$" + total);