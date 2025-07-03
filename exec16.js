 let prompt = require('prompt-sync')();
let nomeAluno = prompt('Nome do Aluno : ' );
let notas = [];
let somaNotas = 0;
let numeroProva = 3

for (let i=0; i<numeroProva; i++){
let nota = parseFloat(prompt('digite sua nota da prova : ', + (i)))
    notas.push(notas);
    somaNotas += nota ;
}

let medianotas =(somaNotas/numeroProva);
if(medianotas>7){
    console.log('O aluno está aprovado')

}else if(medianotas<5){
    console.log('O aluno está REPROVADO ');

}else{(medianotas >5.1 && medianotas <6.9)
console.log('O aluno está de recuperação')
}