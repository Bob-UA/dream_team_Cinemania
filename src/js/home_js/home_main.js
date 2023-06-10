
import { getMoviesTrending } from "../api_js/fetch_movies";

const {data} = await getMoviesTrending('day', 4);

//console.log(a);
console.log(data);