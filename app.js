const scorre1El = document.querySelector('.scorre1') 
const scorre2El = document.querySelector('.scorre2') 
const button1 = document.querySelector('.btn-1')
const button2 = document.querySelector('.btn-2')
const gameLevelEl = document.querySelector('#game-level')
const cleanEl = document.querySelector('.clean')


let scorePlayer1 = 0
let scorePlayer2 = 0
let gameLevel = 3
let gameOver = false



button1.addEventListener('click', function() {
    if (!gameOver) {
        scorePlayer1++
        if(gameLevel <= scorePlayer1) {
            gameOver = true
            scorre1El.style.color = 'green'
            scorre2El.style.color = 'red'
        }
    }
    scorre1El.textContent = scorePlayer1
})


button2.addEventListener('click', function() {
    if (!gameOver) {
        scorePlayer2++
        if(gameLevel <= scorePlayer2) {
            gameOver = true
            scorre2El.style.color = 'green'
            scorre1El.style.color = 'red'
        }
    }
    scorre2El.textContent = scorePlayer2
})



gameLevelEl.addEventListener('change', () => {
    let value = +gameLevelEl.value
    gameLevel = value
})



cleanEl.addEventListener('click', reset)

function reset() {
    let scorePlayer1 = 0
    let scorePlayer2 = 0
    let gameLevel = 3
    let gameOver = false
    scorre1El.style.color = 'rgb(19, 72, 133)'
    scorre2El.style.color = 'rgb(19, 72, 133)'
    scorre1El.textContent = '0'
    scorre2El.textContent = '0' 
}