let prompt = require('prompt-sync')();
let Deposito = parseFloat (prompt('Digite o valor depositado : '))
let taxa = Deposito*1.70
let rendimento = Deposito + taxa

console.log('O valor antes do rendimento era esse : ',Deposito, ' Agora é esse ',rendimento)