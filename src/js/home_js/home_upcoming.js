import { arrayOfGenres, getMoviesUpcoming } from '../api/ApiService';

const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const UPCOMING_END_POINT = 'movie/upcoming';
const GENRES_END_POINT = 'genre/movie/list';

const STORAGE_KEY = 'MY_LIBRARY';
let movie = {};

async function getRandomFilm() {
  const upcomingURL = `${BASE_URL}${UPCOMING_END_POINT}?api_key=${API_KEY}`;
  // const response = await fetch(upcomingURL);
  // const data = await response.json();
  const response = await getMoviesUpcoming();

  if (response.data.results.length === 0) {
    showNoFilmsMessage();
    return;
  }

  const randomIndex = Math.floor(Math.random() * response.data.results.length);
  const film = response.data.results[randomIndex];
  displayFilmInformation(film);
}

function showNoFilmsMessage() {
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML =
    '<p>OOPS... We are very sorry!But we couldn’t find the film.</p>';
}

// function toggleLibraryStatus(filmId, libraryButton) {
//   const myLibrary = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

//   if (myLibrary[filmId]) {
//     delete myLibrary[filmId];
//     libraryButton.textContent = 'Add to my library';
//     libraryButton.classList.add('add-btn');
//     libraryButton.classList.remove('remove-btn');
//   } else {
//     myLibrary[filmId] = true;
//     libraryButton.textContent = 'Remove from my library';
//     libraryButton.classList.remove('add-btn');
//     libraryButton.classList.add('remove-btn');
//   }

//   localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
// }

async function displayFilmInformation(film) {
  // const genresURL = `${BASE_URL}${GENRES_END_POINT}?api_key=${API_KEY}`;
  // const genresResponse = await fetch(genresURL);
  // const genresData = await genresResponse.json();

  const genreNames = film.genre_ids.map(genreId => {
    // const genre = genresData.genres.find(g => g.id === genreId);
    const genre = arrayOfGenres.find(g => g.id === genreId);
    return genre ? genre.name : '';
  });

  const { vote_average, vote_count, popularity, overview } = film;
  const genres = genreNames.join(', ');

  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = `
    <div class="film-card">
    <div class="img-wrapper">
      <img class="upcoming-img" src="https://image.tmdb.org/t/p/original/${
        film.backdrop_path
      }" alt="${film.title}" />
      <div class="img-gradient-container"></div>
      </div>
      <div class="film-details">
        <h2 class="upcoming-film-title">${film.title}</h2>
        <ul class="upcoming-movie-list">
        <ul class="left-movie-list">
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
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${formatPopularity(popularity)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${cutStringLength(genres)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${cutStrOverview(overview)}</p>
        <button id="libraryButton" data-id="${
          film.id
        }" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `;

  movie = film;
  const upComingBtnRefs = {
    addBtn: document.querySelector('.add-btn-home'),
    removeBtm: document.querySelector('.remove-btn-home'),
  };

  const dataFromStorage = getMoviesFromStorageHome(STORAGE_KEY);

  if (dataFromStorage) {
    dataFromStorage.map(movieData => {
      if (movieData.id === movie.id) {
        upComingBtnRefs.addBtn.classList.add('hide');
        upComingBtnRefs.removeBtm.classList.remove('hide');
        return;
      }
    });
  }

  // add listener for add movie to storage (library)
  upComingBtnRefs.addBtn.addEventListener('click', onAddMovieToStorageHome);

  // add listener for remove movie to storage (library)
  upComingBtnRefs.removeBtm.addEventListener(
    'click',
    onRemoveMovieFromStorageHome
  );
}

// updateLibraryButton(film.id);
// document.getElementById('libraryButton').onclick = function () {
//   toggleLibraryStatus(film.id, this);
// };

// function updateLibraryButton(filmId) {
//   const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || {};
//   const libraryButton = document.getElementById('libraryButton');

//   if (myLibrary[filmId]) {
//     libraryButton.textContent = 'Remove from my library';
//   } else {
//     libraryButton.textContent = 'Add to my library';
//   }
// }

function onAddMovieToStorageHome() {
  const upComingBtnRefs = {
    addBtn: document.querySelector('.add-btn-home'),
    removeBtm: document.querySelector('.remove-btn-home'),
  };
  const dataFromStorage = getMoviesFromStorageHome(STORAGE_KEY);
  let storageDataSTR = '';
  let newDataAdd = [];
  if (dataFromStorage) {
    newDataAdd = storageStatusHome(dataFromStorage);
    const storageData = JSON.stringify(newDataAdd);
    storageDataSTR = convertArrObjectToStr(storageData);
  }
  const movieStr = JSON.stringify(movie);

  const addMovie = updateLocalStorageData(movieStr, storageDataSTR);
  upComingBtnRefs.addBtn.classList.toggle('hide');
  upComingBtnRefs.removeBtm.classList.toggle('hide');
  saveMovieInStorageHome(STORAGE_KEY, addMovie);
  // upComingBtnRefs.addBtn.removeEventListener('click', onAddMovieToStorageHome);
  // upComingBtnRefs.removeBtm.addEventListener('click', onRemoveMovieFromStorage);
}

function onRemoveMovieFromStorageHome() {
  const upComingBtnRefs = {
    addBtn: document.querySelector('.add-btn-home'),
    removeBtm: document.querySelector('.remove-btn-home'),
  };

  const dataFromStorage = getMoviesFromStorageHome(STORAGE_KEY);
  upComingBtnRefs.addBtn.classList.toggle('hide');
  upComingBtnRefs.removeBtm.classList.toggle('hide');
  const newDataRemove = storageStatusHome(dataFromStorage);

  saveMovieInStorageHome(STORAGE_KEY, newDataRemove);
  // upComingBtnRefs.removeBtm.removeEventListener(
  //   'click',
  //   onRemoveMovieFromStorageHome
  // );
  // upComingBtnRefs.addBtn.addEventListener('click', onAddMovieToStorageHome);
}

//get new data from storage after adding or removing
function storageStatusHome(data) {
  return data
    .map(movieData => {
      if (movieData.id === movie.id) {
        return;
      }
      return movieData;
    })
    .filter(movieData => movieData);
}

// get movies from storage
function getMoviesFromStorageHome(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// save movie in storage
function saveMovieInStorageHome(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
// delete brackets from the beginning and end of the string
function convertArrObjectToStr(str) {
  return str.slice(1, str.length - 1);
}

// create new object which join oldDate from storage and movie what was chosen
function updateLocalStorageData(newData, oldData) {
  if (oldData) {
    return JSON.parse(`[${oldData}, ${newData}]`);
  }
  return JSON.parse(`[${newData}]`);
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

function cutStringLength(str) {
  if (str.length > 30) {
    return str.substring(0, 30) + '...';
  }
  return str;
}

function cutStrOverview(str) {
  if (str.length > 420) {
    return str.substring(0, 420) + '...';
  }
  return str;
}

getRandomFilm();
