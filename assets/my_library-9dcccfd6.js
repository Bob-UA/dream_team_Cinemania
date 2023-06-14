import"./switcher-8717d1fb.js";function p(t,o,n,i,e){const r=i.map(c=>c.name),l=e?e.split("-")[0]:"";return`
    <li class="gallery-movies-item" data-id="${n}" data-genres="${r.join(",")}">
      <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${o}" loading="lazy">
      <div class="gallery-movies-overlay"></div>
      <div class="gallery-movies-description">
        <h3 class="gallery-movies-title">${o}</h3>
        <p class="gallery-movies-details">${r.join(", ")} | ${l}</p>
      </div>
    </li>
  `}const d=9;let m=1;const a=document.getElementById("my-library"),s=JSON.parse(localStorage.getItem("MY_LIBRARY"))||[];if(s.length>0){let o=function(n=s){const i=a.querySelector(".gallery-movies"),e=n.slice(0,m*d);i.innerHTML=e.map(r=>{const{poster_path:l,title:c,id:v,genres:g,release_date:u}=r;return p(l,c,v,g,u)}).join(""),e.length===n.length&&t&&(t.style.display="none")};a.innerHTML=`
    <select id="genre-filter">
      <option value="">Genre</option>
      <option value="Romance">Romance</option>
      <option value="Detective">Detective</option>
      <option value="Thriller">Thriller</option>
      <option value="Action">Action</option>
      <option value="Documentary">Documentary</option>
      <option value="Horror">Horror</option>
    </select>
    <ul class="gallery-movies"></ul>
    ${s.length>d?'<button class="btn" id="load-more">Load More</button>':""}
  `;const t=document.getElementById("load-more");t&&t.addEventListener("click",()=>{m++,o()}),document.querySelector("#genre-filter").addEventListener("change",n=>{const i=n.target.value;if(i==="")o();else{const e=s.filter(r=>r.genres.some(l=>l.name===i));e.length>0?(m=1,o(e)):a.innerHTML=`
          <p>OOPS... We are very sorry! There are no movies of selected genre in your library.</p>
          <button class="btn" onclick="window.location.href='../../index.html'">Search movie</button>
        `}}),o()}else a.innerHTML=`
    <p>OOPS... We are very sorry! You don’t have any movies at your library.</p>
    <button class="btn" onclick="window.location.href='search.html'">Search movie</button>
  `;
