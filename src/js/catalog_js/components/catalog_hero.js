import { defaultHeroStyles } from '../../utils';
import { getMoviesTrending } from '../../api/ApiService';
import { getMoviesVideos } from '../../api/ApiService';


const IMG_URL = 'https://image.tmdb.org/t/p/original/';
const textContainer = document.querySelector('.hero-container');
const trailerContainer = document.querySelector('.player_container');



function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

showRandomMovie();

async function showRandomMovie() {
  try {
    const dayMovies = await getMoviesTrending('day');
    const results = await dayMovies.data.results;
    const index = getRandom(0, results.length - 1);
    if (results[index]) {
      const getTrailerKey = await getMoviesVideos(results[index].id);
      const randomElement = getRandom(0, getTrailerKey.data.results.length - 1);
      trailerContainer.innerHTML = createMarkUpForTrailer(
      getTrailerKey.data.results[randomElement].key
      );
      textContainer.innerHTML = createHeroMarkup(results[index]);
    } else {
      textContainer.innerHTML = createDefaultHeroMarkup();
      const style = document.createElement('style');
      style.innerHTML = defaultHeroStyles;
      document.head.appendChild(style);
    }
  } catch (error) {
    console.error(error);
  }
}


function createMarkUpForTrailer(id){
  return `<iframe class="iframe_video_player" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

const createHeroMarkup = ({ backdrop_path, title, vote_average, overview }) => {
  return ` <div class="hero-content"><div class="hero-text-container">
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
      </ul></div>
      <div class="img-container"><img class="hero-img" src="${IMG_URL}${backdrop_path}" alt="${title}"></div>
      `;
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
      </ul>`;
};
