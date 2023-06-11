import { getMoviesTrending } from "../api/ApiService";
import { getMoviesGenres } from "../api/ApiService";

// Блок Перелік фільмів
const galleryMovies = document.querySelector('.gallery-movies');
const weeklyMovies = await getMoviesTrending();

if (!weeklyMovies.data) {
    galleryMovies.innerHTML = '';
}

galleryMovies.innerHTML = await createMarkupMovies(weeklyMovies.data.results);

async function createMarkupMovies(arr) {
    const moviesMarkupPromises = arr.map(async ({
        poster_path,
        title,
        genre_ids,
        id,
        release_date
    }) => {
        const year = release_date.substr(0, 4);
        const genres = await getGenresNames(genre_ids);
        return `<li class="gallery-movies-item">
        <a href="https://image.tmdb.org/t/p/original/${poster_path}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" data-id="${id}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${title}</h3>
                <p class="gallery-movies-details">${genres.join(', ')} | ${year}</p>
            </div>
        </a>
        </li>`;
    });

    const moviesMarkup = await Promise.all(moviesMarkupPromises);
    return moviesMarkup.join('');
}

async function getGenresNames(arr) {
    const dataGenres = await getMoviesGenres();
    const genres = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < dataGenres.data.genres.length; j++) {
            if(Object.values(dataGenres.data.genres[j])[0] == arr[i]) {
                genres.push(Object.values(dataGenres.data.genres[j])[1]);
            }
        }
    }
    return genres;
}

