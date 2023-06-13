function markup(poster_path, title, id, genres, year) {
  return `<li class="gallery-movies-item" data-id="${id}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${title}</h3>
                <p class="gallery-movies-details">${genres.join(
                  ', '
                )} | ${year}</p>
            </div>
        </li>`;
}

// Перевірка наявності фільмів у localStorage
const savedMovies = JSON.parse(localStorage.getItem('movies'));

// Беремо елемент для вставки
const libraryElement = document.querySelector('#my-library');

if (savedMovies && savedMovies.length > 0) {
  let currentPage = 1;
  const moviesPerPage = 9;

  function renderMovies() {
    // Створення списку фільмів
    let moviesList = '';

    for (
      let i = (currentPage - 1) * moviesPerPage;
      i < currentPage * moviesPerPage && i < savedMovies.length;
      i++
    ) {
      const movie = savedMovies[i];
      const { poster_path, title, id, genre_ids, release_date } = movie;
      moviesList += markup(poster_path, title, id, genre_ids, release_date);
    }

    // Вставка списку фільмів у контейнер
    libraryElement.innerHTML = `
      <div>
        <label for="genre-filter">Filter by genre:</label>
        <select id="genre-filter">
          <option value="">All</option>
          <option value="18">Romance</option>
          <option value="80">Detective</option>
          <option value="53">Thriller</option>
          <option value="28">Action</option>
          <option value="99">Documentary</option>
          <option value="27">Horror</option>
        </select>
      </div>
      <ul class="gallery-movies">
        ${moviesList}
      </ul>
    `;

    // Додавання кнопки "Load more", якщо є ще фільми для виводу
    if (currentPage * moviesPerPage < savedMovies.length) {
      libraryElement.innerHTML += `<button class="btn" id="load-more">Load more</button>`;
    }

    // Додавання обробника подій для кнопки "Load more"
    const loadMoreButton = document.querySelector('#load-more');
    if (loadMoreButton) {
      loadMoreButton.addEventListener('click', () => {
        currentPage++;
        renderMovies();
      });
    }

    // Додавання обробника подій для фільтру
    const genreFilter = document.querySelector('#genre-filter');
    genreFilter.addEventListener('change', e => {
      const value = e.target.value;
      const movieItems = document.querySelectorAll('.gallery-movies-item');
      movieItems.forEach(item => {
        item.style.display =
          item.dataset.genres.includes(value) || value === ''
            ? 'block'
            : 'none';
      });
    });
  }

  renderMovies();
} else {
  // Вставка повідомлення про відсутність фільмів
  libraryElement.innerHTML = `
    <p>OOPS... We are very sorry! You don’t have any movies at your library.</p>
    <button onclick="location.href='search.html'">Search movie</button>
  `;
}
