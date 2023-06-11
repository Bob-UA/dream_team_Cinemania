import axios from 'axios';
import { getMoviesTrending } from '../api/ApiService';
import { getNameOfGenreById } from '../api/ApiService';

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




const resp = await getMoviesTrending('week', 1); 
list.insertAdjacentHTML('beforeEnd', createMarkUp(resp.data.results[0]))


function createMarkUp({ original_title, poster_path, genre_ids, vote_average }) {
  return `<li class="weekly-list" style="background-image: url('https://image.tmdb.org/t/p/w500${poster_path}');">
      <h2 class="weekly-list-title">${original_title}</h2>
      <h3 class="weekly-list-genre">${genre_ids}</h3>
      <p class="weekly-list-raiting">${vote_average}</p>
    </li > `
}
  

// function createMarkUp(arr) {
//   return arr.map(({ original_title, poster_path, genre_ids, vote_average}) => `<li class="weekly-list">
//       <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" class="weekly-list-img">
//       <h2 class="weekly-list-title">${original_title}</h2>
//       <h3 class="weekly-list-genre">${genre_ids}</h3>
//       <p class="weekly-list-raiting">${vote_average}</p>
//     </li > `).join('')
// }