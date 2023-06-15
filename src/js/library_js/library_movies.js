import axios from 'axios';
import refs from '../catalog_js/components/modal_movie_refs';
import { getMoviesDetails } from '../api/ApiService';
import { createMovieInfoPopUpMarkup } from '../catalog_js/components/creatMovieInfoPopUpMarkup';
import { API_KEY } from '../api/ApiService';
const GANRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';

const STORAGE_KEY = 'MY_LIBRARY';
let movie = {};
let movieID = null;

const genresArr = await listOfGanresAPI();
const genresTotalArray = genresArr.data.genres;

refs.libraryContainer.addEventListener('click', addModal);

function markup(movie) {
  if (movie.genres) {
    console.log(movie.genres);
    const { poster_path, title, id, genres, release_date } = movie;
    console.log(genres);
    const genreNames = genres.map(genre => genre.name);
    const year = release_date ? release_date.split('-')[0] : '';

    return `
    <li class="gallery-movies-item" data-genres="${genreNames.join(',')}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${id}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${title}</h3>
        <p class="gallery-movies-details">${genreNames.join(', ')} | ${year}</p>
      </div>
    </li>
  `;
  } else if (movie.genre_ids) {
    const { poster_path, title, id, genre_ids, release_date } = movie;
    console.log(genre_ids);
    const namesOfGenres = genresNames(genresTotalArray, genre_ids);
    const genres = Object.values(namesOfGenres);

    const year = release_date ? release_date.split('-')[0] : '';

    return `
    <li class="gallery-movies-item" data-genres="${genres.join(', ')}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${id}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${title}</h3>
        <p class="gallery-movies-details">${genres.join(', ')} | ${year}</p>
      </div>
    </li>
  `;
  }
}

const moviesPerPage = 9;
let currentPage = 1;

let savedMovies = JSON.parse(localStorage.getItem('MY_LIBRARY')) || [];

if (savedMovies.length > 0) {
  refs.libraryContainer.innerHTML = `
    <select id="genre-filter" class="my-library__select">
      <option value="">Genre</option>
      <option value="Romance">Romance</option>
      <option value="Detective">Detective</option>
      <option value="Thriller">Thriller</option>
      <option value="Action">Action</option>
      <option value="Documentary">Documentary</option>
      <option value="Horror">Horror</option>
    </select>
    <ul class="gallery-movies"></ul>
    ${
      savedMovies.length > moviesPerPage
        ? '<button class="btn library__load-more" id="load-more">Load More</button>'
        : ''
    }
  `;

  const loadMoreBtn = document.getElementById('load-more');

  function renderMovies(movies = savedMovies) {
    console.log(movies);
    const moviesList = refs.libraryContainer.querySelector('.gallery-movies');
    const moviesToRender = movies.slice(0, currentPage * moviesPerPage);
    const movieLibraryMarkup = moviesToRender
      .map(movie => {
        return markup(movie);
      })
      .join('');
    moviesList.innerHTML = movieLibraryMarkup;

    if (moviesToRender.length === movies.length && loadMoreBtn) {
      loadMoreBtn.style.display = 'none';
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      renderMovies();
    });
  }

  document.querySelector('#genre-filter').addEventListener('change', e => {
    const selectedGenre = e.target.value;
    if (selectedGenre === '') {
      renderMovies();
    } else {
      const filteredMovies = savedMovies.filter(movie => {
        return movie.genres.some(genre => genre.name === selectedGenre);
      });
      if (filteredMovies.length > 0) {
        currentPage = 1; // reset to page 1 for new filter
        renderMovies(filteredMovies);
      } else {
        refs.libraryContainer.innerHTML = `
        <div class=library__block-no-results>
          <p class="library__text-no-results">OOPS...</p>
          <p class="library__text-no-results">We are very sorry!</p>
          <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
          <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
          </div>
        `;
      }
    }
  });

  renderMovies();
} else {
  refs.libraryContainer.innerHTML = `
  <div class=library__block-no-results>
  <p class="library__text-no-results">OOPS...</p>
  <p class="library__text-no-results">We are very sorry!</p>
  <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
  <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
  </div>
  `;
}

// check if click on the backdrop and remove listener
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    refs.backdropMovieInfoContainer.classList.add('is-hidden');
    refs.movieInfoContainer.innerHTML = '';
    refs.backdropMovieInfoContainer.removeEventListener(
      'click',
      onBackdropClick
    );
  }
}

// check if was press ESC button and remove listener
function onCloseModalWithESC(e) {
  const ESC_KEY = 'Escape';
  if (e.code == ESC_KEY) {
    refs.backdropMovieInfoContainer.classList.add('is-hidden');
    refs.movieInfoContainer.innerHTML = '';
    window.removeEventListener('keydown', onCloseModalWithESC);
  }
}

// function open modal windows and draw markup
async function addModal(e) {
  const isVideosIMG = e.target.classList.contains('js-modal-info');
  if (!isVideosIMG) {
    return;
  }

  refs.backdropMovieInfoContainer.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onCloseModalWithESC);
  refs.closeModalBtn.addEventListener('click', removeModal);
  movieID = +e.target.dataset.id;
  const { data } = await moviesInfo(movieID);
  movie = data;

  const markupMovieInfo = await createMovieInfoPopUpMarkup(movie);
  refs.movieInfoContainer.insertAdjacentHTML('beforeend', markupMovieInfo);
  refs.modal.classList.toggle('is-hidden');

  const btnRefs = {
    addBtn: document.querySelector('.add-btn'),
    removeBtm: document.querySelector('.remove-btn'),
  };

  const dataFromStorage = getMoviesFromStorage(STORAGE_KEY);

  if (dataFromStorage) {
    dataFromStorage.map(movie => {
      if (movie.id === movieID) {
        btnRefs.addBtn.classList.add('hide');
        btnRefs.removeBtm.classList.remove('hide');
        return;
      }
    });
  }

  // add listener for add movie to storage (library)
  btnRefs.addBtn.addEventListener('click', onAddMovieToStorage);

  // add listener for remove movie from storage (library)
  btnRefs.removeBtm.addEventListener('click', onRemoveMovieFromStorage);
}

function onAddMovieToStorage() {
  const btnRefs = {
    addBtn: document.querySelector('.add-btn'),
    removeBtm: document.querySelector('.remove-btn'),
  };
  const dataFromStorage = getMoviesFromStorage(STORAGE_KEY);
  let storageDataSTR = '';
  let newDataAdd = [];
  if (dataFromStorage && movieID) {
    newDataAdd = storageStatus(dataFromStorage);
    const storageData = JSON.stringify(newDataAdd);
    storageDataSTR = convertArrObjectToStr(storageData);
  }
  const movieStr = JSON.stringify(movie);

  const addMovie = updateLocalStorageData(movieStr, storageDataSTR);
  btnRefs.addBtn.classList.toggle('hide');
  btnRefs.removeBtm.classList.toggle('hide');
  saveMovieInStorage(STORAGE_KEY, addMovie);
  // btnRefs.addBtn.removeEventListener('click', onAddMovieToStorage);
  // btnRefs.removeBtm.addEventListener('click', onRemoveMovieFromStorage);
}

function onRemoveMovieFromStorage() {
  const btnRefs = {
    addBtn: document.querySelector('.add-btn'),
    removeBtm: document.querySelector('.remove-btn'),
  };

  const dataFromStorage = getMoviesFromStorage(STORAGE_KEY);
  btnRefs.addBtn.classList.toggle('hide');
  btnRefs.removeBtm.classList.toggle('hide');
  savedMovies = storageStatus(dataFromStorage);

  saveMovieInStorage(STORAGE_KEY, savedMovies);

  const moviesList = refs.libraryContainer.querySelector('.gallery-movies');
  const moviesToRender = savedMovies.slice(0, currentPage * moviesPerPage);
  const movieLibraryMarkup = moviesToRender
    .map(movie => {
      return markup(movie);
    })
    .join('');
  moviesList.innerHTML = movieLibraryMarkup;

  // btnRefs.removeBtm.removeEventListener('click', onRemoveMovieFromStorage);
  // btnRefs.addBtn.addEventListener('click', onAddMovieToStorage);
}

//get new data from storage after adding or removing
function storageStatus(data) {
  return data
    .map(movie => {
      if (movie.id === movieID) {
        return;
      }
      return movie;
    })
    .filter(movie => {
      if (movie) {
        return movie;
      }
    });
}

// get movies from storage
function getMoviesFromStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// save movie in storage
function saveMovieInStorage(key, value) {
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

// remove modal window
function removeModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.movieInfoContainer.innerHTML = '';
  refs.closeModalBtn.removeEventListener('click', removeModal);
}

// get movie by the ID
async function moviesInfo(movieID) {
  const movies = await getMoviesDetails(movieID);
  return movies;
}

async function listOfGanresAPI() {
  return await axios.request({
    method: 'GET',
    url: GANRES_URL,
    params: {
      api_key: API_KEY,
      language: 'en',
    },
  });
}

function genresNames(genres, genre_ids) {
  const genresArrays = [];
  genre_ids.filter(genreID => {
    genres.map(({ id, name }) => {
      if (id === genreID) {
        genresArrays.push(name);
      }
    });
  });
  return genresArrays;
}
