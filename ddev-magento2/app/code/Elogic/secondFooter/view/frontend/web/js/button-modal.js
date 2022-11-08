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
let buttonSubmit = document.querySelector('.buttonSubmit');
let falseInput = document.querySelector('.falseInput');
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');

let lowOrHi = document.querySelector('.lowOrHi');
let guessCount = 1;

function checkGuess() {

    if (guessCount < 1 || guessCount > 50) {
        falseInput.textContent = 'Write a number from 1 to 50';
    }

    // if (guessCount === 1 || guessCount > 1) {
    //     guesses.textContent = 'Last guesses: ';
    // }
    // guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
            guesses.textContent = 'Previous guesses: ';
        alert(randomNumber);
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess > randomNumber) {
        lastResult.textContent = "The number entered was greater than the random number";
    } else if (userGuess > randomNumber) {
        lastResult.textContent = "The number entered was below the random number";
        alert(randomNumber);
    }
    guessField.value = '';
}

buttonSubmit.addEventListener('click', checkGuess);


// function setGameOver() {
//     buttonSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Play Again?';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
// }


