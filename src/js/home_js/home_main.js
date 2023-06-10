import axios from 'axios';

const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const UPCOMING_END_POINT = 'movie/upcoming';
const GENRES_END_POINT = 'genre/movie/list';

async function getMovieGenres() {
  try {
    const response = await axios(`${BASE_URL}${GENRES_END_POINT}?`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.genres;
  } catch (error) {
    handleError(error);
    return [];
  }
}

async function getUpcomingMovies() {
  try {
    const response = await axios(`${BASE_URL}${UPCOMING_END_POINT}?`, {
      params: {
        api_key: API_KEY,
      },
    });
    const movies = response.data.results;
    if (movies.length > 0) {
      const movie = getRandomMovie(movies);
      renderMovieSection(movie);
    } else {
      renderNoMoviesMessage();
    }
  } catch (error) {
    handleError(error);
  }
}

function createMovieSection(movie, genres) {
  const section = document.createElement('div');
  section.classList.add('movie-section');

  const posterUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  const poster = document.createElement('img');
  poster.src = posterUrl;
  poster.alt = movie.title;
  section.appendChild(poster);

  const title = document.createElement('h2');
  title.textContent = movie.title;
  section.appendChild(title);

  const releaseDate = document.createElement('p');
  const formattedReleaseDate = formatDate(movie.release_date);
  releaseDate.textContent = `Release date ${formattedReleaseDate}`;
  section.appendChild(releaseDate);

  const voteAverage = document.createElement('p');
  voteAverage.textContent = `Vote / Votes ${movie.vote_average} / ${movie.vote_count}`;
  section.appendChild(voteAverage);

  const popularity = document.createElement('p');
  popularity.textContent = `Popularity ${movie.popularity}`;
  section.appendChild(popularity);

  const genreNames = movie.genre_ids
    .map(genreId => genres.find(genre => genre.id === genreId)?.name)
    .filter(Boolean);

  const genre = document.createElement('p');
  genre.textContent = `Genre ${genreNames.join(', ')}`;
  section.appendChild(genre);

  const aboutTitle = document.createElement('h2');
  aboutTitle.textContent = 'ABOUT';
  section.appendChild(aboutTitle);

  const about = document.createElement('p');
  about.textContent = movie.overview;
  section.appendChild(about);

  const addButton = document.createElement('button');
  addButton.textContent = 'Add to my library';
  addButton.addEventListener('click', () => {
    const libraryData = localStorage.getItem('myLibrary');
    const parsedLibraryData = libraryData ? JSON.parse(libraryData) : [];
    parsedLibraryData.push(movie);
    localStorage.setItem('myLibrary', JSON.stringify(parsedLibraryData));
    alert('Movie added to your library!');
  });
  section.appendChild(addButton);

  return section;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  return `${day}.${month}.${year}`;
}

function renderMovieSection(movie) {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';

  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Loading...';
  container.appendChild(loadingMessage);

  getMovieGenres()
    .then(genres => {
      container.innerHTML = '';
      const movieSection = createMovieSection(movie, genres);
      container.appendChild(movieSection);
    })
    .catch(error => {
      handleError(error);
    });
}

function renderNoMoviesMessage() {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';

  const message = document.createElement('p');
  message.textContent = 'No upcoming movies found.';
  container.appendChild(message);
}

function handleError(error) {
  console.error(error);
  const container = document.getElementById('movies-container');
  container.innerHTML = '';

  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'An error occurred while fetching data.';
  container.appendChild(errorMessage);
}

function getRandomMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

getUpcomingMovies();
