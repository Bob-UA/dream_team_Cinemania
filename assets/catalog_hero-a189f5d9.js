import{f as E,r as o,c as C,d as T,g as j,s as I}from"./switcher-606ce5bb.js";var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O=typeof m=="object"&&m&&m.Object===Object&&m,R=typeof self=="object"&&self&&self.Object===Object&&self;O||R||Function("return this")();const H=`
  .hero-text{
    max-height: 80px;
    max-width: 160px;
     -webkit-line-clamp: unset;
}

  .hero {
    background-image: linear-gradient(
        86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%
      ),
      url(../../../images/home-mobile-1x.jpg);
       background-size: cover;
  background-position: 0px;
  background-repeat: no-repeat;
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%
        ),
        url(../../../images/home-mobile-2x.jpg);
    }
  }

@media screen and (min-width: 768px) {
  .hero-text{
    max-height: 64px;
    max-width: 357px;
}

.hero-text-container{
max-width: 357px;
}

  .hero {
    background-image: linear-gradient(
        81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%
      ),
      url(../../../images/home-tablet-1x.jpg);
      background-size: contain;
    background-position: 200px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%
        ),
        url(/images/home-tablet-2x.jpg);
    }
  }
}
@media screen and (min-width: 1280px) {
  .hero-text{
    max-height: 76px;
    max-width: 455px;
}

.hero-text-container {
    max-width: 464px;
  }

  .hero {
    background-image: linear-gradient(
        83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%
      ),
      url(../../../images/home-desktop-1x.jpg);
      background-position: 200px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%
        ),
        url(../../../images/home-desktop-2x.jpg);
    }
  }
}`,q="https://image.tmdb.org/t/p/original/",n={trailerBackdrop:document.querySelector(".player_backdrop"),trailerContainer:document.querySelector(".player_container"),textContainer:document.querySelector(".hero-container"),trailerCloseBtn:document.querySelector("[data-modal-trailer-close]")},l="MY_LIBRARY";let p={},d=null,s=[],u=null;function b(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}async function $(){try{if(s=await(await j("day")).data.results,u=b(0,s.length-1),s[u])n.textContainer.innerHTML=F(s[u]);else{n.textContainer.innerHTML=G();const t=document.createElement("style");t.innerHTML=H,document.head.appendChild(t)}}catch(e){console.error(e)}}function _(e){return`<iframe class="iframe_video_player" 
              src="https://www.youtube.com/embed/${e}" 
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay;
              clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
              allowfullscreen>
          </iframe>`}function D(){return`
   <h1 class="text-modal-oops">
      OOPS... <br> We are very sorry! <br>
      But we couldn’t find the trailer.
    </h1>
    <div class="camera"></div>`}const F=({backdrop_path:e,title:t,vote_average:r,overview:i,id:a})=>` <div class="image-container"><img class="hero-img" src="${q}${e}" alt="${t}"><div class="gradient-container"></div></div><div class="hero-content"><div class="hero-text-container">
    <h1 class="title hero-title">${t}</h1>
    <img class="star-rating-hero" src="${I(r)}" alt="raiting" />
      <p class="text hero-text">
        ${i}
      </p>
    </div>
      <ul class="btn-list">
        <li>
          <button class="btn js-trailer-btn" data-id="${a}">Watch trailer</button>
        </li>
         <li>
         <button class="btn-details js-details-btn" data-id="${a}">More details</button>
        </li>
      </ul><div class="background-container"></div></div>
      
      `,G=()=>`<div class="hero-text-container">
<h1 class="title hero-title">Let’s Make Your Own Cinema</h1>
      <p class="text hero-text">
        Is a guide to creating a personalized movie theater experience. You'll
        need a projector, screen, and speakers. <span class="mobile-hidden"> Decorate your space, choose your
        films, and stock up on snacks for the full experience.</span>
      </p>
      </div>
      <ul class="btn-list">
        <li>
          <a href="../../catalog.html"><button class="btn">Get Started</button></a>
        </li>
      </ul>`;await $();const N=document.querySelector(".js-trailer-btn"),Y=document.querySelector(".js-details-btn");N.addEventListener("click",A);async function A(){n.trailerBackdrop.addEventListener("click",M),window.addEventListener("keydown",L);const e=s[u].id,t=await E(e);let r="";if(t){const i=b(0,t.data.results.length-1);r=_(t.data.results[i].key),o.closeModalOopsBtn.className="is-hidden"}else r=D(),o.wrapperContainer.className="modal-oops";n.trailerContainer.insertAdjacentHTML("beforeend",r),n.trailerBackdrop.classList.toggle("is-hidden"),n.trailerCloseBtn.addEventListener("click",B)}Y.addEventListener("click",J);function k(e){e.currentTarget===e.target&&(o.backdropMovieInfoContainer.classList.add("is-hidden"),o.movieInfoContainer.innerHTML="",o.backdropMovieInfoContainer.removeEventListener("click",k))}function y(e){const t="Escape";e.code==t&&(o.backdropMovieInfoContainer.classList.add("is-hidden"),o.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",y))}function M(e){e.currentTarget===e.target&&(n.trailerBackdrop.classList.add("is-hidden"),n.trailerContainer.innerHTML="",n.trailerBackdrop.removeEventListener("click",M))}function L(e){const t="Escape";e.code==t&&(n.trailerBackdrop.classList.add("is-hidden"),n.trailerContainer.innerHTML="",window.removeEventListener("keydown",L))}async function J(e){if(!e.target.classList.contains("js-details-btn"))return;o.backdropMovieInfoContainer.addEventListener("click",k),window.addEventListener("keydown",y),o.closeModalBtn.addEventListener("click",S),d=+e.target.dataset.id;const{data:r}=await U(d);p=r;const i=await C(p);o.movieInfoContainer.insertAdjacentHTML("beforeend",i),o.modal.classList.toggle("is-hidden");const a={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},c=h(l);c&&c.map(g=>{if(g.id===d){a.addBtn.classList.add("hide"),a.removeBtm.classList.remove("hide");return}}),a.addBtn.addEventListener("click",f),a.removeBtm.addEventListener("click",v)}function f(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=h(l);let r="",i=[];if(t&&d){i=x(t);const g=JSON.stringify(i);r=z(g)}const a=JSON.stringify(p),c=K(a,r);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),w(l,c),e.addBtn.removeEventListener("click",f),e.removeBtm.addEventListener("click",v)}function v(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=h(l);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const r=x(t);w(l,r),e.removeBtm.removeEventListener("click",v),e.addBtn.addEventListener("click",f)}function x(e){return e.map(t=>{if(t.id!==d)return t}).filter(t=>{if(t)return t})}function h(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function w(e,t){try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(r){console.error("Set state error: ",r.message)}}function z(e){return e.slice(1,e.length-1)}function K(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function S(){o.modal.classList.toggle("is-hidden"),o.movieInfoContainer.innerHTML="",o.closeModalBtn.removeEventListener("click",S)}function B(){n.trailerBackdrop.classList.toggle("is-hidden"),n.trailerContainer.innerHTML="",n.trailerCloseBtn.removeEventListener("click",B)}async function U(e){return await T(e)}export{m as c,P as g};
