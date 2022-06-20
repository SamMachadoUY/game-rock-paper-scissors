console.log('hola');

function computerPlay(){
    let random = Math.floor((Math.random()*3)+1);
    
    if(random === 1){
        console.log('rock');
    }else if(random === 2){
        console.log('Paper');
    }else{
        console.log('Scissors');
    }
    return random;
}
alert(computerPlay());
