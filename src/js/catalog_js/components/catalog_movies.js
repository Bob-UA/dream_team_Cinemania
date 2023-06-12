import { getMoviesTrending, getMoviesGenres, getMoviesBySearch } from '../../api/ApiService';
import { markup } from './movies_cards';

const formSearch = document.querySelector('.search-movie');
const galleryMovies = document.querySelector('.gallery-movies');
const containerResults = document.querySelector('.no-results');
const weeklyMovies = await getMoviesTrending();

galleryMovies.innerHTML = await createMarkupMovies(weeklyMovies.data.results);

formSearch.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(evt) {
    evt.preventDefault();
    galleryMovies.innerHTML = '';
    const { search } = evt.currentTarget.elements;
    const query = search.value.trim();
    
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
    galleryMovies.innerHTML = await createMarkupMovies(dataMovies.data.results);
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



