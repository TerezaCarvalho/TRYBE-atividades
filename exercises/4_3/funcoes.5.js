/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2.
*/


let arrayInt = [2, 3, 2, 5, 8, 2, 3];
let repetido = 0;
let checar = 0;
let maisvezes=0;

for( let i =0; i <= arrayInt.length; i++){

    for( let j=0; j<= arrayInt.length;j++){
        if ( arrayInt[j]===arrayInt[i]){
            checar++;
            if(checar > maisvezes){  // verifica qual quantidade é maior, a atual ou armazenada no maisvezes
                repetido = arrayInt[i]; // não é repetido = checar pq checar tem a quantidade de vezes
                maisvezes = checar;  // recebe o valor de checar pq usamos o checar para verificar 
                checar=0; // zerada para fazer a contagem da nova posiçao.
            }


        }
    }    
}

console.log(repetido);