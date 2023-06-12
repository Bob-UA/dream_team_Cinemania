import"./my_library-ab8d4378.js";import"./catalog_hero-eb3644cc.js";const a="9d709850c7590845ffb60644b29d6f51",r="https://api.themoviedb.org/3/",b="movie/upcoming",f="genre/movie/list";async function v(){const t=`${r}${b}?api_key=${a}`,e=await(await fetch(t)).json();if(e.results.length===0){h();return}const s=Math.floor(Math.random()*e.results.length),o=e.results[s];S(o)}function h(){const t=document.getElementById("movies-container");t.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}function $(t,n){const e=JSON.parse(localStorage.getItem("myLibrary"))||{};e[t]?(delete e[t],n.textContent="Add to my library"):(e[t]=!0,n.textContent="Remove from my library"),localStorage.setItem("myLibrary",JSON.stringify(e))}async function S(t){const n=`${r}${f}?api_key=${a}`,s=await(await fetch(n)).json(),o=t.genre_ids.map(g=>{const i=s.genres.find(y=>y.id===g);return i?i.name:""}),{vote_average:l,vote_count:c,popularity:m,overview:d}=t,p=o.join(", "),u=document.getElementById("movies-container");u.innerHTML=`
    <div class="film-card">
      <img class="upcoming-img" src="https://image.tmdb.org/t/p/original/${t.backdrop_path}" alt="${t.title}" />
      <div class="film-details">
        <h2 class="upcoming-film-title">${t.title}</h2>
        <ul class="upcoming-movie-list">
        <ul class="left-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Release date</p>
            <p class="date">${L(t.release_date)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Vote / Votes</p>
            <div class="rating-wraper">
              <p class="rating">${l}</p>
              <p class="slesh">/</p>
              <p class="rating">${c}</p>
            </div>
          </li>
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${N(m)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${p}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${d}</p>
        <button id="libraryButton" data-film-id="${t.id}" class="btn my-library-btn" type="button">Add to my library</button>
      </div>
    </div>
  `,_(t.id),document.getElementById("libraryButton").onclick=function(){$(t.id,this)}}function _(t){const n=JSON.parse(localStorage.getItem("myLibrary"))||{},e=document.getElementById("libraryButton");n[t]?e.textContent="Remove from my library":e.textContent="Add to my library"}function L(t){const n=new Date(t),e=n.getDate().toString().padStart(2,"0"),s=(n.getMonth()+1).toString().padStart(2,"0"),o=n.getFullYear();return`${e}.${s}.${o}`}function N(t){return Number(t).toFixed(1)}v();
