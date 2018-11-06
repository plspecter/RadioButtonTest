jQuery(document).ready(function () {
    console.log("this is ready");

    reset();

    var userGuess1;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;


    $("#click").on("click", function () {

        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);


        var answers = ['ice', 'FrozenSeaway'];
        var wrongAnswers = ['fire', 'poison', 'thunder'];
        userGuess1 = $("input[name='inlineRadioOptions1']:checked").val()
        userGuess2 = $("input[name='inlineRadioOptions2']:checked").val()

        if (userGuess1 === answers[0])  {
            correct++;
            //This prints the correct answer to the html
            $("#correct").text(correct);
            $("#correct").html();
            console.log(correct, + "correct")
        } else if (userGuess1 === undefined) {
            unanswered++
            $("#unanswered").text(unanswered);
            $("#unanswered").html();
            console.log("you did not choose an answer")
        } else {
            incorrect++;
            $("#incorrect").text(incorrect);
            $("#incorrect").html();
            console.log(incorrect, + "incorrect")
            console.log(incorrect)
        }

        //==QUESTION 2

        if (userGuess2 === answers[1])  {
            correct++;
            //This prints the correct answer to the html
            $("#correct").text(correct);
            $("#correct").html();
            console.log(correct, + "correct")
            console.log(incorrect)
        } else if (userGuess1 === undefined) {
            unanswered++
            $("#unanswered").text(unanswered);
            $("#unanswered").html();
            console.log("you did not choose an answer")
        } else {
            incorrect++;
            $("#incorrect").text(incorrect);
            $("#incorrect").html();
        }

        // } else if (userGuess1 === $('input[#fire="inlineRadioOptions1"]:checked'))  {
        //     incorrect++;
        // }
        // else if (userGuess1 === $('input[#poison="inlineRadioOptions1"]:checked'))  {
        //     incorrect++;
        // }
        // else if (userGuess1 === $('input[#thunder="inlineRadioOptions1"]:checked')) {
        //     incorrect++;
        // };
        $("#reset").on("click", function () {
            reset();
        })
        
        // function choice() {
        //     var type = $("radio");
        //     if (radio[1].checked) {
        //         var radio = type[0].value;
        //         correct++
        //     }
        //     else {
        //         incorrect++
        //     }
        // }



    });



});