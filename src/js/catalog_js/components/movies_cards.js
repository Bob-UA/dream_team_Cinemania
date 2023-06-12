export function markup(poster_path, title, id, genres, year) {
  return `<li class="gallery-movies-item" >
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
        <div class="gallery-movies-overlay js-modal-info" data-id="${id}"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${title}</h3>
                <p class="gallery-movies-details">${genres.join(
                  ', '
                )} | ${year}</p>
            </div>
        </li>`;
}
