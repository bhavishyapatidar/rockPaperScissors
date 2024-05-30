document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
    const clearButton = document.getElementById('clear-game');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = getResult(playerChoice, computerChoice);
            displayResult(playerChoice, computerChoice, result);
        });
    });

    clearButton.addEventListener('click',() => {
        resultText.textContent ='';
     });
    function getResult(player, computer) {
        if (player === computer) {
            return 'It\'s a draw!';
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        } 
        
        return 'You lose!';
    }
   
    function displayResult(player, computer, result) {
        resultText.textContent = `You chose ${player}, computer chose ${computer}. ${result}`;
    }
});

