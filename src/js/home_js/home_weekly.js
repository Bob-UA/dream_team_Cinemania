import axios from 'axios';
import { getMoviesTrending } from '../api/ApiService';
import { getMoviesGenres } from "../api/ApiService";
import { starRatingCalc } from './components';
const GANRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_KEY = '9d709850c7590845ffb60644b29d6f51';

        
const list = document.querySelector('.weekly-js-list');
const genresArr = await listOfGanresAPI();
const genresTotalArray = genresArr.data.genres;

const resp = await getMoviesTrending('week', 1);

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

async function handleViewportResize() {
    
  const viewportWidth = window.innerWidth;
  
    if (viewportWidth < 767) {
        list.innerHTML = await createMarkUp(resp.data.results.slice(0, 1));
    } else {
        list.innerHTML = await createMarkUp(resp.data.results.slice(0, 3));
    }
  }
  
window.addEventListener('resize', handleViewportResize);


//  ----  перетворення жанрів

// async function getGenresNames(arr) {
//   const dataGenres = await getMoviesGenres();
//   const genres = [];
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < dataGenres.data.genres.length; j++) {
//           if(Object.values(dataGenres.data.genres[j])[0] == arr[i]) {
//               genres.push(Object.values(dataGenres.data.genres[j])[1]);
//           }
//       }
//   }
//   return genres;
// }



list.innerHTML = await createMarkUp(resp.data.results.slice(0, 3));



async function createMarkUp(arr) {
 
  const moviesMarkupPromises = arr.map(async ({
      poster_path,
      title,
      genre_ids,
      id,
      release_date,
      vote_average,
  }) => {
    const year = release_date.substr(0, 4);
    const namesOfGenres = genresNames(genresTotalArray, genre_ids);
    const genres = Object.values(namesOfGenres);
    const starRating = starRatingCalc(vote_average);
    // console.log(genres);
    return `<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" data-id="${id}" loading="lazy">
      <div class="weekly-list-overlay">
          <h3 class="weekly-list-title">${title}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${genres.join(', ')} | ${year}</p>
          <img src="${starRating}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>`;
  });
  
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
  