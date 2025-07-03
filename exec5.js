let prompt = require('prompt-sync')();
// // / let nomeAluno = prompt('Digite o seu nome :');
//    let nota1 = parseFloat(prompt('Digite a nota um : '));
//    let nota2= parseFloat(prompt('Digite a nota dois : '));
// let nota3 = parseFloat(prompt('Digite a nota três : '));

// // let media = nota1 + nota2 + nota3 
// // let mediaFinal = media/3

//    console.log('Esta é a média atual' , mediaFinal)




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

console.log('O nome do aluno é  ', nomeAluno, 'e a sua média é : ', medianotas)



















































// function lerMensagem(media){
//     let mensagem = parseFloat(prompt(media))
//     mensagem = parseFloat(prompt(media))
//     return mensagem
// }
   
//  let notas = [
//     lerMensagem('Digite as notas'),
//     lerMensagem('Digite as notas'),
//     lerMensagem('Digite as notas'),
//  ]

//  let medias = notas.reduce(function(atual,contador){
//     return atual + contador
//  })
//  console.log('Aqui está a nota : ',medias)