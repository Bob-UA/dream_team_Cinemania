import{e as A,b as M,g as N,r as a,c as F,d as q,s as H}from"./switcher-bd5a1d2d.js";import"./lodash-99ebc3cd.js";const u="MY_LIBRARY";let p={};async function J(){const e=await A();if(e.data.results.length===0){D();return}const t=Math.floor(Math.random()*e.data.results.length),o=e.data.results[t];j(o)}function D(){const e=document.getElementById("movies-container");e.innerHTML="<p>OOPS... We are very sorry!But we couldn’t find the film.</p>"}async function j(e){const t=e.genre_ids.map(d=>{const f=M.find(S=>S.id===d);return f?f.name:""}),{vote_average:o,vote_count:r,popularity:n,overview:s}=e,c=t.join(", "),l=document.getElementById("movies-container");l.innerHTML=`
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
            <p class="date">${z(e.release_date)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Vote / Votes</p>
            <div class="rating-wraper">
              <p class="rating">${o}</p>
              <p class="slesh">/</p>
              <p class="rating">${r}</p>
            </div>
          </li>
          </ul>
          <ul class="right-movie-list">
          <li class="info-movie-item">
            <p class="card-subtitle">Popularity</p>
            <p class="info-data-item">${V(n)}</p>
          </li>
          <li class="info-movie-item">
            <p class="card-subtitle">Genre</p>
            <p class="info-data-item">${K(c)}</p>
          </li>
        </ul>
        </ul>
        <p class="about-subtitle">About</p>
        <p class="item-description">${U(s)}</p>
        <button id="libraryButton" data-id="${e.id}" class="btn my-library-btn add-btn-home" type="button">Add to my library</button>
        <button class="btn my-library-btn remove-btn-home hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
        </button>
      
        </div>
    </div>
  `,p=e;const i={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},v=h(u);v&&v.map(d=>{if(d.id===p.id){i.addBtn.classList.add("hide"),i.removeBtm.classList.remove("hide");return}}),i.addBtn.addEventListener("click",_),i.removeBtm.addEventListener("click",G)}function _(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=h(u);let o="",r=[];if(t){r=B(t);const c=JSON.stringify(r);o=Y(c)}const n=JSON.stringify(p),s=P(n,o);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),L(u,s)}function G(){const e={addBtn:document.querySelector(".add-btn-home"),removeBtm:document.querySelector(".remove-btn-home")},t=h(u);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const o=B(t);L(u,o)}function B(e){return e.map(t=>{if(t.id!==p.id)return t}).filter(t=>t)}function h(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function L(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}}function Y(e){return e.slice(1,e.length-1)}function P(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function z(e){const t=new Date(e),o=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getFullYear();return`${o}.${r}.${n}`}function V(e){return Number(e).toFixed(1)}function K(e){return e.length>30?e.substring(0,30)+"...":e}function U(e){return e.length>420?e.substring(0,420)+"...":e}J();const g="MY_LIBRARY";let y={},m=null;const x=document.querySelector(".weekly-js-list"),W=await N("week",1);function Q(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}const X=await W.data.results;x.innerHTML=await Z(X);async function Z(e){let t=e,o=[],r={},n;for(let l=1;o.length<3;l++)r=t[Q(0,t.length-1)],n=o.findIndex(i=>i===r),(n!==-1||n===0)&&(o=[]),o.push(r);const s=o.map(async({poster_path:l,title:i,genre_ids:v,id:d,release_date:f,vote_average:S})=>{const O=f.substr(0,4),E=ee(M,v),C=Object.values(E),T=H(S);return`<li class="weekly-list">
    <img class="weekly-list-img" src="https://image.tmdb.org/t/p/original/${l}" alt="${i}" data-id="${d}" loading="lazy">
      <div class="weekly-list-overlay js-modal-info" data-id="${d}">
          <h3 class="weekly-list-title">${i}</h3>
          <div class="gallery-movies-wrap">
          <p class="weekly-list-genre">${C.join(", ")} | ${O}</p>
          <img src="${T}" alt="raiting" class="star-rating-card"/>
          </div>
      </div>
    </li>`});return(await Promise.all(s)).join("")}function ee(e,t){const o=[];return t.filter(r=>{e.map(({id:n,name:s})=>{n===r&&o.push(s)})}),o}a.weeklyContainer.addEventListener("click",te);function w(e){e.currentTarget===e.target&&(a.backdropMovieInfoContainer.classList.add("is-hidden"),a.movieInfoContainer.innerHTML="",a.backdropMovieInfoContainer.removeEventListener("click",w))}function k(e){const t="Escape";e.code==t&&(a.backdropMovieInfoContainer.classList.add("is-hidden"),a.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",k))}async function te(e){if(!e.target.classList.contains("js-modal-info"))return;a.backdropMovieInfoContainer.addEventListener("click",w),window.addEventListener("keydown",k),a.closeModalBtn.addEventListener("click",R),m=+e.target.dataset.id;const{data:o}=await se(m);y=o;const r=await F(y);a.movieInfoContainer.insertAdjacentHTML("beforeend",r),a.modal.classList.toggle("is-hidden");const n={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},s=b(g);s&&s.map(c=>{if(c.id===m){n.addBtn.classList.add("hide"),n.removeBtm.classList.remove("hide");return}}),n.addBtn.addEventListener("click",oe),n.removeBtm.addEventListener("click",ne)}function oe(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=b(g);let o="",r=[];if(t&&m){r=$(t);const c=JSON.stringify(r);o=re(c)}const n=JSON.stringify(y),s=ae(n,o);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),I(g,s)}function ne(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=b(g);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const o=$(t);I(g,o)}function $(e){return e.map(t=>{if(t.id!==m)return t}).filter(t=>{if(t)return t})}function b(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function I(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Set state error: ",o.message)}}function re(e){return e.slice(1,e.length-1)}function ae(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function R(){a.modal.classList.toggle("is-hidden"),a.movieInfoContainer.innerHTML="",a.closeModalBtn.removeEventListener("click",R)}async function se(e){return await q(e)}
