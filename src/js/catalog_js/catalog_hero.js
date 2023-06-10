import axios from 'axios';
import { defaultHeroStyles } from '../utils';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/original/';
const API_KEY = '9d709850c7590845ffb60644b29d6f51';
const ENDPOINT = '/trending/movie/day';
const textContainer = document.querySelector('.hero-container')
const heroSection = document.querySelector('.hero')

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
showRandomMovie()

async function fetchMovies() {
    try {
        const response = await axios.get(`${BASE_URL}${ENDPOINT}`, {
            params: {
                api_key: `${API_KEY}`,
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error(error)
    }
}

async function showRandomMovie() {
    try {
        const results = await fetchMovies();
        const index = getRandom(0, results.length - 1);
        if (results[index]) {
            textContainer.innerHTML = createHeroMarkup(results[index]);
            heroSection.style.backgroundImage = `linear-gradient(
        86.77deg,
        #111111 20%,
        rgba(17, 17, 17, 0) 60%
      ),
      url(${IMG_URL}${results[index].backdrop_path})`
        }
        else {
            textContainer.innerHTML = createDefaultHeroMarkup();
            const style = document.createElement('style');
            style.innerHTML = defaultHeroStyles;
            document.head.appendChild(style);
        }
    } catch (error) {
        console.error(error)
    }
}


const createHeroMarkup = ({ title, vote_average, overview }) => {
    return ` <div class="hero-text-container">
    <h1 class="title hero-title">${title}</h1>
    <p class="hero-stars">${vote_average}</p>
      <p class="text hero-text">
        ${overview}
      </p>
    </div>
      <ul class="btn-list">
        <li>
          <a href=""><button class="btn">Watch trailer</button></a>
        </li>
         <li>
          <a href=""><button class="btn-details">More details</button></a>
        </li>
      </ul>`;
};

const createDefaultHeroMarkup = () => {
    return `<div class="hero-text-container">
<h1 class="title hero-title">${title}</h1>
    <p class="hero-stars">${vote_average}</p>
      <p class="text hero-text">
        ${overview}
      </p>
    </div>
      <ul class="btn-list">
        <li>
          <a href="../../catalog.html"><button class="btn">Get Started</button></a>
        </li>
      </ul>`
}
