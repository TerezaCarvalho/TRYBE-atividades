/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.

Valor esperado no retorno da função: 4.*/


let arrayNum = [2,3,6,7,10,1];
let maior = 0;
let mostrarIndice = " ";

function qualMaior(arrayNum){
    for( let i = 0; i < arrayNum.length; i++){
        
        if ( arrayNum[i]>maior){
        maior = arrayNum[i];
        mostrarIndice = i;
        }

    }
    return mostrarIndice;
}

console.log(qualMaior(arrayNum));



/* 3- 
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.

Valor esperado no retorno da função: 6.
*/

let array = [2, 4, 6, 7, 10, 0, -3];
let menor=0;
let mostrarIndice = 0;

function qualMenor(array){

    for ( i=0; i< array.length; i++){
        if( array[i]< menor){
        menor=array[i];
        mostrarIndice = i;
        }
    }
    return mostrarIndice;
}
console.log(qualMenor(array));