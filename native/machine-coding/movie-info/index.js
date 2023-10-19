
const $movieTitle = document.getElementById('movie-title');
const $movieGenre = document.getElementById('movie-genre');
const $movieCast = document.getElementById('movie-cast');
const $movieRating = document.getElementById('movie-rating');
const $movieReleased = document.getElementById('movie-released');
const $movieDirector = document.getElementById('movie-director');
const $moviePoster = document.getElementById('movie-poster');
const apiKey = 'adff2bf8';

const $movieInfo = document.querySelector('.movie-info');
$movieInfo.classList.add('hidden');

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(searchForm)
    const query = formData.get('movie-name');

    function updateMovieInfo(data) {
        if (data.Response === "False") {
            alert("Please enter a valid movie name.");
        } else {
            $movieTitle.textContent = data.Title;
            $movieGenre.textContent = data.Genre;
            $movieCast.textContent = data.Actors;
            $movieRating.textContent = data.imdbRating;
            $movieReleased.textContent = data.Released;
            $movieDirector.textContent = data.Director;
            $moviePoster.src = data.Poster;
            $movieInfo.classList.remove('hidden');
        }
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
