import"./switcher-61843ccf.js";import{g as k,a as b,s as B,r as a,c as I,b as w}from"./catalog_hero-e66f425b.js";function E(e){return e.length>20?e.substring(0,20)+"...":e}function C(e,t,n,r,o,i){if(!e)return;let s="";return r.length?s=E(r.slice(0,2).join(", ")):s="There are no genres",`<li class="gallery-movies-item" data-id="${n}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${e}" alt="${t}" loading="lazy">
        <div class="gallery-movies-overlay js-modal-info" data-id="${n}"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${t}</h3>
                <div class="gallery-movies-wrap">
                <p class="gallery-movies-details">${s} | ${o}</p>
                <img src="${i}" alt="raiting" class="star-rating-card"/>
                </div>
            </div>
        </li>`}document.querySelector(".search-movie");const T=document.querySelector(".gallery-movies");document.querySelector(".no-results");const R=await k();T.innerHTML=await $(R.data.results);async function $(e){const t=e.map(async({poster_path:r,title:o,genre_ids:i,id:s,release_date:y,vote_average:M})=>{const p=y.substr(0,4),L=await O(i),h=B(M);return C(r,o,s,L,p,h)});return(await Promise.all(t)).join("")}async function O(e){const t=await b(),n=[];for(let r=0;r<e.length;r++)for(let o=0;o<t.data.genres.length;o++)Object.values(t.data.genres[o])[0]==e[r]&&n.push(Object.values(t.data.genres[o])[1]);return n}const d="MY_LIBRARY";let l={},c=null;a.gallaryContainer.addEventListener("click",j);function g(e){e.currentTarget===e.target&&(a.backdropMovieInfoContainer.classList.add("is-hidden"),a.movieInfoContainer.innerHTML="",a.backdropMovieInfoContainer.removeEventListener("click",g))}function u(e){const t="Escape";e.code==t&&(a.backdropMovieInfoContainer.classList.add("is-hidden"),a.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",u))}async function j(e){if(!e.target.classList.contains("js-modal-info"))return;a.backdropMovieInfoContainer.addEventListener("click",g),window.addEventListener("keydown",u),a.closeModalBtn.addEventListener("click",S),c=+e.target.dataset.id;const{data:n}=await J(c);l=n;const r=await I(l);a.movieInfoContainer.insertAdjacentHTML("beforeend",r),a.modal.classList.toggle("is-hidden");const o={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},i=m(d);i&&i.map(s=>{if(s.id===c){o.addBtn.classList.add("hide"),o.removeBtm.classList.remove("hide");return}}),o.addBtn.addEventListener("click",q),o.removeBtm.addEventListener("click",G)}function q(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=m(d);let n="",r=[];if(t&&c){r=v(t);const s=JSON.stringify(r);n=N(s)}const o=JSON.stringify(l),i=A(o,n);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),f(d,i)}function G(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=m(d);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const n=v(t);f(d,n)}function v(e){return e.map(t=>{if(t.id!==c)return t}).filter(t=>{if(t)return t})}function m(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function f(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(n){console.error("Set state error: ",n.message)}}function N(e){return e.slice(1,e.length-1)}function A(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function S(){a.modal.classList.toggle("is-hidden"),a.movieInfoContainer.innerHTML="",a.closeModalBtn.removeEventListener("click",S)}async function J(e){return await w(e)}