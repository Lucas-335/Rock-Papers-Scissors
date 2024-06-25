function getComputerChoice(){
    let random = Math.random();
     let computer
    if (random >= 0 && random <= 0.35){
        computer = 'paper';
        return computer
    }
    else if(random > 0.35 && random <= 0.75){
        computer = 'rock'
        return computer
    }
    else{
        computer = 'scissors'
        return computer
    }
}

function getHumanChoice(){
    let human = parseInt(prompt('Escolha entre: \n[1] pedra | [2] papel | [3] tesoura: '));
    if (human == 1){
        return 'rock'
    }
    else if (human == 2){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer){
    switch(human){
        case 'rock':
            if (computer == 'paper'){
                computerScore++;
                console.log(`You lose! ${computer} beats ${human}`)
            }
            else if (computer == 'scissors'){
                humanScore++;
                console.log(`You win! ${human} beats ${computer}`)
            }
            else{
                console.log(`Nobody wins! ${human} and ${computer}`)
            }
            break;
        case 'paper':
            if (computer == 'scissors'){
                computerScore++;
                console.log(`You lose! ${computer} beats ${human}`)
            }
            else if (computer == 'rock'){
                humanScore++;
                console.log(`You win! ${human} beats ${computer}`)
            }
            else{
                console.log(`Nobody wins! ${human} and ${computer}`)
            }
            break;
        case 'scissors':
            if (computer == 'rock'){
                computerScore++;
                console.log(`You lose! ${computer} beats ${human}`)
            }
            else if (computer == 'paper'){
                humanScore++;
                console.log(`You win! ${human} beats ${computer}`)
            }
            else{
                console.log(`Nobody wins! ${human} and ${computer}`)
            }
            break;
    }
}


function playGame(round){
    for(let i = 1;i<=5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        round(humanSelection, computerSelection);
        console.log(`Score: H ${humanScore} x C ${computerScore}`);
    }

    if (humanScore > computerScore){
        return 'Human wins!!!'
    }
    else if (humanScore == computerScore){
        return "It's a tie!!"
    }
    else{
        return 'Computer wins!!!'
    }  
}

console.log(playGame(playRound));