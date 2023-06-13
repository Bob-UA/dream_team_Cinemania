import { starRatingCalc } from "../../home_js/components";


export function murkup(poster_path, title, id, genres, year, vote_average) {
  return `<li class="gallery-movies-item">
        <a href="https://image.tmdb.org/t/p/original/${poster_path}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" data-id="${id}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${title}</h3>
                
    
                <p class="gallery-movies-details star-rating-container">
                
                  
                ${genres.join(',  ')} | ${year}

                <img src="${starRatingCalc(
                  vote_average
                )}" alt="raiting" class="star-rating-card"/>
                  
                  </p>


                  
                  
                  

            </div>
            
        </a>
        </li>`;
}