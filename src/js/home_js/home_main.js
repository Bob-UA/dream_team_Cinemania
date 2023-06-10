
import { getMoviesBySearch, getMoviesDetails, getMoviesGenres, getMoviesTrending, getMoviesUpcoming, getMoviesVideos } from "../api/ApiService";



// const {data} = await getMoviesTrending('day', 4);
// const {data} = await getMoviesUpcoming(5);
// const { data } = await getMoviesBySearch('p',5,2023);
// const { data } = await getMoviesDetails(2023);
// const { data } = await getMoviesVideos(2023);
const resp = await getMoviesGenres();



console.log(resp);
console.log("   ");

const { data: { genres } } = resp;
console.log(genres);


