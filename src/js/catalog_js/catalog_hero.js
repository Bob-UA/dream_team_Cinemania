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
            const style = document.createElement('style');
            style.innerHTML = `
  .hero {
    background-image: linear-gradient(
        86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%
      ),
      url(${IMG_URL}${results[index].backdrop_path});
  }

@media screen and (min-width: 768px) {
  .hero {
    background-image: linear-gradient(
        81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%
      ),
      url(${IMG_URL}${results[index].backdrop_path});
  }
}
@media screen and (min-width: 1280px) {

  .hero {
    background-image: linear-gradient(
        83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%
      ),
      url(${IMG_URL}${results[index].backdrop_path});
  }
}`;
            document.head.appendChild(style);
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
<h1 class="title hero-title">Let’s Make Your Own Cinema</h1>
      <p class="text hero-text">
        Is a guide to creating a personalized movie theater experience. You'll
        need a projector, screen, and speakers. <span class="mobile-hidden"> Decorate your space, choose your
        films, and stock up on snacks for the full experience.</span>
      </p>
      </div>
      <ul class="btn-list">
        <li>
          <a href="../../catalog.html"><button class="btn">Get Started</button></a>
        </li>
      </ul>`
}
