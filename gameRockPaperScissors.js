function computerSelect(){
    let random = Math.floor((Math.random()*3)+1);

    if(random === 1){
        //console.log('rock');
        return 'rock';
    }else if(random === 2){
        //console.log('Paper');
        return 'paper';
    }else{
        //console.log('Scissor');
        return 'scissor';
    }  
}
  

function playRound(computerSelect, playerSelect){
    let comput = computerSelect;
    let player = playerSelect;
    let resultado = document.querySelector('#mostrarResult');
        
    
    if(comput == player){
        resultado.textContent='TIE!!!';
        return 'empate';
        //TIE

    }else if(comput == 'rock' && player == 'paper'){
        resultado.textContent='WIN!!!';
        return 'ganaste';
        //rock paper

    }else if(comput == 'rock' && player == 'scissor'){
        resultado.textContent='LOSE!!!';
        return 'perdiste';
        //rock scissor

    }else if(comput == 'paper' && player == 'rock'){
        resultado.textContent='WIN!!!';
        return 'ganaste';
        //paper rock

    }else if(comput == 'paper' && player == 'scissor'){
        resultado.textContent='LOSE!!!';
        return 'perdiste';
        //paper scissor

    }else if(comput == 'scissor' && player == 'rock'){
        resultado.textContent='WIN!!!';
        return 'ganaste';
        //scissor rock

    }else if(comput == 'scissor' && player == 'paper'){
        resultado.textContent='LOSE!!!';
        return 'perdiste';
        //scissor paper

    }else{
        console.log('failed if');
    }
}

// CONTAINER AND TITLE
const container = document.createElement('div');
    container.className='container';

    document.body.append(container);

const titleGame = document.createElement('div');
    titleGame.className = 'titleGame';
    titleGame.textContent = 'ROCK PAPER SCISSORS';
    
    container.appendChild(titleGame);


// BUTTONS
const btns = document.createElement('div');
    btns.id = 'btns';
    btns.className='btns';

    container.appendChild(btns);


// BUTTON ROCK
const btnRock = document.createElement('button'); 
    btnRock.textContent = 'ROCK';
    btnRock.id = 'rock';
    btnRock.className = 'btn';

    btns.append(btnRock);

// BUTTON PAPER
const btnPaper = document.createElement('button');
    btnPaper.textContent = 'PAPER';
    btnPaper.id = 'paper';
    btnPaper.className = 'btn';
    
    btns.append(btnPaper);


// BUTTON SCISSOR
const btnScissor = document.createElement('button');
    btnScissor.textContent = 'SCISSOR';
    btnScissor.id = 'scissor';
    btnScissor.className = 'btn';

    btns.append(btnScissor);

const mostrarResultado = document.createElement('div');
    mostrarResultado.id='mostrarResult';

    container.appendChild(mostrarResultado);

    
const buttonSelections = document.querySelectorAll('.btn');

// EVENTS
buttonSelections.forEach(boton => boton.addEventListener('click', function(e){
    let playerSelection = e.target.textContent.toLowerCase();
    let compuRandom = computerSelect();
    playRound(compuRandom, playerSelection);
}));
