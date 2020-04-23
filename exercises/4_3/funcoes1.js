/* 1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

Exemplo de palíndromo: arara.

verificaPalindrome("arara");

Retorno esperado: true

verificaPalindrome("desenvolvimento");

Retorno esperado: false
*/
/*
 var palindromo = "";
 var palavra = "correr";

for(var index = palavra.length - 1; index >= 0; index--) {
  palindromo += palavra[index]
}

if (palavra == palindromo) {
 console.log( "SIM, SOU UM PALÍNDROMO");
} else {
  console.log( "INFELIZMENTE, NÃO SOU UM PALÍNDROMO");
}*/

let palindromo = "";
let palavra = "ovo";

function isPalindromo(palavra){

    for ( let i = palavra.length-1; i>=0; i--){
    palindromo = palindromo+ palavra[i];
    }

    if ( palavra === palindromo){
      
    console.log( "Sou um Palíndromo");
    }else{
    console.log("Não sou um palíndromo");
    };

    return console.log;

};

isPalindromo(palavra);