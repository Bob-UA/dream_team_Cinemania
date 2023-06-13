import axios from 'axios';
import { getMoviesTrending } from '../api/ApiService';
import { getMoviesGenres } from "../api/ApiService";

const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = '471141c69aa19d434e5adba2f5f93507';
const TRENDING_END_POINT = 'trending/movie/';
const GENRES_END_POINT = 'genre/movie/list';
// let genres = getNameOfGenreById(genres_ids);


        
const list = document.querySelector('.weekly-js-list');
// const loadMore = document.querySelector('.js-load-more');

 async function filmAPI(name) {
   return await axios.request({
     method: 'GET',
     url: BASE_URL,
     params: {
       api_key: API_KEY,
       query: name,
     },
   });
 }
export default { filmAPI };


//  ----  перетворення жанрів

async function getGenresNames(arr) {
    const dataGenres = await getMoviesGenres();
    const genres = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < dataGenres.data.genres.length; j++) {
            if(Object.values(dataGenres.data.genres[j])[0] == arr[i]) {
                genres.push(Object.values(dataGenres.data.genres[j])[1]);
            }
        }
    }
    return genres;
}

// const year = release_date.substr(0, 4);
// const genres = await getGenresNames(genre_ids);
// console.log(genres);

const resp = await getMoviesTrending('week', 1);
list.innerHTML = createMarkupMovies(resp.data.results.slice(0, 3));
// list.insertAdjacentHTML('beforeEnd', createMarkupMovies(resp.data.results[0]))
// list.insertAdjacentHTML('beforeEnd', createMarkupMovies(resp.data.results[2]))
// list.insertAdjacentHTML('beforeEnd', createMarkupMovies(resp.data.results[4]))


// function createMarkUp({ original_title, poster_path, id, genre_ids, vote_average, release_date}) {
//   return `<li class="weekly-list">
//        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" class="weekly-list-img" data-id="${id}" loading="lazy">
//        <div class="weekly-list-overlay">
//         <h2 class="weekly-list-title">${original_title}</h3>
//         <div class="weekly-list-overlay-desc">
//           <h3 class="weekly-list-genre">${genre_ids.join(', ')} | ${release_date}</h3>
//           <p class="weekly-list-raiting">${vote_average}</p>
//         </div>
//        </div>
//      </li > `
// }




// ------  markup Вероніки


 async function createMarkupMovies(arr) {
    const moviesMarkupPromises = arr.map(async ({
        poster_path,
        title,
        genre_ids,
        id,
        release_date
    }) => {
        const year = release_date.substr(0, 4);
        const genres = await getGenresNames(genre_ids);
        console.log(genres);
        return `<li class="gallery-movies-item">
        <a href="https://image.tmdb.org/t/p/original/${poster_path}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" data-id="${id}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${title}</h3>
                <p class="gallery-movies-details">${genres.join(', ')} | ${year}</p>
            </div>
        </a>
        </li>`;
    });
   
  const moviesMarkup = await Promise.all(moviesMarkupPromises);
      return moviesMarkup.join('');
  }
  



// ----- бібліотека фільмів 1 сторінка - 20 фільмів


// function createMarkUp(arr) {
//   return arr.map(({ original_title, poster_path, genre_ids, vote_average}) => `<li class="weekly-list">
//       <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" class="weekly-list-img">
//       <h2 class="weekly-list-title">${original_title}</h2>
//       <h3 class="weekly-list-genre">${genre_ids}</h3>
//       <p class="weekly-list-raiting">${vote_average}</p>
//     </li > `).join('')
// }



//   ----- markup на 1 фільм


// function createMarkUp({ original_title, poster_path, genre_ids, vote_average }) {
//   return `<li class="weekly-list" style="background-image: url('https://image.tmdb.org/t/p/w500${poster_path}');">
//       <h2 class="weekly-list-title">${original_title}</h2>
//       <h3 class="weekly-list-genre">${genre_ids}</h3>
//       <p class="weekly-list-raiting">${vote_average}</p>
//     </li > `
// }