const refs = {
  gallaryContainer: document.querySelector('.gallery-movies'),
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('.data-modal-close'),
  movieInfoContainer: document.querySelector('.modal-movie-info_container'),

  detailsBtnModal: document.querySelector('.js-details-btn'),
  backdropMovieInfoContainer: document.querySelector('.backdrop-movie-info'),
  backdropMovieInfoDetailsCatalog: document.querySelector(
    '.backdrop-movie-info'
  ),

  libraryContainer: document.getElementById('my-library'),

  weeklyContainer: document.querySelector('.weekly-js-list'),

  upcomingContainer: document.querySelector('.img-gradient-container'),

  wrapperContainer: document.querySelector('.player_wraper'),
  closeModalOopsBtn: document.querySelector('.close-modal-oops'),
};

export default refs;
