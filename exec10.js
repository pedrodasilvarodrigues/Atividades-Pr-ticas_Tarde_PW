let prompt = require('prompt-sync')();

console.log('1 = Produto/1')
console.log('2= Produto/2')
console.log('3 = Produto/3')
console.log('4 = Produto/4')
console.log('5 = Produto/5')



let Produto = prompt('Digite o valor do produto : ');
let Prestacoes = parseFloat(prompt('Digite a quantidade de prestações : '))


if(Prestacoes===1)
    {
        resultado= (Produto/1);
        console.log('O resultado da soma eh ', resultado);
    
    }else if(Prestacoes===2) {
        resultado = (Produto/2);
        console.log('O resultado da subtração eh ', resultado);
         
}else if(Prestacoes===3) {
        resultado = (Produto/3);
        console.log('O resultado da multiplicação eh ', resultado);
        
} 
else if(Prestacoes===4) {
    resultado = (Produto/4);
console.log('O resultado da divisao eh ', resultado)

}else if(Prestacoes ===4) {
    resultado = (Produto/5)
console.log('O resultado da divisao eh ', resultado)
 
}else{
    console.log('Perdão ,mas não há como dividir')
}