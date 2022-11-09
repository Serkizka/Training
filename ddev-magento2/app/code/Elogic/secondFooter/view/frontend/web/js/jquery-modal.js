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
    // let guesses = (".guessField").val();
    let guessess_p = [];
    $(".buttonSubmit").click(function (){


        alert(randomNumber)
             guessess_p += " " +$(".guessField").val();
            if($(".guessField").val() > randomNumber) {
                $(".lastResult").html('The number entered was greater than the random number');
            } else if($(".guessField").val() < randomNumber) {
                $(".lastResult").html('The number entered was below the random number');
            } else if($(".guessField").val() == randomNumber) {
                // create an array
                let guessess_array = guessess_p.split(' ');

                // get last element of array
                let lastEl = guessess_array.slice(-1);

                // add span to el of array
                let lastElWithSpan = "<span class='pink'>" + lastEl + "</span>";

                guessess_array[guessess_array.length-1] = lastElWithSpan;
                console.log(guessess_array);


                // // add background-color for last element
                // let $lastEl = $(lastEl);
                // let addBackgroundColor = $lastEl.css("background-color", "pink");
                //$(".rightAnswer").text("Previous guesses:" + guessess_array.join(' '));
                $(".rightAnswer").html("Previous guesses:" + guessess_array.join(' '))
                $(".lastResult").css("display", "none");
            }
        $(".guessField").val("");
    })

});
