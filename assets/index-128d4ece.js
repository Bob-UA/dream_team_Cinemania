import"./switcher-02dd3ff0.js";import{b as k,f as B,s as R}from"./catalog_hero-044b610d.js";const f="9d709850c7590845ffb60644b29d6f51",h="https://api.themoviedb.org/3/",M="movie/upcoming",L="genre/movie/list",c="MY_LIBRARY";let m={};async function N(){const e=`${h}${M}?api_key=${f}`,s=await(await fetch(e)).json();if(s.results.length===0){O();return}const n=Math.floor(Math.random()*s.results.length),a=s.results[n];_(a)}function O(){const e=document.getElementById("movies-container");e.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}async function _(e){const t=`${h}${L}?api_key=${f}`,n=await(await fetch(t)).json(),a=e.genre_ids.map(v=>{const b=n.genres.find(w=>w.id===v);return b?b.name:""}),{vote_average:i,vote_count:r,popularity:g,overview:u}=e,l=a.join(", "),p=document.getElementById("movies-container");p.innerHTML=`
    <div class="film-card">
    <div class="img-wrapper">
      <img class="upcoming-img" src="https://image.tmdb.org/t/p/original/${e.backdrop_path}" alt="${e.title}" />
      <div class="img-gradient-container"></div>
      </div>
      <div class="film-details">
        <h2 class="upcoming-film-title">${e.title}</h2>
        <ul class="upcoming-movie-list">
        <ul class="left-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Release date</p>
            <p class="date">${P(e.release_date)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Vote / Votes</p>
            <div class="rating-wraper">
              <p class="rating">${i}</p>
              <p class="slesh">/</p>
              <p class="rating">${r}</p>
            </div>
          </li>
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${j(g)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${F(l)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${G(u)}</p>
        <button id="libraryButton" data-id="${e.id}" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `,m=e;const o={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},d=y(c);d&&d.map(v=>{if(v.id===m.id){o.addBtn.classList.add("hide"),o.removeBtm.classList.remove("hide");return}}),o.addBtn.addEventListener("click",A),o.removeBtm.addEventListener("click",E)}function A(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=y(c);let s="",n=[];if(t){n=$(t);const r=JSON.stringify(n);s=I(r)}const a=JSON.stringify(m),i=T(a,s);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),S(c,i)}function E(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=y(c);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const s=$(t);S(c,s)}function $(e){return e.map(t=>{if(t.id!==m.id)return t}).filter(t=>t)}function y(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function S(e,t){try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}}function I(e){return e.slice(1,e.length-1)}function T(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function P(e){const t=new Date(e),s=t.getDate().toString().padStart(2,"0"),n=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getFullYear();return`${s}.${n}.${a}`}function j(e){return Number(e).toFixed(1)}function F(e){return e.length>30?e.substring(0,30)+"...":e}function G(e){return e.length>420?e.substring(0,420)+"...":e}N();const q="https://api.themoviedb.org/3/genre/movie/list",D="9d709850c7590845ffb60644b29d6f51",H=document.querySelector(".weekly-js-list"),C=await Y(),J=C.data.genres,U=await k("week",1);async function Y(){return await B.request({method:"GET",url:q,params:{api_key:D,language:"en"}})}H.innerHTML=await z(U.data.results.slice(0,3));async function z(e){const t=e.map(async({poster_path:n,title:a,genre_ids:i,id:r,release_date:g,vote_average:u})=>{const l=g.substr(0,4),p=x(J,i),o=Object.values(p),d=R(u);return`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${n}" alt="${a}" data-id="${r}" loading="lazy">
      <div class="weekly-list-overlay">
          <h3 class="weekly-list-title">${a}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${o.join(", ")} | ${l}</p>
          <img src="${d}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>
    <li class="weekly-list-tab tablet ">
    <img class="weekly-list-img-tab tablet " src="https://image.tmdb.org/t/p/original/${n}" alt="${a}" data-id="${r}" loading="lazy">
      <div class="weekly-list-overlay-tab tablet ">
          <h3 class="weekly-list-title-tab tablet ">${a}</h3>
          <p class="weekly-list-genre-tab tablet ">${o.join(", ")} | ${l}</p>
      </div>
    </li>
    <li class="weekly-list-desc desktop">
    <img class="weekly-list-img-desc desktop" src="https://image.tmdb.org/t/p/original/${n}" alt="${a}" data-id="${r}" loading="lazy">
      <div class="weekly-list-overlay-desc desktop">
          <h3 class="weekly-list-title-desc desktop">${a}</h3>
          <p class="weekly-list-genre-desc desktop">${o.join(", ")} | ${l}</p>
      </div>
    </li>`});return(await Promise.all(t)).join("")}function x(e,t){const s=[];return t.filter(n=>{e.map(({id:a,name:i})=>{a===n&&s.push(i)})}),s}
