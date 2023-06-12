import"./my_library-e3d26169.js";import{g as u,a as v}from"./catalog_hero-eb3644cc.js";function d(t,e,i,a,s){return`<li class="gallery-movies-item" data-id="${i}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${e}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${e}</h3>
                <p class="gallery-movies-details">${a.join(", ")} | ${s}</p>
            </div>
        </li>`}const r=document.querySelector(".gallery-movies"),y=document.querySelector(".no-results"),n=await u();n.data||(r.innerHTML="",y.hidden=!1);r.innerHTML=await p(n.data.results);async function p(t){const e=t.map(async({poster_path:a,title:s,genre_ids:o,id:l,release_date:c})=>{const g=c.substr(0,4),m=await M(o);return d(a,s,l,m,g)});return(await Promise.all(e)).join("")}async function M(t){const e=await v(),i=[];for(let a=0;a<t.length;a++)for(let s=0;s<e.data.genres.length;s++)Object.values(e.data.genres[s])[0]==t[a]&&i.push(Object.values(e.data.genres[s])[1]);return i}
