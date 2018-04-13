/* global $ */

console.log('hi');



$('button').click(function(){
    var userInput = $('input').val();
    console.log(userInput);


    $.ajax({
        url:"https://www.omdbapi.com/?apikey=90d4b10a&y=2016&s=" + userInput,
        method: "GET",
        success: function(response){
            console.log(response);
            displayTitle(response);
            //displayYear(response);
            imdbLINK(response);
        },
    });

});

function displayTitle(response){
    console.log(response.Search[0].Title);
    $('#name').append(response.Search[0].Title);
}

function displayYear(response){
    console.log(response);
    var imdbResponse = response.Search[0].imdbID;
    console.log(imdbResponse);
    $('#year').append("<a href='imdb.com/title/" + imdbResponse + "> Check it out here! </a>");
}

function imdbLINK(response){
    console.log(response);
    var imdbResponse = response.Search[0].imdbID;
    console.log(imdbResponse);
    $('#description').append("<a href='https://imdb.com/title/" + imdbResponse + "'> Check it out here! </a>");
}