import axios from 'axios';

const BASIC_URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = '471141c69aa19d434e5adba2f5f93507';
const ENDPOINT = '/trending/movie/week';


        
const list = document.querySelector('.weekly-js-list');
// const loadMore = document.querySelector('.js-load-more');

 async function filmAPI(name) {
   return await axios.request({
     method: 'GET',
     url: BASIC_URL,
     params: {
       api_key: API_KEY,
       query: name,
     },
   });
 }
export default { filmAPI };

function serviceMovie(page = 1) {
    return fetch(`${BASIC_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
        
            return resp.json()
        })
}

// function weeklyTrends(page = 1) {
//     return fetch(`${BASIC_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}&results=${results}`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText);
//             }
        
//             return resp.json()
//         })
// }


serviceMovie()
  .then(data => {
    list.insertAdjacentHTML('beforeEnd', createMarkUp(data.results))
  })

// function serviceMovieAp() {
//   return serviceMovie.map(serviceMovie => )
// } 

function createMarkUp(arr) {
  return arr.map(({ original_title, poster_path, genre_ids, vote_average}) => `<li>
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" class="weekly-list-img">
      <h2 class="weekly-list-title">${original_title}</h2>
      <h3 class="weekly-list-genre">${genre_ids}</h3>
      <p class="weekly-list-raiting">${vote_average}</p>
    </li > `).join('')
}
  

