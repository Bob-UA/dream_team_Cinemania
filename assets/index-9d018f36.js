import{e as h,b as y,g as S}from"./switcher-007e3da1.js";import{s as $}from"./catalog_hero-cd0d3e12.js";const g="MY_LIBRARY";let u={};async function w(){const e=await h();if(e.data.results.length===0){k();return}const t=Math.floor(Math.random()*e.data.results.length),s=e.data.results[t];B(s)}function k(){const e=document.getElementById("movies-container");e.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}async function B(e){const t=e.genre_ids.map(d=>{const c=y.find(m=>m.id===d);return c?c.name:""}),{vote_average:s,vote_count:i,popularity:a,overview:r}=e,o=t.join(", "),p=document.getElementById("movies-container");p.innerHTML=`
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
            <p class="date">${F(e.release_date)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Vote / Votes</p>
            <div class="rating-wraper">
              <p class="rating">${s}</p>
              <p class="slesh">/</p>
              <p class="rating">${i}</p>
            </div>
          </li>
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${N(a)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${j(o)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${A(r)}</p>
        <button id="libraryButton" data-id="${e.id}" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `,u=e;const n={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},l=v(g);l&&l.map(d=>{if(d.id===u.id){n.addBtn.classList.add("hide"),n.removeBtm.classList.remove("hide");return}}),n.addBtn.addEventListener("click",M),n.removeBtm.addEventListener("click",L)}function M(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=v(g);let s="",i=[];if(t){i=b(t);const o=JSON.stringify(i);s=O(o)}const a=JSON.stringify(u),r=R(a,s);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),f(g,r)}function L(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=v(g);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const s=b(t);f(g,s)}function b(e){return e.map(t=>{if(t.id!==u.id)return t}).filter(t=>t)}function v(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function f(e,t){try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}}function O(e){return e.slice(1,e.length-1)}function R(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function F(e){const t=new Date(e),s=t.getDate().toString().padStart(2,"0"),i=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getFullYear();return`${s}.${i}.${a}`}function N(e){return Number(e).toFixed(1)}function j(e){return e.length>30?e.substring(0,30)+"...":e}function A(e){return e.length>420?e.substring(0,420)+"...":e}w();const H=document.querySelector(".weekly-js-list"),I=await S("week",1);H.innerHTML=await T(I.data.results.slice(0,3));async function T(e){const t=e.map(async({poster_path:i,title:a,genre_ids:r,id:o,release_date:p,vote_average:n})=>{const l=p.substr(0,4),d=q(y,r),c=Object.values(d),m=$(n);return`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${i}" alt="${a}" data-id="${o}" loading="lazy">
      <div class="weekly-list-overlay">
          <h3 class="weekly-list-title">${a}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${c.join(", ")} | ${l}</p>
          <img src="${m}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>
    <li class="weekly-list-tab tablet ">
    <img class="weekly-list-img-tab tablet " src="https://image.tmdb.org/t/p/original/${i}" alt="${a}" data-id="${o}" loading="lazy">
      <div class="weekly-list-overlay-tab tablet ">
          <h3 class="weekly-list-title-tab tablet ">${a}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre-tab tablet ">${c.join(", ")} | ${l}</p>
          <img src="${m}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>
    <li class="weekly-list-desc desktop">
    <img class="weekly-list-img-desc desktop" src="https://image.tmdb.org/t/p/original/${i}" alt="${a}" data-id="${o}" loading="lazy">
      <div class="weekly-list-overlay-desc desktop">
          <h3 class="weekly-list-title-desc desktop">${a}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre-desc desktop">${c.join(", ")} | ${l}</p>
          <img src="${m}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>`});return(await Promise.all(t)).join("")}function q(e,t){const s=[];return t.filter(i=>{e.map(({id:a,name:r})=>{a===i&&s.push(r)})}),s}
