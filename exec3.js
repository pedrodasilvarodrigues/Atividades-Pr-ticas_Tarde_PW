let prompt = require('prompt-sync')();
let Distacia = parseFloat (prompt('Digite a distância :'));
let Consumo = parseFloat (prompt('Digite o Comsumo : '));

console.log('O consumo médio é : ',(Distacia/Consumo).toFixed(3))
