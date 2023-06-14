import refs from './modal_movie_refs';
import { getMoviesDetails } from '../../api/ApiService';
import { createMovieInfoPopUpMarkup } from './creatMovieInfoPopUpMarkup';

const STORAGE_KEY = 'MY_LIBRARY';
let movie = {};
let movieID = null;

//  refs.detailsBtnModal.addEventListener('click', addModal);

// add eventListeners for click in target element and click on close button
refs.gallaryContainer.addEventListener('click', addModal);

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
