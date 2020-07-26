onload = () => {
    
    let contadores = document.getElementsByClassName('contador');//Selecionar o contador
    console.log(contadores[1]); 
    for(let i = 0; i < contadores.length; i++){
        contadores[i].querySelector('.incremento').onclick = incremento;
        contadores[i].querySelector('.decremento').onclick = decremento;
    }
}

function incremento (evt){
    let contador = evt.target.parentNode;
    let valor = contador.querySelectorAll('.valor');
    console.log(valor);
    valor.innerHTML = +valor.innerHTML+1;//mudar valor par int com operador unario ou
                       //window.parseInt(valor.innerHTML);
    
}

function decremento (event){
    let contador = event.target.parentNode;
    let valor = contador.querySelectorAll('.valor');
    valor.innerHTML = valor.innerHTML-1;//mudar valor par int com operador unario ou
                       //window.parseInt(valor.innerHTML);
}