let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');
    attempts++;

    attemptsElement.textContent = attempts;

    if (userGuess === secretNumber) {
        messageElement.textContent = `Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток!`;
        messageElement.style.color = 'green';
    } else if (userGuess < secretNumber) {
        messageElement.textContent = 'Загаданное число больше!';
        messageElement.style.color = 'blue';
    } else {
        messageElement.textContent = 'Загаданное число меньше!';
        messageElement.style.color = 'red';
    }

    document.getElementById('guess').value = '';
}
