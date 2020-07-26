function salvarImagens () {
    let inputImg = document.getElementById ('inputImage');

    if (inputImg.files && inputImg.files[0]) {
      var readerImg = new FileReader ();

      readerImg.onload = function (e) {
        let imagens = [];

        // Tenta carregar o array de imagens do Local Storage
        let db_imgs = localStorage.getItem ('db_imgs');
        if (db_imgs) {
          imagens = JSON.parse (db_imgs);
        }

        // Insere a imagem no array
        let novaImagem = { "imagem": e.target.result };
        imagens.push (novaImagem);

        // Salvar o array de imagens no localStorage
        localStorage.setItem ('db_imgs', JSON.stringify(imagens));
      };

      readerImg.readAsDataURL (inputImg.files[0]);
    }

  }

  function exibirImagens () {
    let tela = document.getElementById ('tela');
    let textoHTML = '';

    // Fazer alguma coisa montando o textoHTML

    // Mostrar o código na div tela
    tela.innerHTML = textoHTML

  }

  botaoSalvar = document.getElementById ('btnSalvarImagens');
  botaoSalvar.addEventListener ('click', salvarImagens);

  botaoExibir  = document.getElementById ('btnExibirImagens');
  botaoExibir.addEventListener ('click', exibirImagens);