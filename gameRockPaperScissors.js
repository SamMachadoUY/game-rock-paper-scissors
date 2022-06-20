console.log('hola');

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
    //TIE

    }else if(comput == 'rock' && player == 'paper'){
        console.log('you win!');
    //rock paper

    }else if(comput == 'rock' && player == 'scissor'){
        console.log('you lose!');
    //rock scissor

    }else if(comput == 'paper' && player == 'rock'){
    console.log('you win!');
    //paper rock

    }else if(comput == 'paper' && player == 'scissor'){
    console.log('you lose!');
    //paper scissor

    }else if(comput == 'scissor' && player == 'rock'){
    console.log('you win!');
    //scissor rock

    }else if(comput == 'scissor' && player == 'paper'){
    console.log('you lose!');
    //scissor paper
    }else{
        console.log('failed if');
    }
}

let valueComputerSelect = computerSelect();
let valuePlayerSelect = playerSelect();
playRound(valueComputerSelect, valuePlayerSelect);

valueComputerSelect = computerSelect();
valuePlayerSelect = playerSelect();
playRound(valueComputerSelect, valuePlayerSelect);