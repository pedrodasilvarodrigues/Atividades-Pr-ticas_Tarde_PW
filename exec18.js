 let prompt = require('prompt-sync')();
// // let nomeAluno = prompt('Nome do Aluno : ' );
// let notas = [];
// let somaNotas = 0;
// let idade = parseFloat(prompt('Digite a sua Idade : '))  
// let numeroPessoas = 4


// for (let i=0; i<numeroPessoas; i++){
// // let nota = parseFloat(prompt('digite sua nota da prova : ', + (i)))
//     // notas.push(notas);
//     // somaNotas += nota ;
// }

// //  let medianotas =(somaNotas/numeroProva);
// if(medianotas>=18){
//     console.log('O aluno está aprovado')

// }else if(medianotas<17){
//     console.log('O aluno está REPROVADO ');
// }
// // }else{(medianotas >5.1 && medianotas <6.9)
// // console.log('O aluno está de recuperação')
// // }




let contador = 0
let pessoas = 75
for(let i=0; i<pessoas; i++){
let idade = parseFloat(prompt('Digite a sua idade : '))
   if(idade >=18) {
console.log('Maior de idade')
   }else{
    console.log('Menor de idade')
   }
}
