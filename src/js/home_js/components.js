

//-------------------------------------------Рейтінг переводе у зірочки
export function starRatingCalc(rating) {
  if (rating >= 9.0) {
    return `/images/svg/star-desk-50.svg`;
  } else if (rating >= 8.0) {
    return `/images/svg/star-desk-45.svg`;
  } else if (rating >= 7.0) {
    return `/images/svg/star-desk-35.svg`;
  } else if (rating >= 6.0) {
    return `/images/svg/star-desk-30.svg`;
  } else if (rating >= 5.0) {
    return `/images/svg/star-desk-25.svg`;
  } else if (rating >= 4.0) {
    return `/images/svg/star-desk-20.svg`;
  } else if (rating >= 3.0) {
    return `/images/svg/star-desk-15.svg`;
  } else if (rating >= 2.0) {
    return `/images/svg/star-desk-10.svg`;
  } else if (rating >= 1.0) {
    return `/images/svg/star-desk-05.svg`;
  }

  return `/images/svg/star-desk-00.svg`;
}



// <img class="star-rating" src="${starRating}" alt="raiting" />