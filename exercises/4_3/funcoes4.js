/*  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.*/


let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maior=0;
let MostreMaior = " ";


function maiorNome(arrayNomes){

  for( let i = 0; i < arrayNomes.length; i++){

    let tamPalavra = (arrayNomes[i]).length;

    if( tamPalavra > maior){
    maior = tamPalavra;
    MostreMaior = arrayNomes[i];
    }

 }
 return MostreMaior
}
console.log(maiorNome(arrayNomes));



let palavras = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(palavras){

  let maiorPalavra = palavras[0]; // recebe a primeira posiçao;

  for(let indice in palavras){
    if (maiorPalavra.length < palavras[indice].length){
    // se o tamanho da maiorpalavra for menor que o tamanho do conteudo do array
    maiorPalavra = palavras[indice];
  }
  }
  return maiorPalavra
}

maiorNome(palavras);