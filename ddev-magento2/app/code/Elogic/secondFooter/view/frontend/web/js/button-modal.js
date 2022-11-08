let modal = document.getElementById("modal");
let btn = document.getElementById("footer-button");
let overlay = document.getElementById("overlay");
let closeBtn = document.getElementById("modal-close");


btn.addEventListener("click", clicked);
closeBtn.addEventListener("click", close);

function clicked(ev) {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}

function close() {
    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessField = document.querySelector('.guessField');
let userGuess = Number(guessField.value);
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessSubmit = document.querySelector('.guessSubmit');
let guessCount = 1;
guessField.focus();

function checkGuess() {

    if (guessCount === 1 || guessCount > 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        guesses.textContent = 'Previous guesses: ';
        alert(randomNumber);
    } else {
        lastResult.textContent = "Oops! You're Wrong!";
        alert(randomNumber);
    }
    guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again?';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}


