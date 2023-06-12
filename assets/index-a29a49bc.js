import"./my_library-690a257d.js";import"./catalog_hero-e1d24f9f.js";const a="9d709850c7590845ffb60644b29d6f51",r="https://api.themoviedb.org/3/",b="movie/upcoming",f="genre/movie/list";async function v(){const t=`${r}${b}?api_key=${a}`,e=await(await fetch(t)).json();if(e.results.length===0){h();return}const i=Math.floor(Math.random()*e.results.length),s=e.results[i];S(s)}function h(){const t=document.getElementById("movies-container");t.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}function $(t,n){const e=JSON.parse(localStorage.getItem("myLibrary"))||{};e[t]?(delete e[t],n.textContent="Add to my library"):(e[t]=!0,n.textContent="Remove from my library"),localStorage.setItem("myLibrary",JSON.stringify(e))}async function S(t){const n=`${r}${f}?api_key=${a}`,i=await(await fetch(n)).json(),s=t.genre_ids.map(g=>{const o=i.genres.find(y=>y.id===g);return o?o.name:""}),{vote_average:l,vote_count:c,popularity:m,overview:u}=t,d=s.join(", "),p=document.getElementById("movies-container");p.innerHTML=`
    <div class="film-card">
      <img class="upcoming-img" src="https://image.tmdb.org/t/p/original/${t.backdrop_path}" alt="${t.title}" />
      <div class="film-details">
        <h2 class="upcoming-film-title">${t.title}</h2>
        <ul class="upcoming-movie-list">
        <ul class="left-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Release date</p>
            <p class="date">${_(t.release_date)}</p>
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
            <p class="info-data-item">${I(d)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${w(u)}</p>
        <button id="libraryButton" data-film-id="${t.id}" class="btn my-library-btn" type="button">Add to my library</button>
      </div>
    </div>
  `,L(t.id),document.getElementById("libraryButton").onclick=function(){$(t.id,this)}}function L(t){const n=JSON.parse(localStorage.getItem("myLibrary"))||{},e=document.getElementById("libraryButton");n[t]?e.textContent="Remove from my library":e.textContent="Add to my library"}function _(t){const n=new Date(t),e=n.getDate().toString().padStart(2,"0"),i=(n.getMonth()+1).toString().padStart(2,"0"),s=n.getFullYear();return`${e}.${i}.${s}`}function N(t){return Number(t).toFixed(1)}function I(t){return t.length>30?t.substring(0,30)+"...":t}function w(t){return t.length>420?t.substring(0,420)+"...":t}v();
