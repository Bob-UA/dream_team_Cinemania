import { getMoviesTrending, getMoviesGenres, getMoviesBySearch } from '../../api/ApiService';
import { starRatingCalc } from '../../home_js/components';
import { markup } from './movies_cards';

const formSearch = document.querySelector('.search-movie');
const galleryMovies = document.querySelector('.gallery-movies');
const containerResults = document.querySelector('.no-results');
const weeklyMovies = await getMoviesTrending();

galleryMovies.innerHTML = await createMarkupMovies(weeklyMovies.data.results);

 export async function createMarkupMovies(arr) {
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
      const genres = await getGenresNames(genre_ids);
      const starRating = starRatingCalc(vote_average);
      return markup(poster_path, title, id, genres, year, starRating);
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



