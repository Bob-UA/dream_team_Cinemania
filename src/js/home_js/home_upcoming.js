const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const UPCOMING_END_POINT = 'movie/upcoming';
const GENRES_END_POINT = 'genre/movie/list';

async function getRandomFilm() {
  const upcomingURL = `${BASE_URL}${UPCOMING_END_POINT}?api_key=${API_KEY}`;
  const response = await fetch(upcomingURL);
  const data = await response.json();

  if (data.results.length === 0) {
    showNoFilmsMessage();
    return;
  }

  const randomIndex = Math.floor(Math.random() * data.results.length);
  const film = data.results[randomIndex];
  displayFilmInformation(film);
}

function showNoFilmsMessage() {
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = '<p>На жаль, фільми не знайдено.</p>';
}

function toggleLibraryStatus(filmId, libraryButton) {
  const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || {};

  if (myLibrary[filmId]) {
    delete myLibrary[filmId];
    libraryButton.textContent = 'Add to my library';
  } else {
    myLibrary[filmId] = true;
    libraryButton.textContent = 'Remove from my library';
  }

  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

async function displayFilmInformation(film) {
  const genresURL = `${BASE_URL}${GENRES_END_POINT}?api_key=${API_KEY}`;
  const genresResponse = await fetch(genresURL);
  const genresData = await genresResponse.json();

  const genreNames = film.genre_ids.map(genreId => {
    const genre = genresData.genres.find(g => g.id === genreId);
    return genre ? genre.name : '';
  });

  const { vote_average, vote_count, popularity, overview } = film;
  const genres = genreNames.join(', ');

  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = `
    <div class="film-card">
      <img class="upcoming-img" src="https://image.tmdb.org/t/p/original/${
        film.backdrop_path
      }" alt="${film.title}" />
      <div class="film-details">
        <h2 class="upcoming-film-title">${film.title}</h2>
        <ul class="upcoming-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Release date</p>
            <p class="date">${formatDate(film.release_date)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Vote / Votes</p>
            <div class="rating-wraper">
              <p class="rating">${vote_average}</p>
              <p class="slesh">/</p>
              <p class="rating">${vote_count}</p>
            </div>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${formatPopularity(popularity)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${genres}</p>
          </li>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${overview}</p>
        <button id="libraryButton" data-film-id="${
          film.id
        }" class="btn my-library-btn" type="button">Add to my library</button>
      </div>
    </div>
  `;
  updateLibraryButton(film.id);
  document.getElementById('libraryButton').onclick = function () {
    toggleLibraryStatus(film.id, this);
  };
}

function updateLibraryButton(filmId) {
  const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || {};
  const libraryButton = document.getElementById('libraryButton');

  if (myLibrary[filmId]) {
    libraryButton.textContent = 'Remove from my library';
  } else {
    libraryButton.textContent = 'Add to my library';
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function formatPopularity(popularity) {
  return Number(popularity).toFixed(1);
}

getRandomFilm();
