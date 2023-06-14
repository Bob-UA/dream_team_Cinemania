import"./switcher-b8bf2432.js";function g(e,o,i,r,n){return`<li class="gallery-movies-item" data-id="${i}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${e}" alt="${o}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${o}</h3>
                <p class="gallery-movies-details">${r.join(", ")} | ${n}</p>
            </div>
        </li>`}const l=JSON.parse(localStorage.getItem("movies")),c=document.querySelector("#my-library");if(l&&l.length>0){let i=function(){let r="";for(let t=(e-1)*o;t<e*o&&t<l.length;t++){const a=l[t],{poster_path:v,title:s,id:m,genre_ids:d,release_date:u}=a;r+=g(v,s,m,d,u)}c.innerHTML=`
      <div>
        <label for="genre-filter">Filter by genre:</label>
        <select id="genre-filter">
          <option value="">All</option>
          <option value="18">Romance</option>
          <option value="80">Detective</option>
          <option value="53">Thriller</option>
          <option value="28">Action</option>
          <option value="99">Documentary</option>
          <option value="27">Horror</option>
        </select>
      </div>
      <ul class="gallery-movies">
        ${r}
      </ul>
    `,e*o<l.length&&(c.innerHTML+='<button class="btn" id="load-more">Load more</button>');const n=document.querySelector("#load-more");n&&n.addEventListener("click",()=>{e++,i()}),document.querySelector("#genre-filter").addEventListener("change",t=>{const a=t.target.value;document.querySelectorAll(".gallery-movies-item").forEach(s=>{s.style.display=s.dataset.genres.includes(a)||a===""?"block":"none"})})},e=1;const o=9;i()}else c.innerHTML=`
    <p>OOPS... We are very sorry! You don’t have any movies at your library.</p>
    <button class="btn" onclick="location.href='../../index.html'">Search movie</button>
  `;
