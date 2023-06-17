import{r as i,c as C,d as $,s as h,b as w}from"./switcher-66fb3acf.js";const m="MY_LIBRARY";let f={},d=null,L=null;i.libraryContainer.addEventListener("click",O);function S(e){if(e.genres){const{poster_path:t,title:o,id:n,genres:r,release_date:s,vote_average:a}=e,c=r.map(p=>p.name),g=s?s.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-genres="${c.join(",")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${n}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        
        <div class="gallery-movies-wrap">
        <p class="gallery-movies-details">${c.join(", ")} | ${g}</p>
         <img src="${h(a)}" alt="raiting" class="star-rating-card"/>
          </div>

      </div>
    </li>
  `}else if(e.genre_ids){const{poster_path:t,title:o,id:n,genre_ids:r,release_date:s,vote_average:a}=e,c=E(w,r),g=Object.values(c),p=s?s.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-genres="${g.join(", ")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info" data-id="${n}"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        
        <div class="gallery-movies-wrap">
        <p class="gallery-movies-details">${g.join(", ")} | ${p}</p>
         <img src="${h(a)}" alt="raiting" class="star-rating-card"/>
          </div>

      </div>
    </li>
  `}}const y=9;let v=1,l=JSON.parse(localStorage.getItem("MY_LIBRARY"))||[];if(l.length>0){let t=function(o=l){const n=i.libraryContainer.querySelector(".gallery-movies");n.innerHTML="";const r=o.slice(0,v*y),s=r.map(a=>S(a)).join("");n.innerHTML=s,r.length===o.length&&e&&(e.style.display="none")};i.libraryContainer.innerHTML=`
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
  `;const e=document.getElementById("load-more");e&&e.addEventListener("click",()=>{v++,t()}),L=document.getElementById("genre-filter"),L.addEventListener("change",M),t()}else i.libraryContainer.innerHTML=`
  <div class=library__block-no-results>
  <p class="library__text-no-results">OOPS...</p>
  <p class="library__text-no-results">We are very sorry!</p>
  <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
  <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
  </div>
  `;function M(e){const t=e.target.value;if(t==="")u();else{console.log(t);const n=l.map(r=>{if(r.genres)return r.genres.map(a=>{if(a.name===t)return r}).filter(a=>a);if(r.genre_ids){const s=E(genresTotalArray,r.genre_ids);return Object.values(s).map(c=>{if(c.name===t)return r}).filter(c=>c)}}).map(r=>{if(r.length!==0)return r[0]}).filter(r=>r);console.log(n),n.length>0?(v=1,u(n),console.log(1)):(console.log(2),i.libraryContainer.innerHTML=`
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
        `,document.getElementById("genre-filter").addEventListener("change",M))}}function _(e){e.currentTarget===e.target&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",i.backdropMovieInfoContainer.removeEventListener("click",_))}function k(e){const t="Escape";e.code==t&&(i.backdropMovieInfoContainer.classList.add("is-hidden"),i.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",k))}async function O(e){if(!e.target.classList.contains("js-modal-info"))return;i.backdropMovieInfoContainer.addEventListener("click",_),window.addEventListener("keydown",k),i.closeModalBtn.addEventListener("click",B),d=+e.target.dataset.id;const{data:o}=await H(d);f=o;const n=await C(f);i.movieInfoContainer.insertAdjacentHTML("beforeend",n),i.modal.classList.toggle("is-hidden");const r={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},s=b(m);s&&s.map(a=>{if(a.id===d){r.addBtn.classList.add("hide"),r.removeBtm.classList.remove("hide");return}}),r.addBtn.addEventListener("click",R),r.removeBtm.addEventListener("click",A)}function R(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=b(m);let o="",n=[];if(t&&d){n=I(t);const s=JSON.stringify(n);o=D(s)}const r=JSON.stringify(f);l=G(r,o),e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),T(m,l),u(l)}function A(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=b(m);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),l=I(t),T(m,l),u(l)}function u(e){const t=i.libraryContainer.querySelector(".gallery-movies"),n=e.slice(0,v*y).map(r=>S(r)).join("");t.innerHTML=n}function I(e){return e.map(t=>{if(t.id!==d)return t}).filter(t=>{if(t)return t})}function b(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function T(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}}function D(e){return e.slice(1,e.length-1)}function G(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function B(){i.modal.classList.toggle("is-hidden"),i.movieInfoContainer.innerHTML="",i.closeModalBtn.removeEventListener("click",B)}async function H(e){return await $(e)}function E(e,t){const o=[];return t.filter(n=>{e.map(({id:r,name:s})=>{r===n&&o.push(s)})}),o}
