/* 
10- Escreva um programa que, dado o custo de um produto e seu valor de venda, 
calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser 
considerado no cálculo do lucro.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum 
dos seus valores de entrada seja menor que zero.
 */

 let custoProduto = 10;
 let valorVenda = 13;


 if(custoProduto > 0 && valorVenda >0){

    let lucro = ((valorVenda - custoProduto)* 1000);
    let imposto = lucro*0.2;
    let lucroTotal = lucro - imposto;
    console.log(lucroTotal);

 }else{
     console.log("Erro: Valor inválido");
 }



 