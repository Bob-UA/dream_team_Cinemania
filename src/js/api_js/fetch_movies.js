
// API з фільмами (потрібно зареєструватися щоб отримати api_key):	 https://www.themoviedb.org/
// Документація	https://developer.themoviedb.org/docs

// Трендові фільми дня	https://developers.themoviedb.org/3/trending/get-trending
// https://api.themoviedb.org/3/trending/movie/day?api_key=9d709850c7590845ffb60644b29d6f51

// Трендові фільми тижня
// https://api.themoviedb.org/3/trending/movie/week?api_key=9d709850c7590845ffb60644b29d6f51

// Нові фільми 	https://developers.themoviedb.org/3/movies/get-upcoming
// https://api.themoviedb.org/3/movie/upcoming

// Фільми за ключовим словом ( + за роком)	https://developers.themoviedb.org/3/search/search-movies
// https://api.themoviedb.org/3/search/movie


// Детальна інформація про фільм	https://developers.themoviedb.org/3/movies/get-movie-details
// https://api.themoviedb.org/3/movie/{movie_id}


// Повна інформація про можливий трейлер фільма на YouTube	https://developers.themoviedb.org/3/movies/get-movie-videos
//  https://api.themoviedb.org/3/movie/{movie_id}/videos

// Перелік жанрів	https://developers.themoviedb.org/3/genres/get-movie-list
// https://api.themoviedb.org/3/genre/movie/list


// Ключ API
// 9d709850c7590845ffb60644b29d6f51

import axios from 'axios';

const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_END_POINT = 'trending/movie/';                     // end-point  трендовых фильмов за день/неделю

export async function getMoviesTrending(timeWindow = 'week', page = 1) {
  try {
      return await axios(`${BASE_URL}${TRENDING_END_POINT}${timeWindow}?`,
          {
              params: {
                api_key: API_KEY,
                page : page,
              }
        });
   } catch (error) {
    handlerError(error);
  }
}

export function handlerError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);

 alert(
  'there`s something wrong, please see the messages in the console')
  
 
}