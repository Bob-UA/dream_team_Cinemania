import"./my_library-ab8d4378.js";import{g as v,a as u}from"./catalog_hero-eb3644cc.js";function d(s,e,t,i,a){return`<li class="gallery-movies-item">
        <a href="https://image.tmdb.org/t/p/original/${s}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${s}" alt="${e}" data-id="${t}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${e}</h3>
                <p class="gallery-movies-details">${i.join(", ")} | ${a}</p>
            </div>
        </a>
        </li>`}const r=document.querySelector(".gallery-movies"),n=await v();n.data||(r.innerHTML="");r.innerHTML=await y(n.data.results);async function y(s){const e=s.map(async({poster_path:i,title:a,genre_ids:o,id:l,release_date:g})=>{const c=g.substr(0,4),m=await p(o);return d(i,a,l,m,c)});return(await Promise.all(e)).join("")}async function p(s){const e=await u(),t=[];for(let i=0;i<s.length;i++)for(let a=0;a<e.data.genres.length;a++)Object.values(e.data.genres[a])[0]==s[i]&&t.push(Object.values(e.data.genres[a])[1]);return t}
