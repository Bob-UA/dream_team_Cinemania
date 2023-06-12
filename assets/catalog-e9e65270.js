import"./my_library-ff684d78.js";import{g as v,a as y,b as f}from"./catalog_hero-f05034b2.js";function h(e){return e.length>20?e.substring(0,20)+"...":e}function M(e,s,r,t,a){if(!e)return;let n="";return t.length?n=h(t.slice(0,2).join(", ")):n="There are no genres",`<li class="gallery-movies-item" data-id="${r}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${e}" alt="${s}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${s}</h3>
                <p class="gallery-movies-details">${n} | ${a}</p>
            </div>
        </li>`}const i=document.querySelector(".search-movie"),l=document.querySelector(".gallery-movies"),o=document.querySelector(".no-results"),p=await v();l.innerHTML=await c(p.data.results);i.addEventListener("submit",b);async function b(e){e.preventDefault(),l.innerHTML="";const{search:s}=e.currentTarget.elements,r=s.value.trim();if(r==""||!r){o.hidden=!1,i.reset();return}const t=await y(r);if(t.data.results.length==0){o.hidden=!1,i.reset();return}o.hidden=!0,l.innerHTML=await c(t.data.results),i.reset()}async function c(e){const s=e.map(async({poster_path:t,title:a,genre_ids:n,id:u,release_date:g})=>{const m=g.substr(0,4),d=await w(n);return M(t,a,u,d,m)});return(await Promise.all(s)).join("")}async function w(e){const s=await f(),r=[];for(let t=0;t<e.length;t++)for(let a=0;a<s.data.genres.length;a++)Object.values(s.data.genres[a])[0]==e[t]&&r.push(Object.values(s.data.genres[a])[1]);return r}
