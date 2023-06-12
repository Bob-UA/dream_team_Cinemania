import"./my_library-6c19f58e.js";import{g as k,a as I,b as w,c as $}from"./catalog_hero-4a6e4021.js";function C(t){return t.length>20?t.substring(0,20)+"...":t}function B(t,e,o,n,a){if(!t)return;let c="";return n.length?c=C(n.slice(0,2).join(", ")):c="There are no genres",`<li class="gallery-movies-item" data-id="${o}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${e}" loading="lazy">
        <div class="gallery-movies-overlay js-modal-info" data-id="${o}"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${e}</h3>
                <p class="gallery-movies-details">${c} | ${a}</p>
            </div>
        </li>`}const m=document.querySelector(".search-movie"),p=document.querySelector(".gallery-movies"),v=document.querySelector(".no-results"),E=await k();p.innerHTML=await M(E.data.results);m.addEventListener("submit",T);async function T(t){t.preventDefault(),p.innerHTML="";const{search:e}=t.currentTarget.elements,o=e.value.trim();if(o==""||!o){v.hidden=!1,m.reset();return}const n=await I(o);if(n.data.results.length==0){v.hidden=!1,m.reset();return}v.hidden=!0,p.innerHTML=await M(n.data.results),m.reset()}async function M(t){const e=t.map(async({poster_path:n,title:a,genre_ids:c,id:i,release_date:d})=>{const l=d.substr(0,4),r=await j(c);return B(n,a,i,r,l)});return(await Promise.all(e)).join("")}async function j(t){const e=await w(),o=[];for(let n=0;n<t.length;n++)for(let a=0;a<e.data.genres.length;a++)Object.values(e.data.genres[a])[0]==t[n]&&o.push(Object.values(e.data.genres[a])[1]);return o}const s={gallaryContainer:document.querySelector(".gallery-movies"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),movieInfoContainer:document.querySelector(".modal-movie-info_container"),backdropMovieInfoContainer:document.querySelector(".backdrop-movie-info")},q="https://image.tmdb.org/t/p/original";async function N(t){const{poster_path:e,title:o,vote_average:n,vote_count:a,popularity:c,genres:i,overview:d}=t,l=q+e,r=i.map(L=>L.name).join(" "),u=Math.round10(n,-1),g=Math.round10(a,-1),S=Math.round10(c,-1);return`<div class="modal-img-wrap">
            <img class="modal-video-img" src="${l}" alt="${o}" />
          </div>
          <div class="modal-about-movie-container">
            <h2 class="modal-card-title">${o}</h2>
            <ul class="modal-info-movie-list">
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Vote / Votes</p>
                <div class="modal-rating-wraper">
                  <p class="modal-rating">${u}</p>
                  <p class="modal-slesh">/</p>
                  <p class="modal-rating">${g}</p>
                </div>
              </li>
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Popularity</p>
                <p class="modal-info-data-item">${S}</p>
              </li>
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Genre</p>
                <p class="modal-info-data-item  genres">${r}</p>
              </li>
            </ul>
            <p class="modal-about-subtitle">About</p>
            <p class="modal-item-description">
              ${d}
            </p>

            <button class="modal-my-library-btn add-btn" type="button">
              <span class="modal-btn-title">Add to my library</span>
            </button>

            <button class="modal-my-library-btn remove-btn hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
            </button>
          </div>`}function O(t,e,o){return typeof o>"u"||+o==0?Math[t](e):(e=+e,o=+o,isNaN(e)||!(typeof o=="number"&&o%1===0)?NaN:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-o:-o))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+o:o))))}Math.round10||(Math.round10=function(t,e){return O("round",t,e)});const f="MY_LIBRARY";s.gallaryContainer.addEventListener("click",A);s.closeModalBtn.addEventListener("click",_);s.backdropMovieInfoContainer.addEventListener("click",h);function h(t){t.currentTarget===t.target&&(s.backdropMovieInfoContainer.classList.add("is-hidden"),s.movieInfoContainer.innerHTML="",s.backdropMovieInfoContainer.removeEventListener("click",h))}window.addEventListener("keydown",b);function b(t){const e="Escape";t.code==e&&(s.backdropMovieInfoContainer.classList.add("is-hidden"),s.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",b))}async function A(t){if(!t.target.classList.contains("js-modal-info"))return;const o=+t.target.dataset.id,{data:n}=await J(o),a=n,c=await N(a);s.movieInfoContainer.insertAdjacentHTML("beforeend",c),s.modal.classList.toggle("is-hidden");const i={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},d=G(f);d&&d.map(l=>{if(l.id===o){i.addBtn.classList.add("hide"),i.removeBtm.classList.remove("hide");return}}),i.addBtn.addEventListener("click",()=>{let l="";if(d){const g=JSON.stringify(d);l=R(g)}const r=JSON.stringify(a),u=H(r,l);i.addBtn.classList.toggle("hide"),i.removeBtm.classList.toggle("hide"),y(f,u)}),i.removeBtm.addEventListener("click",()=>{i.addBtn.classList.toggle("hide"),i.removeBtm.classList.toggle("hide");const l=d.map(r=>{if(r.id!==o)return r}).filter(r=>{if(r)return r});y(f,l)})}function G(t){try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}function y(t,e){try{const o=JSON.stringify(e);localStorage.setItem(t,o)}catch(o){console.error("Set state error: ",o.message)}}function R(t){return t.slice(1,t.length-1)}function H(t,e){return JSON.parse(e?`[${e}, ${t}]`:`[${t}]`)}function _(){s.modal.classList.toggle("is-hidden"),s.movieInfoContainer.innerHTML=""}async function J(t){return await $(t)}
