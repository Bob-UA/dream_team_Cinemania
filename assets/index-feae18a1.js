import{e as O,b as k,g as E,r as i,c as C,d as T,s as N}from"./switcher-c2696161.js";import"./catalog_hero-dbf06736.js";const v="MY_LIBRARY";let f={};async function F(){const e=await O();if(e.data.results.length===0){j();return}const t=Math.floor(Math.random()*e.data.results.length),o=e.data.results[t];A(o)}function j(){const e=document.getElementById("movies-container");e.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}async function A(e){const t=e.genre_ids.map(m=>{const d=k.find(g=>g.id===m);return d?d.name:""}),{vote_average:o,vote_count:s,popularity:a,overview:r}=e,n=t.join(", "),y=document.getElementById("movies-container");y.innerHTML=`
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
              <p class="rating">${o}</p>
              <p class="slesh">/</p>
              <p class="rating">${s}</p>
            </div>
          </li>
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${Y(a)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${_(n)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${z(r)}</p>
        <button id="libraryButton" data-id="${e.id}" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `,f=e;const l={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},c=b(v);c&&c.map(m=>{if(m.id===f.id){l.addBtn.classList.add("hide"),l.removeBtm.classList.remove("hide");return}}),l.addBtn.addEventListener("click",q),l.removeBtm.addEventListener("click",H)}function q(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=b(v);let o="",s=[];if(t){s=$(t);const n=JSON.stringify(s);o=J(n)}const a=JSON.stringify(f),r=D(a,o);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),M(v,r)}function H(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=b(v);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const o=$(t);M(v,o)}function $(e){return e.map(t=>{if(t.id!==f.id)return t}).filter(t=>t)}function b(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function M(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}}function J(e){return e.slice(1,e.length-1)}function D(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function G(e){const t=new Date(e),o=t.getDate().toString().padStart(2,"0"),s=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getFullYear();return`${o}.${s}.${a}`}function Y(e){return Number(e).toFixed(1)}function _(e){return e.length>30?e.substring(0,30)+"...":e}function z(e){return e.length>420?e.substring(0,420)+"...":e}F();const p="MY_LIBRARY";let S={},u=null;const P=document.querySelector(".weekly-js-list"),V=await E("week",1);P.innerHTML=await K(V.data.results.slice(0,3));async function K(e){const t=e.map(async({poster_path:s,title:a,genre_ids:r,id:n,release_date:y,vote_average:l})=>{const c=y.substr(0,4),m=U(k,r),d=Object.values(m),g=N(l);return`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${s}" alt="${a}" data-id="${n}" loading="lazy">
      <div class="weekly-list-overlay js-modal-info" data-id="${n}">
          <h3 class="weekly-list-title">${a}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${d.join(", ")} | ${c}</p>
          <img src="${g}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>
    <li class="weekly-list-tab tablet ">
    <img class="weekly-list-img-tab tablet " src="https://image.tmdb.org/t/p/original/${s}" alt="${a}" data-id="${n}" loading="lazy">
      <div class="weekly-list-overlay-tab tablet js-modal-info" data-id="${n}">
          <h3 class="weekly-list-title-tab tablet">${a}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre-tab tablet ">${d.join(", ")} | ${c}</p>
          <img src="${g}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>
    <li class="weekly-list-desc desktop">
    <img class="weekly-list-img-desc desktop" src="https://image.tmdb.org/t/p/original/${s}" alt="${a}" data-id="${n}" loading="lazy">
      <div class="weekly-list-overlay-desc desktop js-modal-info" data-id="${n}">
          <h3 class="weekly-list-title-desc desktop">${a}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre-desc desktop">${d.join(", ")} | ${c}</p>
          <img src="${g}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>`});return(await Promise.all(t)).join("")}function U(e,t){const o=[];return t.filter(s=>{e.map(({id:a,name:r})=>{a===s&&o.push(r)})}),o}i.weeklyContainer.addEventListener("click",x);function w(e){e.currentTarget===e.target&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",i.backdropMovieInfoContainer.removeEventListener("click",w))}function B(e){const t="Escape";e.code==t&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",B))}async function x(e){if(!e.target.classList.contains("js-modal-info"))return;i.backdropMovieInfoContainer.addEventListener("click",w),window.addEventListener("keydown",B),i.closeModalBtn.addEventListener("click",R),u=+e.target.dataset.id;const{data:o}=await ee(u);S=o;const s=await C(S);i.movieInfoContainer.insertAdjacentHTML("beforeend",s),i.modal.classList.toggle("is-hidden");const a={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},r=h(p);r&&r.map(n=>{if(n.id===u){a.addBtn.classList.add("hide"),a.removeBtm.classList.remove("hide");return}}),a.addBtn.addEventListener("click",W),a.removeBtm.addEventListener("click",Q)}function W(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=h(p);let o="",s=[];if(t&&u){s=L(t);const n=JSON.stringify(s);o=X(n)}const a=JSON.stringify(S),r=Z(a,o);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),I(p,r)}function Q(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=h(p);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const o=L(t);I(p,o)}function L(e){return e.map(t=>{if(t.id!==u)return t}).filter(t=>{if(t)return t})}function h(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function I(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}}function X(e){return e.slice(1,e.length-1)}function Z(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function R(){i.modal.classList.toggle("is-hidden"),i.movieInfoContainer.innerHTML="",i.closeModalBtn.removeEventListener("click",R)}async function ee(e){return await T(e)}
