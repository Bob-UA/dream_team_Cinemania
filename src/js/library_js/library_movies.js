// Отримуємо елемент з HTML
var myLibraryDiv = document.getElementById('my-library');

var moviesToAdd = [];

// Зберігаємо фільми в localStorage
localStorage.setItem('movies', JSON.stringify(moviesToAdd));
// Отримуємо список фільмів з localStorage
var movies = JSON.parse(localStorage.getItem('movies'));

if (movies && movies.length > 0) {
  // Якщо список фільмів не пустий, створюємо для нього HTML
  var movieListHtml = '<ul>';

  for (var i = 0; i < movies.length; i++) {
    movieListHtml += '<li>' + movies[i] + '</li>';
  }

  movieListHtml += '</ul>';

  // Вставляємо список фільмів в div
  myLibraryDiv.innerHTML = movieListHtml;
} else {
  // Якщо список фільмів пустий, вставляємо повідомлення
  myLibraryDiv.innerHTML =
    '<div class="movies"><p class="movies__text">OOPS... We are very sorry! You don’t have any movies at your library.</p><button class="button">Search movie</button></div>';
}
