
const movieTitle = document.getElementById('movie-title');
const movieGenre = document.getElementById('movie-genre');
const movieCast = document.getElementById('movie-cast');
const movieRating = document.getElementById('movie-rating');
const movieReleased = document.getElementById('movie-released');
const movieDirector = document.getElementById('movie-director');
const moviePoster = document.getElementById('movie-poster');
const apiKey = 'adff2bf8';

const movieInfoDiv = document.querySelector('.movie-info');
movieInfoDiv.style.display = 'none';

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;

    function updateMovieInfo(data) {
        movieTitle.textContent = data.Title;
        movieGenre.textContent = data.Genre;
        movieCast.textContent = data.Actors;
        movieRating.textContent = data.imdbRating;
        movieReleased.textContent = data.Released;
        movieDirector.textContent = data.Director;
        moviePoster.src = data.Poster;
        movieInfoDiv.style.display = 'block';
    }

    fetch(`https://www.omdbapi.com/?t=${query}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            updateMovieInfo(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
});
