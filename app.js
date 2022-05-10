let countPlayer = document.querySelector('#count-player')
let countComputer = document.querySelector('#count-computer')

let reset = document.querySelector('#playAgain')
let choices = document.querySelectorAll('.choice')

//let winner = getWinner(playerChoice, computerChoice)

let winner = ''
let countP = 0
let countC = 0

function play (e) {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice() 
    winner = getWinner(playerChoice, computerChoice)
    console.log(playerChoice, computerChoice, winner);

    countWinner(winner)

}

function countWinner (winner) {
    //console.log(winner);
    if (winner === 'player') {
        
        countP++
        countPlayer.textContent = countP
        //console.log(winner);
        
        // console.log(countPlayer);
        // countPlayer.textContent = Number(countPlayer.textContent) + 1
        // console.log(countPlayer);
    } else if (winner === 'computer') {

        countC++
        countComputer.textContent = countC
        

        //countComputer.textContent = Number(countComputer) + 1
    }
        console.log(winner);
}


function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3)
    if (rand === 1 ) {
        return 'rock'
    } else if ( rand === 2 ) {
        return 'paper'
    } else {
        return 'scissors'
    }

}

function getWinner (p, c) {
    if (p === c) {
        return 'DRAW'
    } else if (p === 'rock' && c === 'paper') {
        return 'player'    
    } else if (p === 'rock' && c === 'scissors') {
        return 'computer'
    } else if (p === 'paper' && c === 'rock') {
        return 'player'
    } else if (p === 'paper' && c === 'scissors') {
        return 'computer'
    } else if (p === 'scissors' && c === 'rock') {
        return 'computer'
    } else {
        return 'player'
    }
}



function playAgain () {
    countPlayer.textContent = 0
    countComputer.textContent = 0

    countP = 0
    countC = 0
 }

choices.forEach(choice => choice.addEventListener('click', play))

reset.addEventListener('click', playAgain)

