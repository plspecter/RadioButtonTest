jQuery(document).ready(function () {
    console.log("this is ready");

    var result1;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    $("#click").on("click", function () {

        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#unanswered").text(unanswered);


   
        if (result1 === $("#ice").html($("input:checked").val()))  {
            correct++
        } else if (result1 === $('input[#fire="inlineRadioOptions1"]:checked'))  {
            incorrect++;
        }
        else if (result1 === $('input[#poison="inlineRadioOptions1"]:checked'))  {
            incorrect++;
        }
        else if (result1 === $('input[#thunder="inlineRadioOptions1"]:checked')) {
            incorrect++;
        };

    
        
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