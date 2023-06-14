import"./switcher-b8bf2432.js";import{g as R,e as _}from"./catalog_hero-b3d506d9.js";const $="9d709850c7590845ffb60644b29d6f51",L="https://api.themoviedb.org/3/",k="movie/upcoming",N="genre/movie/list",y="MY_LIBRARY";async function O(){const e=`${L}${k}?api_key=${$}`,s=await(await fetch(e)).json();if(s.results.length===0){B();return}const a=Math.floor(Math.random()*s.results.length),n=s.results[a];E(n)}function B(){const e=document.getElementById("movies-container");e.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}async function E(e){const t=`${L}${N}?api_key=${$}`,a=await(await fetch(t)).json(),n=e.genre_ids.map(o=>{const i=a.genres.find(f=>f.id===o);return i?i.name:""}),{vote_average:c,vote_count:m,popularity:u,overview:g}=e,p=n.join(", "),d=document.getElementById("movies-container");d.innerHTML=`
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
            <p class="date">${P(e.release_date)}</p>
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
            <p class="info-data-item">${G(u)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${j(p)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${F(g)}</p>
        <button id="libraryButton" data-id="${e.id}" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `;const v=e,r={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},l=I(y);l&&l.map(o=>{if(o.id===v.id){r.addBtn.classList.add("hide"),r.removeBtm.classList.remove("hide");return}}),r.addBtn.addEventListener("click",()=>{let o="";if(l){const M=JSON.stringify(l);o=A(M)}const i=JSON.stringify(v),f=T(i,o);r.addBtn.classList.toggle("hide"),r.removeBtm.classList.toggle("hide"),S(y,f)}),r.removeBtm.addEventListener("click",()=>{r.addBtn.classList.toggle("hide"),r.removeBtm.classList.toggle("hide");const o=l.map(i=>{if(i.id!==v.id)return i}).filter(i=>{if(i)return i});S(y,o)})}function I(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function S(e,t){try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Set state error: ",s.message)}}function A(e){return e.slice(1,e.length-1)}function T(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function P(e){const t=new Date(e),s=t.getDate().toString().padStart(2,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getFullYear();return`${s}.${a}.${n}`}function G(e){return Number(e).toFixed(1)}function j(e){return e.length>30?e.substring(0,30)+"...":e}function F(e){return e.length>420?e.substring(0,420)+"...":e}O();const D="https://api.themoviedb.org/3/genre/movie/list",J="9d709850c7590845ffb60644b29d6f51",h=document.querySelector(".weekly-js-list"),U=await z(),Y=U.data.genres,b=await R("week",1);async function z(){return await _.request({method:"GET",url:D,params:{api_key:J,language:"en"}})}async function H(){window.innerWidth<767?h.innerHTML=await w(b.data.results.slice(0,1)):h.innerHTML=await w(b.data.results.slice(0,3))}window.addEventListener("resize",H);h.innerHTML=await w(b.data.results.slice(0,3));async function w(e){const t=e.map(async({poster_path:a,title:n,genre_ids:c,id:m,release_date:u})=>{const g=u.substr(0,4),p=q(Y,c),d=Object.values(p);return console.log(d),`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${a}" alt="${n}" data-id="${m}" loading="lazy">
      <div class="weekly-list-overlay">
          <h3 class="weekly-list-title">${n}</h3>
          <p class="weekly-list-genre">${d.join(", ")} | ${g}</p>
      </div>
    </li>`});return(await Promise.all(t)).join("")}function q(e,t){const s=[];return t.filter(a=>{e.map(({id:n,name:c})=>{n===a&&s.push(c)})}),s}
