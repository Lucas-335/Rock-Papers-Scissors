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
        computer = 'scissor'
        return computer
    }
}

// function getHumanChoice(){
//     let human = parseInt(prompt('Escolha entre: \n[1] pedra | [2] papel | [3] tesoura: '));
//     if (human == 1){
//         return 'rock'
//     }
//     else if (human == 2){
//         return 'paper'
//     }
//     else{
//         return 'scissors'
//     }
// }

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer){
    let divRound = document.querySelector('#round')
    let pRound = document.createElement('p')

    switch(human){
        case 'rock':
            if (computer == 'paper'){
                computerScore++;
                pRound.textContent = `You lose! ${computer} beats ${human}`
            }
            else if (computer == 'scissor'){
                humanScore++;
                pRound.textContent = `You win! ${human} beats ${computer}`
            }
            else{
                pRound.textContent = `Nobody wins! ${human} and ${computer}`
            }
            break;
        case 'paper':
            if (computer == 'scissor'){
                computerScore++;
                pRound.textContent = `You lose! ${computer} beats ${human}`
            }
            else if (computer == 'rock'){
                humanScore++;
                pRound.textContent = `You win! ${human} beats ${computer}`
            }
            else{
                pRound.textContent = `Nobody wins! ${human} and ${computer}`
            }
            break;
        case 'scissor':
            if (computer == 'rock'){
                computerScore++;
                pRound.textContent = `You lose! ${computer} beats ${human}`
            }
            else if (computer == 'paper'){
                humanScore++;
                pRound.textContent = `You win! ${human} beats ${computer}`
            }
            else{
                pRound.textContent = `Nobody wins! ${human} and ${computer}`
            }
            break;
    }
    divRound.appendChild(pRound)
}


function* playGame(round, humanChoice){
    let divRound = document.querySelector('#round')

    for(let i = 1;i<=5;i++){
        let countRound = document.createElement('p')
        countRound.textContent = `Round ${i}:`

        divRound.appendChild(countRound);

        let pRound = document.createElement('p')

        let humanSelection = yield humanChoice;
        let computerSelection = getComputerChoice();
        
        round(humanSelection, computerSelection);

        pRound.textContent = `Score: H ${humanScore} x C ${computerScore}`;
        divRound.appendChild(pRound)
    }

    let winnerRound = document.createElement('h2')
    if (humanScore > computerScore){   
        winnerRound.textContent = 'Human wins!!!'
    }
    else if (humanScore == computerScore){
        winnerRound.textContent = "It's a tie!!"
    }
    else{
        winnerRound.textContent = 'Computer wins!!!'
    }
    divRound.appendChild(winnerRound)
}



let divGame = document.createElement('div')

//texto do jogo
let textGame = document.createElement('p')
textGame.textContent = 'Escolha entre: pedra | papel | tesoura: '

let listButtonGame = document.createElement('ul')
listButtonGame.style = 'display: flex; flex-Direction: row'
listButtonGame.style.flex


for (let item of ['Rock','Paper','Scissor']){
    // li
    let itemButtonGame = document.createElement('li')
    itemButtonGame.style.margin = '3px';
    itemButtonGame.style.listStyleType = 'none'

    //button
    let buttonList = document.createElement('button')
    buttonList.textContent = item
    buttonList.id = item.toLowerCase()
    buttonList.addEventListener('click', ()=>{
        game.next(item.toLowerCase())
    })

    //append
    itemButtonGame.appendChild(buttonList)
    listButtonGame.appendChild(itemButtonGame)
}
divGame.appendChild(textGame)
divGame.appendChild(listButtonGame)
let roundGame = document.createElement('div')
roundGame.id = 'round'

divGame.appendChild(roundGame)

document.body.append(divGame)


let game = playGame(playRound);
game.next()