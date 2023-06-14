function markup(poster_path, title, id, genres, release_date) {
  const genreNames = genres.map(genre => genre.name);
  const year = release_date ? release_date.split('-')[0] : '';

  return `
    <li class="gallery-movies-item" data-id="${id}" data-genres="${genreNames.join(
    ','
  )}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
      <div class="gallery-movies-overlay"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${title}</h3>
        <p class="gallery-movies-details">${genreNames.join(', ')} | ${year}</p>
      </div>
    </li>
  `;
}

const moviesPerPage = 9;
let currentPage = 1;
const libraryElement = document.getElementById('my-library');

const savedMovies = JSON.parse(localStorage.getItem('MY_LIBRARY')) || [];

if (savedMovies.length > 0) {
  libraryElement.innerHTML = `
    <select id="genre-filter">
      <option value="">Genre</option>
      <option value="Romance">Romance</option>
      <option value="Detective">Detective</option>
      <option value="Thriller">Thriller</option>
      <option value="Action">Action</option>
      <option value="Documentary">Documentary</option>
      <option value="Horror">Horror</option>
    </select>
    <ul class="gallery-movies"></ul>
    ${
      savedMovies.length > moviesPerPage
        ? '<button class="btn" id="load-more">Load More</button>'
        : ''
    }
  `;

  const loadMoreBtn = document.getElementById('load-more');

  function renderMovies(movies = savedMovies) {
    const moviesList = libraryElement.querySelector('.gallery-movies');
    const moviesToRender = movies.slice(0, currentPage * moviesPerPage);
    moviesList.innerHTML = moviesToRender
      .map(movie => {
        const { poster_path, title, id, genres, release_date } = movie;
        return markup(poster_path, title, id, genres, release_date);
      })
      .join('');

    if (moviesToRender.length === movies.length && loadMoreBtn) {
      loadMoreBtn.style.display = 'none';
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      renderMovies();
    });
  }

  document.querySelector('#genre-filter').addEventListener('change', e => {
    const selectedGenre = e.target.value;
    if (selectedGenre === '') {
      renderMovies();
    } else {
      const filteredMovies = savedMovies.filter(movie => {
        return movie.genres.some(genre => genre.name === selectedGenre);
      });
      if (filteredMovies.length > 0) {
        currentPage = 1; // reset to page 1 for new filter
        renderMovies(filteredMovies);
      } else {
        libraryElement.innerHTML = `
          <p>OOPS... We are very sorry! There are no movies of selected genre in your library.</p>
          <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
        `;
      }
    }
  });

  renderMovies();
} else {
  libraryElement.innerHTML = `
    <p>OOPS... We are very sorry! You don’t have any movies at your library.</p>
    <button class="btn" onclick="window.location.href='search.html'">Search movie</button>
  `;
}
