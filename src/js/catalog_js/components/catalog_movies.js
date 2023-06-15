import {
  getMoviesTrending,
  getMoviesBySearch,
  arrayOfGenres,
} from '../../api/ApiService';
import { starRatingCalc } from '../../home_js/components';
import { debounce } from 'lodash';
import { markup } from './movies_cards';
import Pagination from 'tui-pagination';
import '../../../css/pages/catalog/tui-pagination.css';

const DEBOUNCE_DELAY = 300;

const buttonClearInput = document.querySelector('.clear__icon');
const inputSearch = document.querySelector('#searchQuery');
const sectionPagination = document.querySelector('.pagination');
const formSearch = document.querySelector('.catalog__form');
const galleryMovies = document.querySelector('.gallery-movies');
const containerResults = document.querySelector('.no-results');
const containerPagination = document.getElementById('tui-pagination-container');
let query;

// const genresData = await getMoviesGenres();
// const genresArr = genresData.data.genres;

initializePage('weekly');

inputSearch.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
buttonClearInput.addEventListener('click', onClickClear);
formSearch.addEventListener('submit', onSearchSubmit);

function onInput(evt) {
  if (evt.target.value) {
    console.log(evt.target.value);
    buttonClearInput.style.display = 'block';
  } else {
    buttonClearInput.style.display = 'none';
  }
}

function onClickClear() {
  buttonClearInput.style.display = 'none';
  inputSearch.value = '';
}

async function onSearchSubmit(evt) {
  evt.preventDefault();
  galleryMovies.innerHTML = '';
  const { search } = evt.currentTarget.elements;
  query = search.value.trim();
  buttonClearInput.style.display = 'none';

  if (query == '' || !query) {
    containerResults.hidden = false;
    sectionPagination.style.display = 'none';
    formSearch.reset();
    return;
  }

  containerResults.hidden = true;
  initializePage('query', query);
  formSearch.reset();
}

async function createMarkupMovies(arr) {
  const moviesMarkupPromises = arr.map(
    async ({
      poster_path,
      title,
      genre_ids,
      id,
      release_date,
      vote_average,
    }) => {
      const year = release_date.substr(0, 4);
      const genres = getGenresNames(arrayOfGenres, genre_ids);
      const starRating = starRatingCalc(vote_average);
      return markup(poster_path, title, id, genres, year, starRating);
    }
  );

  const moviesMarkup = await Promise.all(moviesMarkupPromises);
  return moviesMarkup.join('');
}

function getGenresNames(genres, genre_ids) {
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

async function initializePage(type, query) {
  let response;
  let totalResults;

  if (type == 'weekly') {
    response = await getMoviesTrending();
    totalResults = response.data.total_results;
  } else if (type == 'query') {
    response = await getMoviesBySearch(query);
    totalResults = response.data.total_results;
  }

  if (type == 'query' && !totalResults) {
    sectionPagination.style.display = 'none';
    containerResults.hidden = false;
    formSearch.reset();
    return;
  } else {
    sectionPagination.style.display = 'block';
  }

  galleryMovies.innerHTML = await createMarkupMovies(response.data.results);

  if (totalResults > 10000) {
    totalResults = 10000;
  } else if (totalResults <= 20) {
    sectionPagination.style.display = 'none';
    return;
  }

  const options = {
    totalItems: totalResults,
    itemsPerPage: 20,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}} custom-class">' +  
            '<svg class="tui-ico-{{type}}">' +
              '<use href="images/sprite.svg#icon-{{type}}"></use>' +
            '</svg>' +
          '</a>',
      disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
      moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<svg class="tui-ico-ellip">' +
              '<use href="images/sprite.svg#icon-ellip"></use>' +
            '</svg>' +
          '</a>'
    },
  };

  const instance = new Pagination(containerPagination, options);

  instance.on('afterMove', async evt => {
    const { page } = evt;

    if (type == 'weekly') {
      response = await getMoviesTrending('week', page);
    } else if (type == 'query') {
      response = await getMoviesBySearch(query, page);
    }

    if (response) {
      galleryMovies.innerHTML = await createMarkupMovies(response.data.results);
    } else {
      return false;
    }
  });
}