/*  let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

let posicaoPecaLinha = 3;
let posicaoPecaColuna = 8;

let ataqueFeito = false;

if (posicaoRainhaLinha === posicaoPecaLinha ||
    posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueFeito = true;
}

// Diagonal superior direita
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna + i;

    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}

// Diagonal inferior esquerda
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna - i;

    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}

// Diagonal superior esquerda
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna - i;

    if (linhaRainha > 8 || colunaRainha < 1) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}

// Diagonal inferior direita
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna + i;

    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    }

    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}

if (ataqueFeito) {
    console.log("Parabéns para a Rainha");
} else {
    console.log("Não foi dessa vez!");
}
*/



/* Declarando a posição da rainha */
let posicaoRainhaLinha= 4;
let posicaoRainhaColuna=4;

/* Declarando a posição da Peça a ser atacada na diagonal superior direita*/
let posicaoPeçaLinha =  6;
let posicaoPeçaColuna = 2; 

/* Declarando a posição da Peça a ser atacada na diagonal inferior esquerda
let posicaoPeçaLinha =  1;
let posicaoPeçaColuna = 1; */

let ataqueFeito="false";


if((posicaoRainhaLinha === posicaoPeçaLinha) || (posicaoRainhaColuna === posicaoPeçaColuna)){
   ataqueFeito="true";
}





// laço de repetiçao para diagonal superior direita
for(let i=1; i<8; i+=1){

  let linhaRainha = posicaoRainhaLinha +i;
  let colunaRainha=  posicaoRainhaColuna +i ;


  if ( linhaRainha > 8 || colunaRainha > 8){
    break;
  }

  if ( (posicaoPeçaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)){
    ataqueFeito="true";
  }

};



  // laço de repetiçao para diagonal inferior esquerda
for(let i=1; i<8; i+=1){

  let linhaRainha = posicaoRainhaLinha -i;
  let colunaRainha=  posicaoRainhaColuna -i ;


  if ( linhaRainha < 1 || colunaRainha < 1){
    break;
  }

  if ( (posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)){
    ataqueFeito="true";
  }

};



// Diagonal superior esquerda
for(let i=1; i<8; i+=1){

  let linhaRainha = posicaoRainhaLinha +i; // a linha aumenta; 
  let colunaRainha=  posicaoRainhaColuna -i ;// enquanto a coluna diminui;


  if ( linhaRainha > 8 || colunaRainha > 1){
    break;
  }

  if ( (posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)){
    ataqueFeito="true";
  }
};


 // laço de repetiçao para diagonal inferior direita
 for(let i=1; i<8; i+=1){

  let linhaRainha = posicaoRainhaLinha -i; // diminui a linha e aumenta a coluna
  let colunaRainha=  posicaoRainhaColuna +i ;


  if ( linhaRainha < 1 || colunaRainha > 8){
    break;
  }

  if ( (posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)){
    ataqueFeito="true";
  }


 }

console.log(ataqueFeito);

/* 
if (ataqueFeito) {
    console.log("Parabéns para a Rainha");
} else {
    console.log("Não foi dessa vez!");
}
*/


