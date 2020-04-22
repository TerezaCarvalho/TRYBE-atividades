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
          let opcao = document.createElement('option');   // .createElement('option') 
          opcao.innerHTML=estados[i];
          estadoSelect.appendChild(opcao);
      }
    }
  mostraEstados();
 let  inputData = document.getElementById('data-entrada');
  function verificaData(){
    let verificaDatas=inputData.value.split('/');   // inputData.value     [10,05,2020]
    if(verificaDatas[0] < 1 || verificaDatas[0] > 31){    // verificaDatas[0]
        alert ("data inválida");
    }else if(verificaDatas[1]<1 || verificaDatas[1] >12){  // verificaDatas[1]
        alert("data inválida");
    }else if(verificaDatas[2] < 0){
        alert("data inválida")
    }
  }
  let inptEmail = document.getElementById('email');
  function verificaEmail(){
    let hieroglifos =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let email = inptEmail.value;
    if (hieroglifos.test(email)){
        alert("Email válido")
    }else{
        alert("Email inválido")
    }
  }
  const btncadastro = document.getElementById('enviar');
  btncadastro.addEventListener('click', function (event) {
    event.preventDefault();  // PRECISA ESTAR NO INICIO PRA NAO ZERAR OS DADOS DO FORMULARIO
    verificaData();
    verificaEmail();
  });