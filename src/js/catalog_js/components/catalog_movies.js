import { getMoviesTrending, getMoviesGenres, getMoviesBySearch } from '../../api/ApiService';
import { markup } from './movies_cards';
import Pagination from 'tui-pagination';
import '../../../css/pages/catalog/tui-pagination.css';
// import 'tui-pagination/dist/tui-pagination.css'

const formSearch = document.querySelector('.search-movie');
const galleryMovies = document.querySelector('.gallery-movies');
const containerResults = document.querySelector('.no-results');
// const weeklyMovies = await getMoviesTrending();
let query;

initializePage('weekly');

formSearch.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(evt) {
    evt.preventDefault();
    galleryMovies.innerHTML = '';
    const { search } = evt.currentTarget.elements;
    query = search.value.trim();
    
    if (query == '' || !query) {
      containerResults.hidden = false;
      formSearch.reset();
      return;
    }

    const dataMovies = await getMoviesBySearch(query);
    if(dataMovies.data.results.length == 0) {
      containerResults.hidden = false;
      formSearch.reset();
      return;
    }

    containerResults.hidden = true;
    initializePage('query', query);
    formSearch.reset();
}

async function createMarkupMovies(arr) {
  const moviesMarkupPromises = arr.map(
    async ({ poster_path, title, genre_ids, id, release_date }) => {
      const year = release_date.substr(0, 4);
      const genres = await getGenresNames(genre_ids);
      return markup(poster_path, title, id, genres, year);
    }
  );

  const moviesMarkup = await Promise.all(moviesMarkupPromises);
  return moviesMarkup.join('');
}

async function getGenresNames(arr) {
  const dataGenres = await getMoviesGenres();
  const genres = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < dataGenres.data.genres.length; j++) {
      if (Object.values(dataGenres.data.genres[j])[0] == arr[i]) {
        genres.push(Object.values(dataGenres.data.genres[j])[1]);
      }
    }
  }

  return genres;
}

async function initializePage(type, query) {
  let response;
  let totalResults
  if(type == 'weekly') {
    response = await getMoviesTrending();
    totalResults = response.data.total_results;
  } else if (type == 'query') {
    response = await getMoviesBySearch(query);
    totalResults = response.data.total_results;
  }

  galleryMovies.innerHTML = await createMarkupMovies(response.data.results);  

  if (totalResults > 10000) {
    totalResults = 10000;
  }

  const container = document.getElementById('tui-pagination-container');
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
          '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
              '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
      disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
              '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
      moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
              '<span class="tui-ico-ellip">...</span>' +
          '</a>'
    },
  };
  const instance = new Pagination(container, options);

  instance.on('beforeMove', async evt => {
    const { page } = evt;

    if(type == 'weekly') {
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

