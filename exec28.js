let prompt = require('prompt-sync')();

let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo: "));
for (let i = 1; i <= 584; i++) {
  let nome = prompt("Nome do funcionário: ");
  let salario = parseFloat(prompt("Salário atual: "));
  let reajuste = 0;
  if (salario < 3 * salarioMinimo) {
    reajuste = salario * 0.5;
  } else if (salario >= 3 * salarioMinimo && salario <= 10 * salarioMinimo) {
    reajuste = salario * 0.2;
  } else if (salario > 10 * salarioMinimo && salario <= 20 * salarioMinimo) {
    reajuste = salario * 0.15;
  } else {
    reajuste = salario * 0.1;
  }
  let novoSalario = salario + reajuste;
  console.log(nome + " - Reajuste: R$" + reajuste + " - Novo salário: R$" + novoSalario);
  totalAumento += reajuste;
}
console.log("Total de aumento na folha: R$" + totalAumento);