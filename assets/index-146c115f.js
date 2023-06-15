import"./switcher-bb20b602.js";import{g as M,d as _,s as k}from"./catalog_hero-546d8d63.js";const w="9d709850c7590845ffb60644b29d6f51",$="https://api.themoviedb.org/3/",N="movie/upcoming",O="genre/movie/list",c="MY_LIBRARY";let d={};async function E(){const e=`${$}${N}?api_key=${w}`,s=await(await fetch(e)).json();if(s.results.length===0){A();return}const n=Math.floor(Math.random()*s.results.length),o=s.results[n];I(o)}function A(){const e=document.getElementById("movies-container");e.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}async function I(e){const t=`${$}${O}?api_key=${w}`,n=await(await fetch(t)).json(),o=e.genre_ids.map(v=>{const S=n.genres.find(L=>L.id===v);return S?S.name:""}),{vote_average:a,vote_count:r,popularity:m,overview:u}=e,g=o.join(", "),p=document.getElementById("movies-container");p.innerHTML=`
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
            <p class="date">${G(e.release_date)}</p>
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
            <p class="info-data-item">${j(m)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${q(g)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${D(u)}</p>
        <button id="libraryButton" data-id="${e.id}" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `,d=e;const i={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},l=b(c);l&&l.map(v=>{if(v.id===d.id){i.addBtn.classList.add("hide"),i.removeBtm.classList.remove("hide");return}}),i.addBtn.addEventListener("click",T),i.removeBtm.addEventListener("click",P)}function T(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=b(c);let s="",n=[];if(t){n=B(t);const r=JSON.stringify(n);s=F(r)}const o=JSON.stringify(d),a=H(o,s);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),R(c,a)}function P(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=b(c);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const s=B(t);R(c,s)}function B(e){return e.map(t=>{if(t.id!==d.id)return t}).filter(t=>t)}function b(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function R(e,t){try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}}function F(e){return e.slice(1,e.length-1)}function H(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function G(e){const t=new Date(e),s=t.getDate().toString().padStart(2,"0"),n=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear();return`${s}.${n}.${o}`}function j(e){return Number(e).toFixed(1)}function q(e){return e.length>30?e.substring(0,30)+"...":e}function D(e){return e.length>420?e.substring(0,420)+"...":e}E();const C="https://api.themoviedb.org/3/genre/movie/list",J="9d709850c7590845ffb60644b29d6f51",f=document.querySelector(".weekly-js-list"),U=await z(),Y=U.data.genres,y=await M("week",1);async function z(){return await _.request({method:"GET",url:C,params:{api_key:J,language:"en"}})}async function W(){window.innerWidth<767?f.innerHTML=await h(y.data.results.slice(0,1)):f.innerHTML=await h(y.data.results.slice(0,3))}window.addEventListener("resize",W);f.innerHTML=await h(y.data.results.slice(0,3));async function h(e){const t=e.map(async({poster_path:n,title:o,genre_ids:a,id:r,release_date:m,vote_average:u})=>{const g=m.substr(0,4),p=x(Y,a),i=Object.values(p),l=k(u);return`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${n}" alt="${o}" data-id="${r}" loading="lazy">
      <div class="weekly-list-overlay">
          <h3 class="weekly-list-title">${o}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${i.join(", ")} | ${g}</p>
          <img src="${l}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>`});return(await Promise.all(t)).join("")}function x(e,t){const s=[];return t.filter(n=>{e.map(({id:o,name:a})=>{o===n&&s.push(a)})}),s}
