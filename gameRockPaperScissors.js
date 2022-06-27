console.log('Rock, Paper or Scissor');

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

function playerSelect(){
    let opSelect = prompt("choise rock, paper or scissor");
    opSelect = opSelect.toLowerCase();
    
    if(opSelect == 'rock'){
      
    }else if(opSelect == 'paper'){
       
    }else if(opSelect == 'scissor'){
       
    }else{
        console.log('fail');
    }
    
    return opSelect;
}

function playRound(computerSelect, playerSelect){
    let comput = computerSelect;
    let player = playerSelect;

    if(comput == player){
        console.log('TIE!');
        return 'empate';
        //TIE

    }else if(comput == 'rock' && player == 'paper'){
        console.log('you win!');
        return 'ganaste';
        //rock paper

    }else if(comput == 'rock' && player == 'scissor'){
        console.log('you lose!');
        return 'perdiste';
        //rock scissor

    }else if(comput == 'paper' && player == 'rock'){
        console.log('you win!');
        return 'ganaste';
        //paper rock

    }else if(comput == 'paper' && player == 'scissor'){
        console.log('you lose!');
        return 'perdiste';
        //paper scissor

    }else if(comput == 'scissor' && player == 'rock'){
        console.log('you win!');
        return 'ganaste';
        //scissor rock

    }else if(comput == 'scissor' && player == 'paper'){
        console.log('you lose!');
        return 'perdiste';
        //scissor paper
    }else{
        console.log('failed if');
    }
}

function game(){
    let a;
    let b;
    let cuantasGano=0, cuantasPerdio=0, cuantasEmpato=0, resultadoRonda;

    for(let i = 1; i<=5 ; i++){  
       a = computerSelect();
       b = playerSelect();
       
       resultadoRonda = playRound(a, b);
       if(resultadoRonda=='ganaste'){
           cuantasGano=cuantasGano+1;
       }else if(resultadoRonda=='perdiste'){
            cuantasPerdio=cuantasPerdio+1;
       }else{
           cuantasEmpato=cuantasEmpato+1;
       }
      
    }
    console.log('el jugador gano: '+cuantasGano);
    console.log('el jugador perdio: '+cuantasPerdio);
    console.log('el jugador empato: '+cuantasEmpato);

}