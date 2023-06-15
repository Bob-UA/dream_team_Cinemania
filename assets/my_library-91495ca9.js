import"./switcher-02dd3ff0.js";function u(t,o,r,l,e){const n=l.map(c=>c.name),i=e?e.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-id="${r}" data-genres="${n.join(",")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay js-modal-info"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        <p class="gallery-movies-details">${n.join(", ")} | ${i}</p>
      </div>
    </li>
  `}const d=9;let m=1;const s=document.getElementById("my-library"),a=JSON.parse(localStorage.getItem("MY_LIBRARY"))||[];if(a.length>0){let o=function(r=a){const l=s.querySelector(".gallery-movies"),e=r.slice(0,m*d);l.innerHTML=e.map(n=>{const{poster_path:i,title:c,id:v,genres:y,release_date:p}=n;return u(i,c,v,y,p)}).join(""),e.length===r.length&&t&&(t.style.display="none")};s.innerHTML=`
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
    ${a.length>d?'<button class="btn library__load-more" id="load-more">Load More</button>':""}
  `;const t=document.getElementById("load-more");t&&t.addEventListener("click",()=>{m++,o()}),document.querySelector("#genre-filter").addEventListener("change",r=>{const l=r.target.value;if(l==="")o();else{const e=a.filter(n=>n.genres.some(i=>i.name===l));e.length>0?(m=1,o(e)):s.innerHTML=`
        <div class=library__block-no-results>
          <p class="library__text-no-results">OOPS...</p>
          <p class="library__text-no-results">We are very sorry!</p>
          <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
          <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
          </div>
        `}}),o()}else s.innerHTML=`
  <div class=library__block-no-results>
  <p class="library__text-no-results">OOPS...</p>
  <p class="library__text-no-results">We are very sorry!</p>
  <p class="library__text-no-results">There are no movies of selected genre in your library.</p>
  <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
  </div>
  `;
