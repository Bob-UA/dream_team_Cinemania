import axios from 'axios';
import { getMoviesTrending } from '../api/ApiService';
import { getMoviesGenres } from '../api/ApiService';
import { starRatingCalc } from './components';
import { arrayOfGenres } from '../api/ApiService';

import { getMoviesDetails } from '../api/ApiService';
import { createMovieInfoPopUpMarkup } from '../catalog_js/components/creatMovieInfoPopUpMarkup';

import refs from '../catalog_js/components/modal_movie_refs';
import { indexOf } from 'lodash';

const GANRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_KEY = '9d709850c7590845ffb60644b29d6f51';

const STORAGE_KEY = 'MY_LIBRARY';
let movie = {};
let movieID = null;

const list = document.querySelector('.weekly-js-list');
// const genresArr = await listOfGanresAPI();
// const genresTotalArray = genresArr.data.genres;

const resp = await getMoviesTrending('week', 1);

// async function listOfGanresAPI() {
//   return await axios.request({
//     method: 'GET',
//     url: GANRES_URL,
//     params: {
//       api_key: API_KEY,
//       language: 'en',
//     },
//   });
// }

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const data = await (resp.data.results);

list.innerHTML = await createMarkUp(data);


async function createMarkUp(arr) {
  let currentArr = arr;
  let newArr = []
  let el = {};
  let indexOfDuplicate;

  for (let i = 1; newArr.length < 3; i++) {
    el = currentArr[getRandom(0, currentArr.length - 1)];
    indexOfDuplicate = newArr.findIndex(option => option === el);
    if (indexOfDuplicate !== -1 || indexOfDuplicate === 0) {
      newArr = [];
    }
    newArr.push(el);
  }
  const moviesMarkupPromises = newArr.map(
    async ({
      poster_path,
      title,
      genre_ids,
      id,
      release_date,
      vote_average,
    }) => {
      const year = release_date.substr(0, 4);
      const namesOfGenres = genresNames(arrayOfGenres, genre_ids);
      const genres = Object.values(namesOfGenres);
      const starRating = starRatingCalc(vote_average);
      return `<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" data-id="${id}" loading="lazy">
      <div class="weekly-list-overlay js-modal-info" data-id="${id}">
          <h3 class="weekly-list-title">${title}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${genres.join(', ')} | ${year}</p>
          <img src="${starRating}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>`;
    }
  );
  const moviesMarkup = await Promise.all(moviesMarkupPromises);
  return moviesMarkup.join('');
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

refs.weeklyContainer.addEventListener('click', addModal);

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
  const newDataRemove = storageStatus(dataFromStorage);

  saveMovieInStorage(STORAGE_KEY, newDataRemove);
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
