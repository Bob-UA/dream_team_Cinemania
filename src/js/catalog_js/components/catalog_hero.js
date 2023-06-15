import _ from 'lodash.debounce';
import { defaultHeroStyles } from '../../utils';
import { getMoviesTrending } from '../../api/ApiService';
import { getMoviesVideos } from '../../api/ApiService';
import { starRatingCalc } from '../../home_js/components';

import { getMoviesDetails } from '../../api/ApiService';
import { createMovieInfoPopUpMarkup } from '../../catalog_js/components/creatMovieInfoPopUpMarkup';

import refs from '../../catalog_js/components/modal_movie_refs';
const IMG_URL = 'https://image.tmdb.org/t/p/original/';

const trailerRefs = {
  trailerBackdrop: document.querySelector('.player_backdrop'),
  trailerContainer: document.querySelector('.player_container'),
  textContainer: document.querySelector('.hero-container'),
  trailerCloseBtn: document.querySelector('[data-modal-trailer-close]'),
};

const STORAGE_KEY = 'MY_LIBRARY';
let movie = {};
let movieID = null;
let results = [];
let index = null;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function showRandomMovie() {
  try {
    const dayMovies = await getMoviesTrending('day');
    results = await dayMovies.data.results;
    index = getRandom(0, results.length - 1);

    if (results[index]) {
      trailerRefs.textContainer.innerHTML = createHeroMarkup(results[index]);
    } else {
      trailerRefs.textContainer.innerHTML = createDefaultHeroMarkup();
      const style = document.createElement('style');
      style.innerHTML = defaultHeroStyles;
      document.head.appendChild(style);
    }
  } catch (error) {
    console.error(error);
  }
}

function createMarkUpForTrailer(id) {
  return `<iframe class="iframe_video_player" 
              src="https://www.youtube.com/embed/${id}" 
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay;
              clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
              allowfullscreen>
          </iframe>`;
}

function createMarkUpForError() {
  return `
   <h1 class="text-modal-oops">
      OOPS... <br> We are very sorry! <br>
      But we couldn’t find the trailer.
    </h1>
    <picture class="camera">
      <source srcset="./images/modal-camera-mobile-1x.jpg 1x, ./images/modal-camera-mobile-2x.jpg 2x" media="(max-width: 767px)" />
      <source srcset="./images/modal-camera-tablet-1x.jpg 1x, ./images/modal-camera-tablet-2x.jpg 2x" media="(min-width: 768px)" />
      <source srcset="./images/modal-camera-desktop-1x.jpg 1x, ./images/modal-camera-desktop-2x.jpg 2x" media="(min-width: 1280px)" />
      <img src="./images/modal-camera-mobile-1x.jpg" alt="camera" />
    </picture>
  </div>`;
}

const createHeroMarkup = ({
  backdrop_path,
  title,
  vote_average,
  overview,
  id,
}) => {
  return ` <div class="hero-content"><div class="hero-text-container">
    <h1 class="title hero-title">${title}</h1>
    <img class="star-rating-hero" src=".${starRatingCalc(
      vote_average
    )}" alt="raiting" />
      <p class="text hero-text">
        ${overview}
      </p>
    </div>
      <ul class="btn-list">
        <li>
          <button class="btn js-trailer-btn" data-id="${id}">Watch trailer</button>
        </li>
         <li>
         <button class="btn-details js-details-btn" data-id="${id}">More details</button>
        </li>
      </ul></div>
      <div class="img-container"><img class="hero-img" src="${IMG_URL}${backdrop_path}" alt="${title}"></div>
      `;
};

const createDefaultHeroMarkup = () => {
  return `<div class="hero-text-container">
<h1 class="title hero-title">Let’s Make Your Own Cinema</h1>
      <p class="text hero-text">
        Is a guide to creating a personalized movie theater experience. You'll
        need a projector, screen, and speakers. <span class="mobile-hidden"> Decorate your space, choose your
        films, and stock up on snacks for the full experience.</span>
      </p>
      </div>
      <ul class="btn-list">
        <li>
          <a href="../../catalog.html"><button class="btn">Get Started</button></a>
        </li>
      </ul>`;
};

await showRandomMovie();
const trailerBtnRef = document.querySelector('.js-trailer-btn');
const detailsBtnRef = document.querySelector('.js-details-btn');

trailerBtnRef.addEventListener('click', onShowTrailerModal);

async function onShowTrailerModal() {
  trailerRefs.trailerBackdrop.addEventListener('click', onBackdropClickTrailer);
  window.addEventListener('keydown', onCloseModalWithESCTrailer);

  //this is normal id for correct visibility of the trailer
  //needs to be uncommented for notmal work

  const treilerID = results[index].id;

  //this is TEST id for make server mistakes
  // const treilerID = 10000000;
  const getTrailerKey = await getMoviesVideos(treilerID);
  let trailerMarkup = '';
  if (getTrailerKey) {
    const randomElement = getRandom(0, getTrailerKey.data.results.length - 1);
    trailerMarkup = createMarkUpForTrailer(
      getTrailerKey.data.results[randomElement].key
    );
    refs.closeModalOopsBtn.className = 'is-hidden';
  } else {
    trailerMarkup = createMarkUpForError();
    refs.wrapperContainer.className = 'modal-oops';
  }
  trailerRefs.trailerContainer.insertAdjacentHTML('beforeend', trailerMarkup);
  trailerRefs.trailerBackdrop.classList.toggle('is-hidden');
  trailerRefs.trailerCloseBtn.addEventListener('click', removeModalTrailer);
}

detailsBtnRef.addEventListener('click', addModal);

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

function onBackdropClickTrailer(event) {
  if (event.currentTarget === event.target) {
    trailerRefs.trailerBackdrop.classList.add('is-hidden');
    trailerRefs.trailerContainer.innerHTML = '';
    trailerRefs.trailerBackdrop.removeEventListener(
      'click',
      onBackdropClickTrailer
    );
  }
}

// check if was press ESC button and remove listener
function onCloseModalWithESCTrailer(e) {
  const ESC_KEY = 'Escape';
  if (e.code == ESC_KEY) {
    trailerRefs.trailerBackdrop.classList.add('is-hidden');
    trailerRefs.trailerContainer.innerHTML = '';
    window.removeEventListener('keydown', onCloseModalWithESCTrailer);
  }
}

// function open modal windows and draw markup
async function addModal(e) {
  const isVideosIMG = e.target.classList.contains('js-details-btn');
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
  btnRefs.addBtn.removeEventListener('click', onAddMovieToStorage);
  btnRefs.removeBtm.addEventListener('click', onRemoveMovieFromStorage);
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
  btnRefs.removeBtm.removeEventListener('click', onRemoveMovieFromStorage);
  btnRefs.addBtn.addEventListener('click', onAddMovieToStorage);
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

function removeModalTrailer() {
  trailerRefs.trailerBackdrop.classList.toggle('is-hidden');
  trailerRefs.trailerContainer.innerHTML = '';
  trailerRefs.trailerCloseBtn.removeEventListener('click', removeModalTrailer);
}

// get movie by the ID
async function moviesInfo(movieID) {
  const movies = await getMoviesDetails(movieID);
  return movies;
}
