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

console.log(randomNumber);

function checkGuess() {
    let userGuess = Number(guessField.value);
    guessArray.push(userGuess);

    if (userGuess > randomNumber) {
        lastResult.textContent = "The number entered was greater than the random number";
        lastResult.style.display = "flex";
    } else if (userGuess < randomNumber) {
        lastResult.textContent = "The number entered was below the random number";
        lastResult.style.display = "flex";
    } else if (userGuess == randomNumber) {

        let lastEl = guessArray[guessArray.length-1];
        let lastElWithSpan = "<span class='item-el__last'>" + lastEl + "</span>";
        guessArray[guessArray.length-1] = lastElWithSpan;
        rightAnswer.innerHTML = "Previous guesses" + ": " + guessArray.join(",  ");
        rightAnswer.style.display = "flex";
        lastResult.style.display = "none";
        buttonRestart.classList.add("active");
    }
    guessField.value = '';
}

function restartGame() {
    guessArray = [];
    lastResult.style.display = "none";
    rightAnswer.style.display = "none";
    randomNumber = Math.ceil(Math.random() * 50);
    buttonRestart.classList.remove("active");
    console.log("My random number: " + randomNumber);
}


buttonSubmit.addEventListener('click', checkGuess);
buttonRestart.addEventListener('click', restartGame);
// =====================================Game=======================================


