const IMG_URL = 'https://image.tmdb.org/t/p/original';

export async function createMovieInfoPopUpMarkup(movie) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
  } = movie;

  // if (poster_path) {
  const url = IMG_URL + poster_path;
  // } else {
  //   url = default_postre;
  // }

  const genreAll = genres.map(genre => genre.name).join(' ');

  const voteAverage10 = Math.round10(vote_average, -1);
  const voteСount10 = Math.round10(vote_count, -1);
  const popularity10 = Math.round10(popularity, -1);

  return `<div class="modal-img-wrap">
            <img class="modal-video-img" src="${url}" alt="${title}" />
          </div>
          <div class="modal-about-movie-container">
            <h2 class="modal-card-title">${title}</h2>
            <ul class="modal-info-movie-list">
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Vote / Votes</p>
                <div class="modal-rating-wraper">
                  <p class="modal-rating">${voteAverage10}</p>
                  <p class="modal-slesh">/</p>
                  <p class="modal-rating">${voteСount10}</p>
                </div>
              </li>
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Popularity</p>
                <p class="modal-info-data-item">${popularity10}</p>
              </li>
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Genre</p>
                <p class="modal-info-data-item  genres">${genreAll}</p>
              </li>
            </ul>
            <p class="modal-about-subtitle">About</p>
            <p class="modal-item-description">
              ${overview}
            </p>

            <button class="modal-my-library-btn add-btn" type="button">
              <span class="modal-btn-title">Add to my library</span>
            </button>

            <button class="modal-my-library-btn remove-btn hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
            </button>
          </div>`;
}

function decimalAdjust(type, value, exp) {
  // If the degree is not defined, or is equal to zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number, or the degree is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Bit shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
  // reverse shift
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
}

// Decimal round to nearest
if (!Math.round10) {
  Math.round10 = function (value, exp) {
    return decimalAdjust('round', value, exp);
  };
}
