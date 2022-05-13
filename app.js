let countPlayer = document.querySelector('#count-player')
let countComputer = document.querySelector('#count-computer')
let computer_choice = document.querySelector('.computer-choices')
let input = document.querySelector('#textWinner')
let reset = document.querySelector('#playAgain')
let choices = document.querySelectorAll('.choice')
let sound = document.querySelector('.sound')

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

    let text = document.createElement('h1')
    text.className = "textWinner"

    if (input.innerHTML !== ''){
        input.removeChild(input.firstChild)
    }
    
    if (winner === 'player') {
        
        countP++
        countPlayer.textContent = countP

        // sound.setAtribute('src', 'audio/win.mp3')
        // sound.play()
        
        text.textContent = "YOU WON THIS ROUND!!!"
        text.style.color = 'hsl(141, 100%, 40%)'
        input.appendChild(text)
                
    } else if (winner === 'computer') {

        countC++
        countComputer.textContent = countC

        // sound.setAtribute('src', 'audio/loss.mp3')
        // sound.play()

        text.textContent = "YOU LOST THIS ROUND!!!"
        text.style.color = 'red'
        input.appendChild(text)
        
        //countComputer.textContent = Number(countComputer.textContent) + 1
    } else {
        // sound.setAtribute('src', 'audio/draw.mp3')
        // sound.play()

        text.textContent = "DRAW"
        text.style.color = 'yellow'
        input.appendChild(text)
    }
}


function getComputerChoice () {

    let img = document.createElement("img")
    img.className = "computerChoices"
    
    //remove appendchild img
    if (computer_choice.innerHTML !== '') {
        computer_choice.removeChild(computer_choice.firstChild);
    }

    let rand = Math.floor(Math.random() * 3)
    if (rand === 1 ) {
        

        img.src = './images/rock.png'
        computer_choice.appendChild(img)

        return 'rock'

    } else if ( rand === 2 ) {
        

        img.src = `./images/paper.png`
        computer_choice.appendChild(img)

        return 'paper'

    } else {
        
        img.src = `./images/scissors.png`
        computer_choice.appendChild(img)

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

    if (computer_choice.innerHTML !== '' && input.innerHTML !== '') {
        computer_choice.removeChild(computer_choice.firstChild);
        input.removeChild(input.firstChild)
    }

    
 }

choices.forEach(choice => choice.addEventListener('click', play))

reset.addEventListener('click', playAgain)

