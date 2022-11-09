//=====================Java Script=============================
// let modal = document.getElementById("modal");
// let btn = document.getElementById("footer-button");
// let overlay = document.getElementById("overlay");
// let closeBtn = document.getElementById("modal-close");
//
//
// btn.addEventListener("click", clicked);
// closeBtn.addEventListener("click", close);
//
// function clicked(ev) {
//     overlay.classList.toggle("active");
//     modal.classList.toggle("active");
// }
//
// function close() {
//     overlay.classList.toggle("active");
//     modal.classList.toggle("active");
// }
//
// let randomNumber = Math.ceil(Math.random() * 50);
// let guessField = document.querySelector('.guessField');
// let buttonSubmit = document.querySelector('.buttonSubmit');
// let rightAnswer = document.querySelector('rightAnswer');
// let lastResult = document.querySelector('.lastResult');
//
// alert(randomNumber);
//
//
// function checkGuess() {
//     let userGuess = Number(guessField.value);
//     // if (guessCount === 1 || guessCount > 1) {
//     //     guesses.textContent = 'Last guesses: ';
//     // }
//     // guesses.textContent += userGuess + ' ';
//
//     if (randomNumber === userGuess) {
//         alert('correct answer');
//     }
//
//     if (userGuess > randomNumber) {
//         lastResult.textContent = "The number entered was greater than the random number";
//     } else if (userGuess < randomNumber) {
//         lastResult.textContent = "The number entered was below the random number";
//     }
//     guessField.value = '';
// }
//
// buttonSubmit.addEventListener('click', checkGuess);
//
//
// function setGameOver() {
//     buttonSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Play Again?';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
// }
//=====================Java Script=============================


//=====================Jquery==================================

define(["jquery"], function ($) {
    $("#footer-button").click(function(){
        $("#modal").addClass("active");
        $("#overlay").addClass("active");
    });

    $("#modal-close").click(function(){
        $("#modal").removeClass("active");
        $("#overlay").removeClass("active");
    })

    const randomNumber = Math.ceil(Math.random() * 50);

    $(".buttonSubmit").click(function (){
        $(".guessField").val("");

        $(".guessField").each(function (){
            if($(this).val() < randomNumber) {
                $(".rightAnswer").html('red');
            }
        })
    })

});


