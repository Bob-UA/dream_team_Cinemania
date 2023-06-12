export function murkup(poster_path, title, id, genres, year) {
  return `<li class="gallery-movies-item">
        <a href="https://image.tmdb.org/t/p/original/${poster_path}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" data-id="${id}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${title}</h3>
                <p class="gallery-movies-details">${genres.join(
                  ', '
                )} | ${year}</p>
            </div>
        </a>
        </li>`;
}