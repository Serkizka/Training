// =====================================modal=======================================
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
// =====================================modal=======================================

// =====================================Game=======================================
let randomNumber = Math.ceil(Math.random() * 50);
let buttonSubmit = document.querySelector('.buttonSubmit');
let buttonRestart = document.getElementById('restart-button');
let guessField = document.querySelector('.guessField');
let guessArray = [];
let rightAnswer = document.querySelector('.rightAnswer');
let lastResult = document.querySelector('.lastResult');

alert(randomNumber);

function checkGuess() {
    let userGuess = Number(guessField.value);
    guessArray.push(userGuess);

    if (userGuess > randomNumber) {
        lastResult.textContent = "The number entered was greater than the random number";
    } else if (userGuess < randomNumber) {
        lastResult.textContent = "The number entered was below the random number";
    } else if (userGuess == randomNumber) {
        let lastEl = guessArray[guessArray.length-1];
        let lastElWithSpan = "<span class='last-el__item'>" + lastEl + "</span>";
        guessArray[guessArray.length-1] = lastElWithSpan;
        let guessString = guessArray.toString();
        rightAnswer.innerHTML = "Previous guesses: " + guessArray.join(' ');

        buttonRestart.classList.add("active");
    }
    guessField.value = '';
}

function restartGame() {
    guessArray = [];
    rightAnswer.innerHTML = "";
    randomNumber = Math.ceil(Math.random() * 50);
    buttonRestart.classList.remove("active");
    console.log("My random number: " + randomNumber);
}

buttonSubmit.addEventListener('click', checkGuess);
buttonRestart.addEventListener('click', restartGame);




// function setGameOver() {
//     buttonSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Play Again?';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
// }
// =====================================Game=======================================


