import{r as i,c as B,d as A,h as C,A as R}from"./switcher-bddf068d.js";const w="https://api.themoviedb.org/3/genre/movie/list",m="MY_LIBRARY";let p={},d=null,b=null;const O=await q(),h=O.data.genres;i.libraryContainer.addEventListener("click",$);function L(e){if(e.genres){const{poster_path:t,title:o,id:r,genres:n,release_date:s}=e,a=n.map(v=>v.name),c=s?s.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-genres="${a.join(",")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${r}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        <p class="gallery-movies-details">${a.join(", ")} | ${c}</p>
      </div>
    </li>
  `}else if(e.genre_ids){const{poster_path:t,title:o,id:r,genre_ids:n,release_date:s}=e,a=E(h,n),c=Object.values(a),v=s?s.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-genres="${c.join(", ")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${r}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        <p class="gallery-movies-details">${c.join(", ")} | ${v}</p>
      </div>
    </li>
  `}}const f=9;let g=1,l=JSON.parse(localStorage.getItem("MY_LIBRARY"))||[];if(l.length>0){let t=function(o=l){const r=i.libraryContainer.querySelector(".gallery-movies");r.innerHTML="";const n=o.slice(0,g*f),s=n.map(a=>L(a)).join("");r.innerHTML=s,n.length===o.length&&e&&(e.style.display="none")};i.libraryContainer.innerHTML=`
    <select id="genre-filter" class="my-library__select">
      <option value="">Genre</option>
      <option value="Romance">Romance</option>
      <option value="Detective">Detective</option>
      <option value="Thriller">Thriller</option>
      <option value="Action">Action</option>
      <option value="Documentary">Documentary</option>
      <option value="Horror">Horror</option>
    </select>
    <ul class="gallery-movies"></ul>
    ${l.length>f?'<button class="btn library__load-more" id="load-more">Load More</button>':""}
  `;const e=document.getElementById("load-more");e&&e.addEventListener("click",()=>{g++,t()}),b=document.getElementById("genre-filter"),b.addEventListener("change",S),t()}else i.libraryContainer.innerHTML=`
  <div class=library__block-no-results>
  <p class="library__text-no-results">OOPS...</p>
  <p class="library__text-no-results">We are very sorry!</p>
  <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
  <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
  </div>
  `;function S(e){const t=e.target.value;if(t==="")u();else{console.log(t);const r=l.map(n=>{if(n.genres)return n.genres.map(a=>{if(a.name===t)return n}).filter(a=>a);if(n.genre_ids){const s=E(h,n.genre_ids);return Object.values(s).map(c=>{if(c.name===t)return n}).filter(c=>c)}}).map(n=>{if(n.length!==0)return n[0]}).filter(n=>n);console.log(r),r.length>0?(g=1,u(r),console.log(1)):(console.log(2),i.libraryContainer.innerHTML=`
    <select id="genre-filter" class="my-library__select">
      <option value="">Genre</option>
      <option value="Romance">Romance</option>
      <option value="Detective">Detective</option>
      <option value="Thriller">Thriller</option>
      <option value="Action">Action</option>
      <option value="Documentary">Documentary</option>
      <option value="Horror">Horror</option>
    </select>
    <ul class="gallery-movies"></ul>
 
        <div class=library__block-no-results>
          <p class="library__text-no-results">OOPS...</p>
          <p class="library__text-no-results">We are very sorry!</p>
          <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
          <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
          </div>
        `,document.getElementById("genre-filter").addEventListener("change",S))}}function M(e){e.currentTarget===e.target&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",i.backdropMovieInfoContainer.removeEventListener("click",M))}function _(e){const t="Escape";e.code==t&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",_))}async function $(e){if(!e.target.classList.contains("js-modal-info"))return;i.backdropMovieInfoContainer.addEventListener("click",M),window.addEventListener("keydown",_),i.closeModalBtn.addEventListener("click",T),d=+e.target.dataset.id;const{data:o}=await N(d);p=o;const r=await B(p);i.movieInfoContainer.insertAdjacentHTML("beforeend",r),i.modal.classList.toggle("is-hidden");const n={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},s=y(m);s&&s.map(a=>{if(a.id===d){n.addBtn.classList.add("hide"),n.removeBtm.classList.remove("hide");return}}),n.addBtn.addEventListener("click",G),n.removeBtm.addEventListener("click",D)}function G(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=y(m);let o="",r=[];if(t&&d){r=k(t);const s=JSON.stringify(r);o=H(s)}const n=JSON.stringify(p);l=j(n,o),e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),I(m,l),u(l)}function D(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=y(m);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),l=k(t),I(m,l),u(l)}function u(e){const t=i.libraryContainer.querySelector(".gallery-movies"),r=e.slice(0,g*f).map(n=>L(n)).join("");t.innerHTML=r}function k(e){return e.map(t=>{if(t.id!==d)return t}).filter(t=>{if(t)return t})}function y(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function I(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}}function H(e){return e.slice(1,e.length-1)}function j(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function T(){i.modal.classList.toggle("is-hidden"),i.movieInfoContainer.innerHTML="",i.closeModalBtn.removeEventListener("click",T)}async function N(e){return await A(e)}async function q(){return await C.request({method:"GET",url:w,params:{api_key:R,language:"en"}})}function E(e,t){const o=[];return t.filter(r=>{e.map(({id:n,name:s})=>{n===r&&o.push(s)})}),o}
