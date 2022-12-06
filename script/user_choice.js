var page_id = $("body").attr("id");
var question =0;
var choice = parseInt(page_id);
var user_answers = [];
var show_madlib = [];
$('#next').prop('disabled', true);
$('#previous').prop('disabled', true);

reset_input();
function reset_input(){
    var current = content[choice].speech[question];
    $("#part_of_speech").html(current);
    $("#user_input").focus();
    $("#user_input").val("");
    $('#next').prop('disabled', true);
}

$("#user_input").keyup(function (event) {
    //Sets keyboard events for next and previous buttons
    if (event.which === 13 && $("#user_input").val().trim().length > 0) {
        $("#next").click();
    }
    if (event.which === 8 && question > 0) {
        $("#previous").click();
    }
    //Enables next Button when user enters input
    if ($("#user_input").val().trim().length > 0) {
        $('#next').prop('disabled', false);
    } else {
        $('#next').prop('disabled', true);
    }
    //Enables previous button if question is greater than zero
    if (question) {
        $('#previous').prop('disabled', false);
    }
    else {
        $('#previous').prop('disabled', true);

    }

});


$("#next").click(function () {
    var answer = $("#user_input").val().trim();
    user_answers.push(answer);
    question++;
    var current = content[choice].speech[question];
    reset_input();
    
$("#part_of_speech").html(current);
    $('#previous').prop('disabled', false);
    if (question == content[choice].speech.length) {
        $("#game_screen").hide();
        $("#final_madlib").show();
        madlibs_text();
        $("#final_madlib_text").html(show_madlib);
    }
});


$("#previous").click(function () {
    $("#user_input").focus();
    $("#user_input").val("");
    question--;
    current = content[choice].speech[question];
    alert(question);
    $("#part_of_speech").html(current);
    user_answers.pop();
    if (!question) {
        $('#previous').prop('disabled', true);
    }
});

const madlibs_text = () => {
    for (i = 0; i < user_answers.length; i++) {
        show_madlib.push(content[choice].complete[i] + " <em class='user_madlib'>" + user_answers[i] + "</em> ");
    }
    show_madlib.push(content[choice].complete[content[choice].complete.length - 1]);
}


$("#back_button, #end_session").click(function () {
    $("#quit_modal").show();
});

$("#modal_cancel").click(function () {
    $("#quit_modal").hide();
});

$("#modal_quit,  #try_new").click(function(){
		parent.history.back();
});
