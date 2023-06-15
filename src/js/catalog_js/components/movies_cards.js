function cutStringLength(str) {
  if (str.length > 20 ) {
    return str.substring(0, 20)+"..."
  };
  return str;
}

export function markup(poster_path, title, id, genres, year, starRating) {
  if(!poster_path) {
    return;
  }
  let str = '';
  if (!genres.length) {
    str = 'There are no genres';
  } else {
    str = cutStringLength(genres.slice(0, 2).join(', '));
  }
  
  return `<li class="gallery-movies-item" data-id="${id}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
        <div class="gallery-movies-overlay js-modal-info" data-id="${id}"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${title}</h3>
                <div class="gallery-movies-wrap">
                <p class="gallery-movies-details">${str} | ${year}</p>
                <img src="${starRating}" alt="raiting" class="star-rating-card"/>
                </div>
            </div>
        </li>`;
}
