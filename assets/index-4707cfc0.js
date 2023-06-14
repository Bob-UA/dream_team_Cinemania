import"./switcher-8717d1fb.js";import{g as M,d as _,s as k}from"./catalog_hero-e611c1fa.js";const $="9d709850c7590845ffb60644b29d6f51",L="https://api.themoviedb.org/3/",N="movie/upcoming",O="genre/movie/list",y="MY_LIBRARY";async function B(){const t=`${L}${N}?api_key=${$}`,s=await(await fetch(t)).json();if(s.results.length===0){E();return}const r=Math.floor(Math.random()*s.results.length),n=s.results[r];I(n)}function E(){const t=document.getElementById("movies-container");t.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}async function I(t){const e=`${L}${O}?api_key=${$}`,r=await(await fetch(e)).json(),n=t.genre_ids.map(o=>{const a=r.genres.find(f=>f.id===o);return a?a.name:""}),{vote_average:c,vote_count:m,popularity:u,overview:g}=t,p=n.join(", "),v=document.getElementById("movies-container");v.innerHTML=`
    <div class="film-card">
    <div class="img-wrapper">
      <img class="upcoming-img" src="https://image.tmdb.org/t/p/original/${t.backdrop_path}" alt="${t.title}" />
      <div class="img-gradient-container"></div>
      </div>
      <div class="film-details">
        <h2 class="upcoming-film-title">${t.title}</h2>
        <ul class="upcoming-movie-list">
        <ul class="left-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Release date</p>
            <p class="date">${G(t.release_date)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Vote / Votes</p>
            <div class="rating-wraper">
              <p class="rating">${c}</p>
              <p class="slesh">/</p>
              <p class="rating">${m}</p>
            </div>
          </li>
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${j(u)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${F(p)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${D(g)}</p>
        <button id="libraryButton" data-id="${t.id}" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `;const l=t,i={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},d=A(y);d&&d.map(o=>{if(o.id===l.id){i.addBtn.classList.add("hide"),i.removeBtm.classList.remove("hide");return}}),i.addBtn.addEventListener("click",()=>{let o="";if(d){const R=JSON.stringify(d);o=T(R)}const a=JSON.stringify(l),f=P(a,o);i.addBtn.classList.toggle("hide"),i.removeBtm.classList.toggle("hide"),S(y,f)}),i.removeBtm.addEventListener("click",()=>{i.addBtn.classList.toggle("hide"),i.removeBtm.classList.toggle("hide");const o=d.map(a=>{if(a.id!==l.id)return a}).filter(a=>{if(a)return a});S(y,o)})}function A(t){try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}function S(t,e){try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}}function T(t){return t.slice(1,t.length-1)}function P(t,e){return JSON.parse(e?`[${e}, ${t}]`:`[${t}]`)}function G(t){const e=new Date(t),s=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getFullYear();return`${s}.${r}.${n}`}function j(t){return Number(t).toFixed(1)}function F(t){return t.length>30?t.substring(0,30)+"...":t}function D(t){return t.length>420?t.substring(0,420)+"...":t}B();const J="https://api.themoviedb.org/3/genre/movie/list",U="9d709850c7590845ffb60644b29d6f51",h=document.querySelector(".weekly-js-list"),Y=await H(),z=Y.data.genres,b=await M("week",1);async function H(){return await _.request({method:"GET",url:J,params:{api_key:U,language:"en"}})}async function q(){window.innerWidth<767?h.innerHTML=await w(b.data.results.slice(0,1)):h.innerHTML=await w(b.data.results.slice(0,3))}window.addEventListener("resize",q);h.innerHTML=await w(b.data.results.slice(0,3));async function w(t){const e=t.map(async({poster_path:r,title:n,genre_ids:c,id:m,release_date:u,vote_average:g})=>{const p=u.substr(0,4),v=C(z,c),l=Object.values(v),i=k(g);return`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${r}" alt="${n}" data-id="${m}" loading="lazy">
      <div class="weekly-list-overlay">
          <h3 class="weekly-list-title">${n}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${l.join(", ")} | ${p}</p>
          <img src="${i}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>`});return(await Promise.all(e)).join("")}function C(t,e){const s=[];return e.filter(r=>{t.map(({id:n,name:c})=>{n===r&&s.push(c)})}),s}
