define(['jquery','ko'], function($, ko) {
    'use strict';

    return function () {
        let showAnswer = ko.observable(false);
        let showRestart = ko.observable(false);
        let guessNumber = 0;
        let newArray = ko.observableArray();
        let message = ko.observable();

        function getRandomNumber() {
            guessNumber = Math.floor(Math.random() * 50) + 1;
            console.log(guessNumber);
        };

        const viewModel = {
            title: ko.observable("Previous guesses: "),
            open: function () {
                $('.modal').addClass('active');
                $('#overlay').addClass('active');
                getRandomNumber();
            },
            check: function () {
                newArray.push($('.guessField').val());
                if ($('.guessField').val() == guessNumber) {
                    showAnswer(true);
                    showRestart(true);
                    message("");
                } else if ($('.guessField').val() < guessNumber) {
                    showAnswer(false);
                    message("The number entered was below the random number");
                } else if ($('.guessField').val() > guessNumber) {
                    showAnswer(false);
                    message("The number entered was greater than the random number");
                }
                $('.guessField').val('');
                // console.log(newArray()[newArray().length-1]);
            },
            restart: function () {
                guessNumber = Math.floor(Math.random() * 50) + 1;
                console.log(guessNumber);
                newArray.removeAll();
                showRestart(false);
            },
            close: function () {
                $('.modal').removeClass('active');
                $('#overlay').removeClass('active');
                newArray.removeAll();
            },
            newArray: newArray,
            message: message,
            showAnswer: showAnswer,
            showRestart: showRestart,
        };
        return viewModel;
    }
});
