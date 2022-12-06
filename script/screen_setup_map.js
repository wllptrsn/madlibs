$(document).ready(function () {
    var category;
    $("#movies_button").click(function () {
        category = 1;
        optionsScreen();
    });
    $("#music_button").click(function () {
        category = 2;
        optionsScreen();
    });
    
    const showOptions = (title) => title.map(movie => {
        return (
            "<div class='col-6 col-md-3'><div class='movie_card m-1'><img class='card_image'src="+movie.image+" alt="+movie.title+"/> <h2 class='madlibs_title'>" + movie.title + "</h2><p>" + movie.content + "</p><p>"+movie.artist+"</p></div></div>"
        );
    }).join('');
    function optionsScreen() {
        $("#landing_page").hide();
        if(category == 1){$("#choice_row1").html(showOptions(comedy_pages) + showOptions(drama_pages));}
        else if(category ==2){$("#choice_row2").html(showOptions(rap_pages) + showOptions(rock_pages));}
        $("#quit_button").show();
    }
    $("#quit_button").click(function () {
        $("#landing_page").show();
        $("#choice_row1").html("");
        $("#choice_row2").html("");
        $("#quit_button").hide();

    });
    function hello()
    {
        alert("fuck");
    }
});