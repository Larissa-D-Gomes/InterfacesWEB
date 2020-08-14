
function executar(){
    let tela = document.getElementById("video");
    
    tela.innerHTML = `            
    <iframe max-width="440" max-height="250" src="https://www.youtube.com/embed/aKlwJROuo-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
    <p>Blood on the beat<br>
    Oh my goodness, there's blood on the beat<br>
    Lore of the jungle or the law of the street<br>
    There's blood on, there's blood on the beat<br></p>
    `
}

function executar2(){
    let tela = document.getElementById("video");
    
    tela.innerHTML = `            
    <iframe max-width="440" max-height="250" src="https://www.youtube.com/embed/OWhiCkEY-Yk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
    <p>Daddy, do you not care?<br>
    Is there nothing that you want to say<br>
    I know
    You're hurting too<br>
    But I need, you I do<br>
    </p>
    `
}

function executar3(){
    let tela = document.getElementById("video");
    
    tela.innerHTML = `   
    <iframe max-width="440" max-height="250" src="https://www.youtube.com/embed/PXKYA-zmzTY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    <p>Rosaleen of the Damascene<br>
        Yes, she had eyes like the Moon<br>
        Would have been on the silver screen<br>
        But for the missile monsoon<br>
    </p>
    `
}

function executar4(){
    let tela = document.getElementById("video");
    
    tela.innerHTML = `   
    <iframe max-width="440" max-height="250" src="https://www.youtube.com/embed/lA9-TQE3lTM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    
    <p>
        In a book about the world<br>
        Called The Luminous Things<br>
        There are trees and flowers glowing<br>
        While Jizo Bodhisattva sings<br>
    </p>
    `
}

function executar5(){
    let tela = document.getElementById("video");
    
    tela.innerHTML = `   
    <iframe max-width="440" max-height="250" src="https://www.youtube.com/embed/kayI9QB1-IA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    <p>
        Oh, referee, don't stop the fight<br>
        Everyone can see I'm hurt<br>
        But I'll stand before conquistadors<br>
        Til' I'm champion of the world<br>
    </p>
    `
}

function executar6(){
    let tela = document.getElementById("video");
    
    tela.innerHTML = `   
    <iframe max-width="440" max-height="250" src="https://www.youtube.com/embed/7HmiFxqdgq4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
    <p>What in the world are we going to do?<br>
      Look at what everybody's going through<br>
      What kind of world do you want it to be?<br>
      Am I the future or the history?<br></p>
    `
}

document.getElementById("btn1").addEventListener('click', executar);
document.getElementById("btn2").addEventListener('click', executar2);
document.getElementById("btn3").addEventListener('click', executar3);
document.getElementById("btn4").addEventListener('click', executar4);
document.getElementById("btn5").addEventListener('click', executar5);
document.getElementById("btn6").addEventListener('click', executar6);
