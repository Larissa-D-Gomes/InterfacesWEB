var dados = {
    "noticias": [  
      { 
         "titulo": "Primeira Noticia Fresquinha", 
         "imagem": "https://source.unsplash.com/random/140x140?sig=1", 
         "fonte": "Carta Capital", 
         "data": "08/05/2020", 
         "resumo": "orem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit corporis est iure distinctio modi, atque fuga odit quasi dicta omnis veritatis enim. Commodi, vero.", 
         "url": "http://www.cartacapital.com.br" 
      }, 
      { 
         "titulo": "Segunda Noticia Bombastica", 
         "imagem": "https://source.unsplash.com/random/140x140?sig=2", 
         "fonte": "Carta Capital", 
         "data": "10/05/2020", 
         "resumo": "orem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit corporis est iure distinctio modi, atque fuga odit quasi dicta omnis veritatis enim. Commodi, vero.", 
         "url": "http://www.cartacapital.com.br" 
      }, 
      { 
         "titulo": "Terceira Noticia Fake", 
         "imagem": "https://source.unsplash.com/random/140x140?sig=3", 
         "fonte": "Carta Capital", 
         "data": "18/05/2020", 
         "resumo": "orem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit corporis est iure distinctio modi, atque fuga odit quasi dicta omnis veritatis enim. Commodi, vero.", 
         "url": "http://www.cartacapital.com.br" 
      }   ]
 };
 
 function init () {
   var elemMain = document.querySelector ('main.conteudo');
   var textoHTML = '';
 
   for (i = 0; i < dados.noticias.length; i++) {
     var noticia = dados.noticias[i];
     textoHTML = textoHTML + `
       <div class="box-noticia">
             <img class="thumbnail" src="${noticia.imagem}" width="140" height="140"> 
             <div class="barra-icones"> 
               <div class="icone icone_preferida"></div>
               <div class="icone icone_share"></div>
             </div>
             <h3><a href="${noticia.url}" target="_blank">${noticia.titulo}</a></h3>
             <h4><span class="data">${noticia.data}</span> - 
             <span class="fonte">${noticia.fonte}</span></h4>
             <p class="texto">${noticia.resumo}</p>
       </div>    
     `
   }
 
   elemMain.innerHTML = textoHTML;
 }
 
 
 
 
 