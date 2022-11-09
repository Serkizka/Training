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
