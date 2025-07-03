 let prompt = require('prompt-sync')();
let aleatorio = parseFloat (prompt('Digite a Número :'));
if(aleatorio >=100 && aleatorio <=200){
    console.log('O Numero está no intervalo')
}else{
    console.log('O número não está no intervalo')
}