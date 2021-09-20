$('body').append("<form id='movie'></form>");
$('form').css({
    backgroundColor: '#fecef1',
    border: 'solid 2px black',
    padding: '5px',
    }).
    append("<label for='title'>Title:</label><input id='title' name='title' type='text'/><br>");
$('form').append("<label for='rating'>Rating:</label><input id='rating' name='rating' type='number' min='0' max='10'/><br>");
$('input').css({
    margin: '5px',
    padding: '5px',
    minWidth: '25vw',
    })
    .parent().append('<button type="submit" form="movie">Submit</button>');
$('form').on('submit',function(event){
    event.preventDefault();
    const movieTitle = $('input').eq(0).val();
    if ( movieTitle.length < 2) {
        throw Error('Movie Title must be at least two characters');
    };
    $('<div>').addClass("movie")
    .appendTo($('body'))
    .css({
        border: "solid 2px black",
        backgroundColor: "teal",
        margin: '5px',
        padding: '5px',
        }
    ).on('click','button',function(){
        this.parentElement.remove();
    })
    .append(($('<div>').text(movieTitle)).addClass("movie-title"))
    .append($('<div>').text('Rating: ' + $('input').eq(1).val()).addClass("movie-rating"))
    .append($('<button>Delete</button>'));
});
$('<button>').text("Sort A-Z").on("click", function() {
    const allMovies = $('div.movie').get();
    allMovies.sort( (movie1,movie2) => {
        if (movie1.firstChild.innerText > movie2.firstChild.innerText) {
            return 1;
        }
        return -1;
    });
    $('div.movie').remove();
    $('body').append($(allMovies));
}).appendTo($('body')).css({
    margin: '10px',
});
$('<button>').text("Sort by Rating").on("click", function() {
    const allMovies = $('div.movie').get();
    allMovies.sort( (movie1,movie2) => {
        if (movie1.firstChild.nextSibling.innerText === 'Rating: 10') {
            return 1;
        } else if (movie2.firstChild.nextSibling.innerText === 'Rating: 10') {
            return -1;
        };
        if (movie1.firstChild.nextSibling.innerText > movie2.firstChild.nextSibling.innerText) {
            return 1;
        }
        return -1;
    });
    $('div.movie').remove();
    $('body').append($(allMovies));
}).appendTo($('body')).css({
    margin: '10px',
});