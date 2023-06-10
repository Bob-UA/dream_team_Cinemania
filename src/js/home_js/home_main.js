
import { getMoviesBySearch, getMoviesDetails, getMoviesTrending, getMoviesUpcoming } from "../api_js/fetch_movies";


//let data = {};
//const {data} = await getMoviesTrending('day', 4);
//const {data} = await getMoviesUpcoming(5);
//const { data } = await getMoviesBySearch('p',5,2023);
const { data } = await getMoviesDetails(2023);

console.log(data);