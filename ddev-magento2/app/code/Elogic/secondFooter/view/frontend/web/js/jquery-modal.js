define(["jquery"], function ($) {
    $("#footer-button").click(function(){
        $("#modal").addClass("active");
        $("#overlay").addClass("active");
    });

    $("#modal-close").click(function(){
        $("#modal").removeClass("active");
        $("#overlay").removeClass("active");
    })

    let randomNumber = Math.ceil(Math.random() * 50);
    let guessess_p = [];
    console.log("My random number: " + randomNumber);
    $(".buttonSubmit").click(function (){
             guessess_p += " " + $(".guessField").val();
            if($(".guessField").val() > randomNumber) {
                $(".lastResult").html('The number entered was greater than the random number');
            } else if($(".guessField").val() < randomNumber) {
                $(".lastResult").html('The number entered was below the random number');
            } else if($(".guessField").val() == randomNumber) {
                // create an array
                let guessess_array = guessess_p.split(' ');

                // get last element of array
                let lastEl = guessess_array.slice(-1);

                // add span with class to el of array
                let lastElWithSpan = "<span class='last-el__item'>" + lastEl + "</span>";

                // add span for original element
                guessess_array[guessess_array.length-1] = lastElWithSpan;

                // // add background-color for last element
                // let $lastEl = $(lastEl);
                // let addBackgroundColor = $lastEl.css("background-color", "pink");
                //$(".rightAnswer").text("Previous guesses:" + guessess_array.join(' '));
                $(".rightAnswer").html("Previous guesses:" + guessess_array.join(' '))
                $(".lastResult").css("display", "none");

                $("#restart-button").addClass("active");
            }
        $(".guessField").val("");
    })

    $("#restart-button").click(function (){
        guessess_p = [];
        $(".rightAnswer").html("");
        $("#restart-button").removeClass("active");
        randomNumber = Math.ceil(Math.random() * 50);
        console.log("My random number: " + randomNumber);
    })
});
