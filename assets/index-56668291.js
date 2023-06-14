import"./switcher-ab2f4541.js";import{g as h,d as w}from"./catalog_hero-9c0b363a.js";const y="9d709850c7590845ffb60644b29d6f51",v="https://api.themoviedb.org/3/",$="movie/upcoming",L="genre/movie/list";async function S(){const t=`${v}${$}?api_key=${y}`,e=await(await fetch(t)).json();if(e.results.length===0){k();return}const i=Math.floor(Math.random()*e.results.length),n=e.results[i];M(n)}function k(){const t=document.getElementById("movies-container");t.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}function _(t,s){const e=JSON.parse(localStorage.getItem("myLibrary"))||{};e[t]?(delete e[t],s.textContent="Add to my library"):(e[t]=!0,s.textContent="Remove from my library"),localStorage.setItem("myLibrary",JSON.stringify(e))}async function M(t){const s=`${v}${L}?api_key=${y}`,i=await(await fetch(s)).json(),n=t.genre_ids.map(f=>{const g=i.genres.find(b=>b.id===f);return g?g.name:""}),{vote_average:a,vote_count:r,popularity:l,overview:c}=t,m=n.join(", "),o=document.getElementById("movies-container");o.innerHTML=`
    <div class="film-card">
    <div class="img-wrapper">
      <img class="upcoming-img" src="https://image.tmdb.org/t/p/original/${t.backdrop_path}" alt="${t.title}" />
      <div class="img-container"></div>
      </div>
      <div class="film-details">
        <h2 class="upcoming-film-title">${t.title}</h2>
        <ul class="upcoming-movie-list">
        <ul class="left-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Release date</p>
            <p class="date">${N(t.release_date)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Vote / Votes</p>
            <div class="rating-wraper">
              <p class="rating">${a}</p>
              <p class="slesh">/</p>
              <p class="rating">${r}</p>
            </div>
          </li>
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${I(l)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${R(m)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${A(c)}</p>
        <button id="libraryButton" data-film-id="${t.id}" class="btn my-library-btn" type="button">Add to my library</button>
      </div>
    </div>
  `,E(t.id),document.getElementById("libraryButton").onclick=function(){_(t.id,this)}}function E(t){const s=JSON.parse(localStorage.getItem("myLibrary"))||{},e=document.getElementById("libraryButton");s[t]?e.textContent="Remove from my library":e.textContent="Add to my library"}function N(t){const s=new Date(t),e=s.getDate().toString().padStart(2,"0"),i=(s.getMonth()+1).toString().padStart(2,"0"),n=s.getFullYear();return`${e}.${i}.${n}`}function I(t){return Number(t).toFixed(1)}function R(t){return t.length>30?t.substring(0,30)+"...":t}function A(t){return t.length>420?t.substring(0,420)+"...":t}S();const O="https://api.themoviedb.org/3/genre/movie/list",P="9d709850c7590845ffb60644b29d6f51",d=document.querySelector(".weekly-js-list"),B=await j(),T=B.data.genres,u=await h("week",1);async function j(){return await w.request({method:"GET",url:O,params:{api_key:P,language:"en"}})}async function x(){window.innerWidth<767?d.innerHTML=await p(u.data.results.slice(0,1)):d.innerHTML=await p(u.data.results.slice(0,3))}window.addEventListener("resize",x);d.innerHTML=await p(u.data.results.slice(0,3));async function p(t){const s=t.map(async({poster_path:i,title:n,genre_ids:a,id:r,release_date:l})=>{const c=l.substr(0,4),m=C(T,a),o=Object.values(m);return console.log(o),`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${i}" alt="${n}" data-id="${r}" loading="lazy">
      <div class="weekly-list-overlay">
          <h3 class="weekly-list-title">${n}</h3>
          <p class="weekly-list-genre">${o.join(", ")} | ${c}</p>
      </div>
    </li>`});return(await Promise.all(s)).join("")}function C(t,s){const e=[];return s.filter(i=>{t.map(({id:n,name:a})=>{n===i&&e.push(a)})}),e}
