let estadoSelect = document.getElementById('estado');

  function mostraEstados(){
   
        let estados = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espirito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Santa Catarina',
        'São Paulo',
        ]

      for(let i=0; i<estados.length; i+=1 ){
          let opcao = document.createElement('opcao');
          opcao.innerHTML=estados[i];
          estadoSelect.appendChild(opcao);
      }

    }


  mostraEstados();


 let  inputData = document.getElementById('data-entrada');
  function verificaData(){
    let verificaDatas=inputData.nodeValue.split('/');
    for(let i=o; i<verificaDatas.length; i+=1){
        if(verificaDatas[0] <1 || verificaDatas > 31){
            alert ("data inválida");
        }else if(verificaDatas[1]<1 || verificaDatas >12){
            alert("data inválida");
        }else if(verificaDatas[2] <0){
            alert("data inválida")
        }
    }

  }

  let inptEmail = document.getElementById('email');

  function verificaEmail(){
    let hieroglifos =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let email = inptEmail.nodeValue;
    if (hieroglifos.test(email)){
        console.log("Email válido")
    }else{
        console.log("Email inválido")
    }
  }



  const btncadastro = document.getElementById('enviar');
  btncadastro.addEventListener('click', function (event) {
    verificaData();
    verificaEmail();
    event.preventDefault();
  });



  