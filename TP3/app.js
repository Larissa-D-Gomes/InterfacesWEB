//Declarar constante
const API_KEY = 'cf002ec80672498494ea6144766c274a';

function exibeNoticias2(){
    let divTela = document.getElementById('ln');
    let divD = document.getElementById('destaque');
    let divC = document.getElementById('carousel');
    divC.innerHTML = '';
    divC.innerHTML = '';
    let dados = JSON.parse (this.responseText);
    let texto = '';
    var noticia = dados.articles[0];
    var data = new Date (noticia.publishedAt);
    divD.innerHTML = ` 
                <div class="row no-gutters">
                    <div class="col-md-6 fixedHeightImg">
                    <img src="${noticia.urlToImage}" class="card-img" alt="...">
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <small>${data.toLocaleDateString ()} - 
                        ${noticia.source.name} - 
                        ${noticia.author}</small>
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.content}</p>
                        <a href="${noticia.url}" target="_blank">Ler mais.</a>
                    </div>
                </div>`
   
    // Montar texto HTML das noticias
   for (i=1; i< dados.articles.length-1; i++) {
       noticia = dados.articles[i];
       data = new Date (noticia.publishedAt);

       texto = texto + `
            <div class="col-6">
            <div class="card" style="max-width: 360px;">
                <div class="card-body">
                <small>${data.toLocaleDateString ()} - 
                ${noticia.source.name} - 
                ${noticia.author} </small>
                <h5 class="card-title">${noticia.title}</h5>
                </div>
                <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${noticia.content}</p>
                <a href="${noticia.url}" target="_blank">Ler mais.</a>
                </div>
            </div>
            </div>        
       `;
   };

   // Preencher a DIV com o texto HTML
   divTela.innerHTML = texto;
}

function exibeNoticias(){
    let divTela = document.getElementById('ln');
    let divD = document.getElementById('destaque');
    let divC = document.getElementById('carousel');
    divC.innerHTML = `      <div class="col-12">
    <div id="carouselExampleCaptions" class="carousel slide carousel2 carousel1" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active fixedHeightImg ">
          <img src="img/banner.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-block d-md-block">
            <h5>Escute ao novo álbum da banda 'Everyday Life'!</h5>
            <p>No dia 22 de novembro de 2019, a banda lançou seu mais novo disco.</p>
          </div>
        </div>
        <div class="carousel-item fixedHeightImg">
          <img src="img/coldplay2.jpg.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-block d-md-block">
            <h5>Coldplay anuncia que não haverá tour em nova era.</h5>
            <p>Chris Martin afirmou em entrevista que banda vai trabalhar nos próximos anos para tentar criar shows
              que sejam sustentáveis e ativamente benéficos..</p>
          </div>
        </div>
        <div class="carousel-item fixedHeightImg">
          <img src="img/instruments.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-block d-md-block">
            <h5>Assista ao clipe de 'Orphans'!</h5>
            <p>O primeiro single da era 'Everyday Life' veio acompanhado de um belíssimo clipe, com cenas gravadas
              durante a producação do álbum.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>`
    let dados = JSON.parse (this.responseText);
    let texto = '';
    var noticia = dados.articles[0];
    var data = new Date (noticia.publishedAt);
    divD.innerHTML = ` 
                <div class="row no-gutters">
                    <div class="col-md-6 fixedHeightImg">
                    <img src="${noticia.urlToImage}" class="card-img" alt="...">
                    </div>
                    <div class="col-md-6">
                    <div class="card-body">
                        <small>${data.toLocaleDateString ()} - 
                        ${noticia.source.name} - 
                        ${noticia.author}</small>
                        <h5 class="card-title">${noticia.title}</h5>
                        <p class="card-text">${noticia.content}</p>
                        <a href="${noticia.url}" target="_blank">Ler mais.</a>
                    </div>
                </div>`
   
    // Montar texto HTML das noticias
   for (i=1; i< dados.articles.length-1; i++) {
       noticia = dados.articles[i];
       data = new Date (noticia.publishedAt);

       texto = texto + `
            <div class="col-6">
            <div class="card" style="max-width: 360px;">
                <div class="card-body">
                <small>${data.toLocaleDateString ()} - 
                ${noticia.source.name} - 
                ${noticia.author} </small>
                <h5 class="card-title">${noticia.title}</h5>
                </div>
                <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${noticia.content}</p>
                <a href="${noticia.url}" target="_blank">Ler mais.</a>
                </div>
            </div>
            </div>        
       `;
   };

   // Preencher a DIV com o texto HTML
   divTela.innerHTML = texto;
}

function executarPesquisa (){
  //Coletar valor que esta no campo 
  let query = document.getElementById("txtPesquisa").value;
  function error (err){
      console.log("ERRO",err.code);
  }
  //Criar objeto para disparar requisicao AJAX
  let xhr = new XMLHttpRequest();
  //Atribuir funcao para exibir a noticia assim que os dados chegarem 
  xhr.onload = exibeNoticias2;

  xhr.onerror = error;  
  //Abrir requisicao
  xhr.open ('GET', `http://newsapi.org/v2/everything?q=${query}&apiKey=cf002ec80672498494ea6144766c274a`);
  let divTela = document.getElementById('alert');

  $("#sal").removeClass("dis");
  divTela.innerHTML = `Pesquisa: ${query}`;
  xhr.send();
}

function executarPesquisa1 (){
    //Coletar valor que esta no campo 
   // let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&apiKey=cf002ec80672498494ea6144766c274a`);
    let divTela = document.getElementById('alert');
    divTela.innerHTML = `Início`;
    $("#sal").addClass("dis");

    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa2 (){
    //Coletar valor que esta no campo 
   // let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias2;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `https://newsapi.org/v2/everything?sources=globo&q=esporte&apiKey=cf002ec80672498494ea6144766c274a
    `);
    let divTela = document.getElementById('alert');
    divTela.innerHTML = `Esportes `;
    $("#sal").addClass("dis");

    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa3 (){
    //Coletar valor que esta no campo 
   // let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias2;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=cf002ec80672498494ea6144766c274a`);
    let divTela = document.getElementById('alert');
    divTela.innerHTML = `Internacional `;

    $("#sal").addClass("dis");

    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa4 (){
    //Coletar valor que esta no campo 
   // let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias2;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `https://newsapi.org/v2/everything?sources=globo&q=corona&apiKey=cf002ec80672498494ea6144766c274a`);
    let divTela = document.getElementById('alert');
    divTela.innerHTML = `COVID-19`;
    $("#sal").addClass("dis");
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function executarPesquisa5 (){
    //Coletar valor que esta no campo 
   // let query = document.getElementById("txtPesquisa").value;
    function error (err){
        console.log("ERRO",err.code);
    }
    //Criar objeto para disparar requisicao AJAX
    let xhr = new XMLHttpRequest();
    //Atribuir funcao para exibir a noticia assim que os dados chegarem 
    xhr.onload = exibeNoticias2;
    xhr.onerror = error;  
    //Abrir requisicao
    xhr.open ('GET', `https://newsapi.org/v2/everything?sources=globo&q=show&apiKey=cf002ec80672498494ea6144766c274a`);
    let divTela = document.getElementById('alert');
    divTela.innerHTML = `Música`;
    $("#sal").addClass("dis");
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
}

function save(){
  document.getElementById ('tex').value = document.getElementById("txtPesquisa").value;
  $("#my_form").removeClass("dis");
}

function can(){
  $("#my_form").addClass("dis");
}

function exibir(){
  let tela = document.getElementById ('pesq');
  let textoHTML = '';
  let salvas = [];

  let db = localStorage.getItem ('db');
  if (db) {
    salvas = JSON.parse (db);
  };

  for (i=0; i < salvas.length; i++) {
    textoHTML += `<p class="menuPesq flex-sm-fill nav-link" href="#" id="${salvas[i].texto}">${salvas[i].menu}</p>`;
  }

  // Mostrar o código na div tela
  tela.innerHTML = textoHTML;

  let lista = document.querySelectorAll('.menuPesq');

  //passar por cada elemento do vetor
  lista.forEach((item) => {
      item.onclick = pesquisa;
  });
}

function ok(){
  let inputMenu = document.getElementById ('men').value;
  let inputTex = document.getElementById ('tex').value;

  //console.log(inputMenu, inputTex);
  if(inputMenu != "" && inputTex != ""){
    let salvos = [];

    // Tenta carregar o array 
    let db = localStorage.getItem ('db');
    if (db) {
      salvos = JSON.parse (db);
    }

    // Insere a imagem no array
    let nova = { "menu": inputMenu,
                 "texto": inputTex
               };
    salvos.push (nova);

    // Salvar o array de imagens no localStorage
    localStorage.setItem ('db', JSON.stringify(salvos));
  }else{
    alert("Erro ao salvar. Campos inválidos.");
  }
  exibir();
  $("#my_form").addClass("dis");
}

function pesquisa(e){
  document.getElementById("txtPesquisa").value = e.target.id;
  executarPesquisa();
}



window.addEventListener('load', executarPesquisa1);
window.addEventListener('load', exibir);
/*Add Event Listener associa uma funcao a um evento */
document.getElementById("btn").addEventListener('click', executarPesquisa);
document.getElementById("btn1").addEventListener('click', executarPesquisa1);
document.getElementById("btn2").addEventListener('click', executarPesquisa2);
document.getElementById("btn3").addEventListener('click', executarPesquisa3);
document.getElementById("btn4").addEventListener('click', executarPesquisa4);
document.getElementById("btn5").addEventListener('click', executarPesquisa5);
document.getElementById("sal").addEventListener('click', save);
document.getElementById("can").addEventListener('click', can);
document.getElementById("ok").addEventListener('click', ok);

