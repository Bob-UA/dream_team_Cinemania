import { getMoviesTrending } from "../api/ApiService";
import Pagination from 'tui-pagination';


const moviesList = document.querySelector('.gallery');
const resp = await getMoviesTrending('week');

console.log(resp);
console.log(resp.data);
console.log(resp.data.results);





const markup = creatMarkupMoviesList(resp.data.results);
moviesList.innerHTML = markup;

function creatMarkupMoviesList(data) {
    return data
      .map(({ poster_path, backdrop_path, original_title }) => {
        return `<div class="photo-card">
                  
                     <img src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${original_title}" loading="lazy" width="300px" />
                  
                </div>`;
      })
      .join('');
}
//------------------------------------------------------------------------------------------Пагинация
const container = document.getElementById('tui-pagination-container');
console.log(container);
const options = {
    page: 1,
    totalItems: 20000,
    itemsPerPage: 20,
    visiblePages: 5,

    centerAling: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
    },
}
  
let instance = new Pagination(container, options);













//https://image.tmdb.org/t/p/original



//console.log(data.results.back);

//const a = data.map(()=>{});

// function creatMarkupMoviesList(data) {
//     return data.map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `<div class="photo-card">
//                   <a href="${largeImageURL}">
//                     <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//                   </a>
//                       <div class="info">
//                         <p class="info-item">
//                         <b>Likes</b>${likes}
//                         </p>
//                         <p class="info-item">
//                         <b>Views</b>${views}
//                         </p>
//                         <p class="info-item">
//                         <b>Comments</b>${comments}
//                         </p>
//                         <p class="info-item">
//                         <b>Downloads</b>${downloads}
//                         </p>
//                       </div>
//                 </div>`;
//       }
//     )
//     .join('');
// }



//https://image.tmdb.org/t/p/original