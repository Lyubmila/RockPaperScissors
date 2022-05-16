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

//process of game
function play (e) {
    //get player choices by id
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice() 
    winner = getWinner(playerChoice, computerChoice)
    console.log(playerChoice, computerChoice, winner);
    countWinner(winner)
}

function countWinner (winner) {

    let text = document.createElement('h1')
    text.className = "textWinner"

    //removes previous message if it is exist 
    if (input.innerHTML !== ''){
        input.removeChild(input.firstChild)
    }
    
    //update counter of player
    if (winner === 'player') {
        countP++
        countPlayer.textContent = countP

        //added winner sound
        sound.setAttribute('src', './audio/win.mp3')
        sound.play()
        
        //added winner text
        text.textContent = "YOU WON THIS ROUND!!!"
        text.style.color = 'hsl(141, 100%, 40%)'
        input.appendChild(text)
                
    } else if (winner === 'computer') { //update counter of computer
        countC++
        countComputer.textContent = countC

        //added loser sound
        sound.setAttribute('src', './audio/loss.mp3')
        sound.play()

        //added loser text
        text.textContent = "YOU LOST THIS ROUND!!!"
        text.style.color = 'red'
        input.appendChild(text)
        
        //countComputer.textContent = Number(countComputer.textContent) + 1
    } else {
        sound.setAttribute('src', './audio/draw.mp3') //added draw sound
        sound.play()

        text.textContent = "DRAW"
        text.style.color = 'yellow'
        input.appendChild(text)
    }
}

//created rendom computer choice
function getComputerChoice () {

    let img = document.createElement("img")
    img.className = "computerChoices"
    
    //remove appended previous img from computer choice field
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

//create a rules of game
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

//reset counter
function playAgain () {
    countPlayer.textContent = 0
    countComputer.textContent = 0

    countP = 0
    countC = 0

    //remove computer choice
    if (computer_choice.innerHTML !== '' && input.innerHTML !== '') {
        computer_choice.removeChild(computer_choice.firstChild);
        input.removeChild(input.firstChild)
    }
 }

 //player choices "buttons"
choices.forEach(choice => choice.addEventListener('click', play))
//reset button
reset.addEventListener('click', playAgain)