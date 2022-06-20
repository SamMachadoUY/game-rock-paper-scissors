console.log('hola');

function computerSelect(){
    let random = Math.floor((Math.random()*3)+1);
    
    if(random === 1){
        console.log('rock');
    }else if(random === 2){
        console.log('Paper');
    }else{
        console.log('Scissor');
    }
    
    return random;
}
alert(computerSelect());


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
alert(playerSelect());

function playRound(computerSelect, playerSelect){
    let comput = computerSelect;
    let player = playerSelect;

    if(((comput == 1 && player == 'rock')||(comput == 2 && player == 'paper')||(comput == 3 && player == 'scissor'))){
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
    return;
}

console.log(playRound());