import{r as i,c as _,d as k,e as I,A as T}from"./switcher-89e0c97e.js";const B="https://api.themoviedb.org/3/genre/movie/list",d="MY_LIBRARY";let u={},c=null;const E=await H(),C=E.data.genres;i.libraryContainer.addEventListener("click",$);function f(e){if(e.genres){const{poster_path:t,title:o,id:s,genres:r,release_date:n}=e,a=r.map(g=>g.name),m=n?n.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-genres="${a.join(",")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${s}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        <p class="gallery-movies-details">${a.join(", ")} | ${m}</p>
      </div>
    </li>
  `}else if(e.genre_ids){const{poster_path:t,title:o,id:s,genre_ids:r,release_date:n}=e,a=q(C,r),m=Object.values(a),g=n?n.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-genres="${m.join(", ")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${s}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        <p class="gallery-movies-details">${m.join(", ")} | ${g}</p>
      </div>
    </li>
  `}}const y=9;let v=1,l=JSON.parse(localStorage.getItem("MY_LIBRARY"))||[];if(l.length>0){let t=function(o=l){const s=i.libraryContainer.querySelector(".gallery-movies"),r=o.slice(0,v*y),n=r.map(a=>f(a)).join("");s.innerHTML=n,r.length===o.length&&e&&(e.style.display="none")};i.libraryContainer.innerHTML=`
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
    ${l.length>y?'<button class="btn library__load-more" id="load-more">Load More</button>':""}
  `;const e=document.getElementById("load-more");e&&e.addEventListener("click",()=>{v++,t()}),document.querySelector("#genre-filter").addEventListener("change",o=>{const s=o.target.value;if(s==="")t();else{const r=l.filter(n=>n.genres.some(a=>a.name===s));r.length>0?(v=1,t(r)):i.libraryContainer.innerHTML=`
        <div class=library__block-no-results>
          <p class="library__text-no-results">OOPS...</p>
          <p class="library__text-no-results">We are very sorry!</p>
          <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
          <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
          </div>
        `}}),t()}else i.libraryContainer.innerHTML=`
  <div class=library__block-no-results>
  <p class="library__text-no-results">OOPS...</p>
  <p class="library__text-no-results">We are very sorry!</p>
  <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
  <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
  </div>
  `;function b(e){e.currentTarget===e.target&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",i.backdropMovieInfoContainer.removeEventListener("click",b))}function h(e){const t="Escape";e.code==t&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",h))}async function $(e){if(!e.target.classList.contains("js-modal-info"))return;i.backdropMovieInfoContainer.addEventListener("click",b),window.addEventListener("keydown",h),i.closeModalBtn.addEventListener("click",M),c=+e.target.dataset.id;const{data:o}=await j(c);u=o;const s=await _(u);i.movieInfoContainer.insertAdjacentHTML("beforeend",s),i.modal.classList.toggle("is-hidden");const r={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},n=p(d);n&&n.map(a=>{if(a.id===c){r.addBtn.classList.add("hide"),r.removeBtm.classList.remove("hide");return}}),r.addBtn.addEventListener("click",R),r.removeBtm.addEventListener("click",A)}function R(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=p(d);let o="",s=[];if(t&&c){s=S(t);const a=JSON.stringify(s);o=O(a)}const r=JSON.stringify(u),n=w(r,o);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),L(d,n)}function A(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=p(d);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),l=S(t),L(d,l);const o=i.libraryContainer.querySelector(".gallery-movies"),r=l.slice(0,v*y).map(n=>f(n)).join("");o.innerHTML=r}function S(e){return e.map(t=>{if(t.id!==c)return t}).filter(t=>{if(t)return t})}function p(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function L(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}}function O(e){return e.slice(1,e.length-1)}function w(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function M(){i.modal.classList.toggle("is-hidden"),i.movieInfoContainer.innerHTML="",i.closeModalBtn.removeEventListener("click",M)}async function j(e){return await k(e)}async function H(){return await I.request({method:"GET",url:B,params:{api_key:T,language:"en"}})}function q(e,t){const o=[];return t.filter(s=>{e.map(({id:r,name:n})=>{r===s&&o.push(n)})}),o}
