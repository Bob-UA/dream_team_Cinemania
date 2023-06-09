// import axios from 'axios';
import refs from '../catalog_js/components/modal_movie_refs';
import { arrayOfGenres, getMoviesDetails } from '../api/ApiService';
import { createMovieInfoPopUpMarkup } from '../catalog_js/components/creatMovieInfoPopUpMarkup';
import { starRatingCalc } from '../home_js/components';
//  import { API_KEY } from '../api/ApiService';
const GANRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';

const STORAGE_KEY = 'MY_LIBRARY';
let movie = {};
let movieID = null;

let filterGenres = null;

// const genresArr = await listOfGanresAPI();
// const genresTotalArray = genresArr.data.genres;

refs.libraryContainer.addEventListener('click', addModal);

function markup(movie) {
  if (movie.genres)
  {
    //console.log(movie);
    const { poster_path, title, id, genres, release_date, vote_average } = movie;
    const genreNames = genres.map(genre => genre.name);
    const year = release_date ? release_date.split('-')[0] : '';

    return `
    <li class="gallery-movies-item" data-genres="${genreNames.join(',')}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${id}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${title}</h3>
        
        <div class="gallery-movies-wrap">
        <p class="gallery-movies-details">${genreNames.join(', ')} | ${year}</p>
         <img src="${starRatingCalc(
           vote_average
         )}" alt="raiting" class="star-rating-card"/>
          </div>

      </div>
    </li>
  `;
  } else if (movie.genre_ids) {
    const { poster_path, title, id, genre_ids, release_date, vote_average } =
      movie;
    const namesOfGenres = genresNames(arrayOfGenres, genre_ids);
    const genres = Object.values(namesOfGenres);

    const year = release_date ? release_date.split('-')[0] : '';

    return `
    <li class="gallery-movies-item" data-genres="${genres.join(', ')}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${id}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${title}</h3>
        
        <div class="gallery-movies-wrap">
        <p class="gallery-movies-details">${genres.join(', ')} | ${year}</p>
         <img src="${starRatingCalc(
           vote_average
         )}" alt="raiting" class="star-rating-card"/>
          </div>

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
    const moviesList = refs.libraryContainer.querySelector('.gallery-movies');
    moviesList.innerHTML = '';
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
  filterGenres = document.getElementById('genre-filter');
  filterGenres.addEventListener('change', onChoseFilterGenre);

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

function onChoseFilterGenre(e) {
  const selectedGenre = e.target.value;
  if (selectedGenre === '') {
    createNewMarkup();
  } else {
    console.log(selectedGenre);
    const filterArr = savedMovies.map(movie => {
      if (movie.genres) {
        const genres = movie.genres;
        return genres
          .map(genre => {
            if (genre.name === selectedGenre) {
              return movie;
            }
          })
          .filter(movie => movie);
      } else if (movie.genre_ids) {
        const namesOfGenres = genresNames(genresTotalArray, movie.genre_ids);
        const genresID = Object.values(namesOfGenres);
        return genresID
          .map(genreID => {
            if (genreID.name === selectedGenre) {
              return movie;
            }
          })
          .filter(movie => movie);
      }
    });
    const filteredMovies = filterArr
      .map(arr => {
        if (arr.length === 0) {
          return;
        } else {
          return arr[0];
        }
      })
      .filter(movie => movie);
    console.log(filteredMovies);
    if (filteredMovies.length > 0) {
      currentPage = 1; // reset to page 1 for new filter

      createNewMarkup(filteredMovies);
      console.log(1);
    } else {
      console.log(2);
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
 
        <div class=library__block-no-results>
          <p class="library__text-no-results">OOPS...</p>
          <p class="library__text-no-results">We are very sorry!</p>
          <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
          <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
          </div>
        `;
      const newFilterGenres = document.getElementById('genre-filter');
      newFilterGenres.addEventListener('change', onChoseFilterGenre);
    }
  }
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

  savedMovies = updateLocalStorageData(movieStr, storageDataSTR);
  btnRefs.addBtn.classList.toggle('hide');
  btnRefs.removeBtm.classList.toggle('hide');
  saveMovieInStorage(STORAGE_KEY, savedMovies);
  createNewMarkup(savedMovies);
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

  createNewMarkup(savedMovies);
}

function createNewMarkup(movies) {
  const moviesList = refs.libraryContainer.querySelector('.gallery-movies');
  const moviesToRender = movies.slice(0, currentPage * moviesPerPage);
  const movieLibraryMarkup = moviesToRender
    .map(movie => {
      return markup(movie);
    })
    .join('');
  moviesList.innerHTML = movieLibraryMarkup;
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
