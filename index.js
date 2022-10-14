let userName = window.prompt('What is your name:')
let playGame = true
let score = 0
let playAgain = ''
while (playGame === true) {
    score = 0
    for(let i = 0; i < questions.length; i++) {
        answer = (window.prompt(questions[i].text)).toUpperCase()
        if (answer === questions[i].correctAnswer) {
            score += 1
        }
    }
    if (score === 10) {
        window.alert(`${userName} scored ${score}/10!
You Win!`)
    }
    else {
        window.alert(`Sorry ${userName}, you only got ${score}/10 right.
Better luck next time!`)
    }
    playAgain = (window.prompt("Would you like to play again?")).toLowerCase()
    if (playAgain === 'no') {
        playGame = false
        break
    }
    else if (playAgain === 'yes') {
        window.alert('Good Luck!')
    }
    else {
        playGame = false
        break
    }
}