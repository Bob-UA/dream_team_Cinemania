import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/original/';
const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const ENDPOINT = '/trending/movie/day';
const textContainer = document.querySelector('.hero-text-container')
const heroSection = document.querySelector('.hero')

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const randPage = getRandom(1, 500);

async function fetchMovies() {
    try {
        const response = await axios.get(`${BASE_URL}${ENDPOINT}`, {
            params: {
                api_key: `${API_KEY}`,
                page: `${randPage}`
            }
        });
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}

async function showRandomMovie() {
    const results = await fetchMovies();
    const index = getRandom(0, results.length - 1)
    createHeroMarkup(results[index]);
}

showRandomMovie()

const createHeroMarkup = ({ backdrop_path, title, vote_average, overview }) => {
    const markup = ` <h1 class="title hero-title">${title}</h1>
    <p class="hero-stars">${vote_average}</p>
      <p class="text hero-text">
        ${overview}
      </p>
      <ul>
        <li>
          <a href=""><button class="btn">Watch trailer</button></a>
        </li>
         <li>
          <a href=""><button class="btn">More details</button></a>
        </li>
      </ul>`;
    textContainer.innerHTML = markup;
    heroSection.style.backgroundImage = `linear-gradient(
        86.77deg,
        #111111 5%,
        rgba(17, 17, 17, 0) 60%
      ),
      url(${IMG_URL}${backdrop_path})`
};

console.log(textContainer)