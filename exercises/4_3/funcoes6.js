/* Crie uma função que receba um número inteiro N e retorne o 
somatório de todos os números de 1 até N.

Valor de teste: N = 5.

Valor esperado no retorno da função: 1+2+3+4+5 = 15.

*/


let N = 6;
let soma = 0;

function somaInteiro(num){

    for( i=1; i <= N; i++){
    soma = soma+i;
    }
    return soma;
}
console.log ( somaInteiro(N));