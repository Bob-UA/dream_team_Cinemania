import"./switcher-d521ed33.js";import{a as i}from"./catalog_hero-ddf21dd0.js";const n="9d709850c7590845ffb60644b29d6f51",l="https://api.themoviedb.org/3/",y="trending/movie/",f="genre/movie/list";async function h(e="week",s=1){try{return await i(`${l}${y}${e}?`,{params:{api_key:n,page:s}})}catch(o){r(o)}}async function $(){try{return await i(`${l}${f}?`,{params:{api_key:n}})}catch(e){r(e)}}function r(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}const c=document.querySelector(".gallery-movies"),g=await h();g.data||(c.innerHTML="");c.innerHTML=await M(g.data.results);async function M(e){const s=e.map(async({poster_path:t,title:a,genre_ids:m,id:d,release_date:v})=>{const p=v.substr(0,4),u=await w(m);return`<li class="gallery-movies-item">
        <a href="https://image.tmdb.org/t/p/original/${t}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${t}" alt="${a}" data-id="${d}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${a}</h3>
                <p class="gallery-movies-details">${u.join(", ")} | ${p}</p>
            </div>
        </a>
        </li>`});return(await Promise.all(s)).join("")}async function w(e){const s=await $(),o=[];for(let t=0;t<e.length;t++)for(let a=0;a<s.data.genres.length;a++)Object.values(s.data.genres[a])[0]==e[t]&&o.push(Object.values(s.data.genres[a])[1]);return o}
