var dados = {
  "contatos": [
    {
      "id": 1,
      "img": "https://source.unsplash.com/300x250/?man&sig=1",
      "nome": "João",
      "profissao": "Designer",
      "empresa": "PUC Minas",
      "endereco": "Contagem",
      "cidade": "Rua X, 9",
      "telefone": "9999999",
      "email": "joao@yahoo.com.br"
    }, 
    
    {
      "id": 2,
      "img": "https://source.unsplash.com/300x250/?woman&sig=2",
      "nome": "Maria",
      "profissao": "Diretora de RH",
      "empresa": "FCA Automóveis",
      "endereco": "Betim",
      "cidade": "Rua X, 9",
      "telefone": "8888889",
      "email": "maria@hotmail.com"
    }, 
    
    {
      "id": 3,
      "img": "https://source.unsplash.com/300x250/?man&sig=3",
      "nome": "Guilherme",
      "profissao": "Professor",
      "empresa": "UFMG",
      "endereco": "Cidade tal",
      "cidade": "Belo Horizonte",
      "telefone": "777777777",
      "email": "gui@gmail.com"
    }
  ]
}

function exibeContatos(){
  var tela = document.getElementById("tela");
  var texto = '';
  for(i = 0; i < dados.contatos.length; i++){
    let contato = dados.contatos[i];

    texto = texto+`            <div class="card m-3">
    <img src="${contato.img}" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${contato.nome}</h5>
        <h6 class="card-sub-title">${contato.profissao}</h6>
        <p class="card-text">
          <strong>${contato.empresa}</strong>
          <br>
          ${contato.endereco}
          <br>
          ${contato.telefone}
        </p>
        <a href="" class="card-link"><i class="fa fa-envelope"></i>${contato.email}</a>
      </div>
    </div>`
  }
  tela.innerHTML=texto;
}

onload = function(){
  exibeContatos();
}