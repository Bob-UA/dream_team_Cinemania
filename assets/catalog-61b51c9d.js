import"./switcher-d521ed33.js";import{a as n}from"./catalog_hero-ddf21dd0.js";const i="9d709850c7590845ffb60644b29d6f51",r="https://api.themoviedb.org/3/",y="trending/movie/",f="genre/movie/list";async function h(e="week",s=1){try{return await n(`${r}${y}${e}?`,{params:{api_key:i,page:s}})}catch(t){l(t)}}async function $(){try{return await n(`${r}${f}?`,{params:{api_key:i}})}catch(e){l(e)}}function l(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}function M(e,s,t,o,a){return`<li class="gallery-movies-item">
        <a href="https://image.tmdb.org/t/p/original/${e}">
        <img class="gallery-movies-img" src="https://image.tmdb.org/t/p/original/${e}" alt="${s}" data-id="${t}" loading="lazy">
        <div class="gallery-movies-overlay"></div>
            <div class="gallery-movies-description">
                <h3 class="gallery-movies-title">${s}</h3>
                <p class="gallery-movies-details">${o.join(", ")} | ${a}</p>
            </div>
        </a>
        </li>`}const c=document.querySelector(".gallery-movies"),g=await h();g.data||(c.innerHTML="");c.innerHTML=await k(g.data.results);async function k(e){const s=e.map(async({poster_path:o,title:a,genre_ids:m,id:u,release_date:d})=>{const p=d.substr(0,4),v=await w(m);return M(o,a,u,v,p)});return(await Promise.all(s)).join("")}async function w(e){const s=await $(),t=[];for(let o=0;o<e.length;o++)for(let a=0;a<s.data.genres.length;a++)Object.values(s.data.genres[a])[0]==e[o]&&t.push(Object.values(s.data.genres[a])[1]);return t}
