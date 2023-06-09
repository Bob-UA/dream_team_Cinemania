import axios from 'axios';

const BASIC_URL = 'https://api.themoviedb.org/3/search/movie';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = 'd277c204a2c30c818c2befd49f072a72';
const ENDPOINT = '/trending/movie/week';

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
serviceMovie(6)
.then(data => console.log(data))