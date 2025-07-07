let prompt = require('prompt-sync')();
let precoProduto = parseFloat(prompt("Digite o valor do produto: "));
let vista = precoProduto - (precoProduto * 0.15);
let prazo = precoProduto + (precoProduto * 0.15);
let parcelado = precoProduto + (precoProduto * 0.20);
console.log("À vista: R$" + vista);
console.log("A prazo: R$" + prazo);
console.log("Parcelado em 24x: R$" + parcelado);
