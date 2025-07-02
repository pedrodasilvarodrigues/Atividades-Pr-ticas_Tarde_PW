let prompt = require('prompt-sync')();
let Celsius = parseFloat(prompt('Digite a temperatura em Celsius : '))
let F = 9*Celsius + 160/5
console.log('O resultado em  Fahrenheit : ',F)