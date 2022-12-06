
$("#random_button").click(function(){
    var shuffle_choice = Math.floor(Math.random() * 15);
    window.location.href = 'game_screen/'+shuffle_choice+'.html';
});
