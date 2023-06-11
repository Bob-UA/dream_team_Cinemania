
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
//-----------------------------------------------------------------------------------------------------------------------------

// const resp = await getMoviesTrending('day', 4);            // resp.data.results    масив
// const resp = await getMoviesUpcoming(5);                   // resp.data.results    масив
// const resp = await getMoviesBySearch('pirates',5,2023);    // resp.data.results    масив

// const resp = await getMoviesDetails(2023);                  // resp.data      не массив!!!
// const resp = await getMoviesVideos(2023);                   // resp.results   не массив!!!
// const resp = await getMoviesGenres();                       // resp.data.genres    масив 


 //-----------------------------------------------------------------------------------------------------------------------------

// Ключ API
// 9d709850c7590845ffb60644b29d6f51

import axios from 'axios';

const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_END_POINT = 'trending/movie/';                     // end-point  трендовых фільмів за день/тиждень
const UPCOMING_END_POINT = 'movie/upcoming';                     // end-point  новінки
const SEARCH_END_POINT = 'search/movie';                         // end-point  фільми за ключовим словом (+ рік)
const DETAILS_END_POINT = 'movie/';                              // end-point детальна інформація про фільм
const GENRES_END_POINT = 'genre/movie/list';                      // end-point жанрів

let arrayOfGenres = (await getMoviesGenres()).data.genres;

// console.log(arrayOfGenres);
// console.log('   ');
// let a = (await getMoviesTrending()).data.results[2].genre_ids;
// // console.log(a)

// const resp = await getMoviesUpcoming(5); // resp.data.results    масив
// console.log(resp.data.results);



// //-----------------------------------------------------------------------запит на ым'я жанрів по їх id

// console.log(a);
// console.log(getNameOfGenreById(a).join(', '));

export function getNameOfGenreById(array) {
  let res = [];
  arrayOfGenres.map((gen) => {
    array.map(item => {
      if (gen.id === item) res.push(gen.name)
    });
  })
  
//  console.log(res);
  return (res);
}

//-----------------------------------------------------------------------запит на трендові фільми
//-----------------------------------------------------------------------timeWindow = 'week'/'day'
export async function getMoviesTrending(timeWindow = 'week', page = 1) {
  try {
    return await axios(`${BASE_URL}${TRENDING_END_POINT}${timeWindow}?`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
  } catch (error) {
    handlerError(error);
  }
}
//-----------------------------------------------------------------------запит на нові фільми
export async function getMoviesUpcoming(page = 1) {
  try {
    return await axios(`${BASE_URL}${UPCOMING_END_POINT}?`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
  } catch (error) {
    handlerError(error);
  }
}
//-----------------------------------------------------------------------запит на детальну інформацію про фільм
//-----------------------------------------------------------------------якщо рік не вказувати - за весь доступний період
export async function getMoviesBySearch(query='', page = 1, year='') {
  try {
    return await axios(`${BASE_URL}${SEARCH_END_POINT}?`, {
      params: {
        api_key: API_KEY,
        page: page,
        query: query,
        year: year,
      },
    });
  } catch (error) {
    handlerError(error);
  }
}
//-----------------------------------------------------------------------детальна інформація про фільм за id
export async function getMoviesDetails(movie_id) {
  try {
    return await axios(`${BASE_URL}${DETAILS_END_POINT}${movie_id}?`, {
      params: {
        api_key: API_KEY,
        movie_id: movie_id,
      },
    });
  } catch (error) {
    handlerError(error);
  }
}
//-----------------------------------------------------------------запит на повну інформацію про можливий трейлер фільма на YouTube
export async function getMoviesVideos(movie_id) {
  try {
    return await axios(`${BASE_URL}${DETAILS_END_POINT}${movie_id}/videos?`, {
      params: {
        api_key: API_KEY,
        movie_id: movie_id,
      },
    });
  } catch (error) {
    handlerError(error);
  }
}
//-----------------------------------------------------------------запит на список жанрів
export async function getMoviesGenres() {
  try {
    return await axios(`${BASE_URL}${GENRES_END_POINT}?`, {
      params: {
        api_key: API_KEY,
      },
    });
  } catch (error) {
    handlerError(error);
  }
}

//-----------------------------------------------------------------------Обробник помилок
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

//alert('there`s something wrong, please see the messages in the console');
}



