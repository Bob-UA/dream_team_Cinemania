import{f as E,r as o,c as C,d as j,a as T}from"./switcher-d8a0ba9d.js";var c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _=typeof c=="object"&&c&&c.Object===Object&&c,I=typeof self=="object"&&self&&self.Object===Object&&self;_||I||Function("return this")();const O=`
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
}`;function R(e){return e>=9?"svg/star-desk-50.svg":e>=8?"svg/star-desk-45.svg":e>=7?"svg/star-desk-35.svg":e>=6?"svg/star-desk-30.svg":e>=5?"svg/star-desk-25.svg":e>=4?"svg/star-desk-20.svg":e>=3?"svg/star-desk-15.svg":e>=2?"svg/star-desk-10.svg":e>=1?"svg/star-desk-05.svg":"svg/star-desk-00.svg"}const H="https://image.tmdb.org/t/p/original/",a={trailerBackdrop:document.querySelector(".player_backdrop"),trailerContainer:document.querySelector(".player_container"),textContainer:document.querySelector(".hero-container"),trailerCloseBtn:document.querySelector("[data-modal-trailer-close]")},d="MY_LIBRARY";let p={},s=null,m=[],g=null;function b(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}async function q(){try{if(m=await(await T("day")).data.results,g=b(0,m.length-1),m[g])a.textContainer.innerHTML=F(m[g]);else{a.textContainer.innerHTML=G();const t=document.createElement("style");t.innerHTML=O,document.head.appendChild(t)}}catch(e){console.error(e)}}function $(e){return`<iframe class="iframe_video_player" 
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
    <picture class="camera">
      <source srcset="./images/modal_oops_img/modal-camera-mobile-1x.jpg 1x, ./images/modal_oops_img/modal-camera-mobile-2x.jpg 2x" media="(max-width: 767px)" />
      <source srcset="./images/modal_oops_img/modal-camera-tablet-1x.jpg 1x, ./images/modal_oops_img/modal-camera-tablet-2x.jpg 2x" media="(min-width: 768px and max-width: 1279px)" />
      <source srcset="./images/modal_oops_img/modal-camera-desktop-1x.jpg 1x, ./images/modal_oops_img/modal-camera-desktop-2x.jpg 2x" media="(min-width: 1280px)" />
      <img src="./images/modal_oops_img/modal-camera-mobile-1x.jpg" alt="camera" />
    </picture>
  </div>`}const F=({backdrop_path:e,title:t,vote_average:r,overview:i,id:n})=>` <div class="hero-content"><div class="hero-text-container">
    <h1 class="title hero-title">${t}</h1>
    <img class="star-rating-hero" src="${R(r)}" alt="raiting" />
      <p class="text hero-text">
        ${i}
      </p>
    </div>
      <ul class="btn-list">
        <li>
          <button class="btn js-trailer-btn" data-id="${n}">Watch trailer</button>
        </li>
         <li>
         <button class="btn-details js-details-btn" data-id="${n}">More details</button>
        </li>
      </ul></div>
      <div class="img-container"><img class="hero-img" src="${H}${e}" alt="${t}"></div>
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
      </ul>`;await q();const N=document.querySelector(".js-trailer-btn"),Y=document.querySelector(".js-details-btn");N.addEventListener("click",A);async function A(){a.trailerBackdrop.addEventListener("click",y),window.addEventListener("keydown",M);const t=await E(1e7);let r="";if(t){const i=b(0,t.data.results.length-1);r=$(t.data.results[i].key),o.closeModalOopsBtn.className="is-hidden"}else r=D(),o.wrapperContainer.className="modal-oops";a.trailerContainer.insertAdjacentHTML("beforeend",r),a.trailerBackdrop.classList.toggle("is-hidden"),a.trailerCloseBtn.addEventListener("click",B)}Y.addEventListener("click",J);function k(e){e.currentTarget===e.target&&(o.backdropMovieInfoContainer.classList.add("is-hidden"),o.movieInfoContainer.innerHTML="",o.backdropMovieInfoContainer.removeEventListener("click",k))}function x(e){const t="Escape";e.code==t&&(o.backdropMovieInfoContainer.classList.add("is-hidden"),o.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",x))}function y(e){e.currentTarget===e.target&&(a.trailerBackdrop.classList.add("is-hidden"),a.trailerContainer.innerHTML="",a.trailerBackdrop.removeEventListener("click",y))}function M(e){const t="Escape";e.code==t&&(a.trailerBackdrop.classList.add("is-hidden"),a.trailerContainer.innerHTML="",window.removeEventListener("keydown",M))}async function J(e){if(!e.target.classList.contains("js-details-btn"))return;o.backdropMovieInfoContainer.addEventListener("click",k),window.addEventListener("keydown",x),o.closeModalBtn.addEventListener("click",S),s=+e.target.dataset.id;const{data:r}=await U(s);p=r;const i=await C(p);o.movieInfoContainer.insertAdjacentHTML("beforeend",i),o.modal.classList.toggle("is-hidden");const n={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},l=h(d);l&&l.map(u=>{if(u.id===s){n.addBtn.classList.add("hide"),n.removeBtm.classList.remove("hide");return}}),n.addBtn.addEventListener("click",v),n.removeBtm.addEventListener("click",f)}function v(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=h(d);let r="",i=[];if(t&&s){i=L(t);const u=JSON.stringify(i);r=z(u)}const n=JSON.stringify(p),l=K(n,r);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide"),w(d,l),e.addBtn.removeEventListener("click",v),e.removeBtm.addEventListener("click",f)}function f(){const e={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},t=h(d);e.addBtn.classList.toggle("hide"),e.removeBtm.classList.toggle("hide");const r=L(t);w(d,r),e.removeBtm.removeEventListener("click",f),e.addBtn.addEventListener("click",v)}function L(e){return e.map(t=>{if(t.id!==s)return t}).filter(t=>{if(t)return t})}function h(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function w(e,t){try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(r){console.error("Set state error: ",r.message)}}function z(e){return e.slice(1,e.length-1)}function K(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function S(){o.modal.classList.toggle("is-hidden"),o.movieInfoContainer.innerHTML="",o.closeModalBtn.removeEventListener("click",S)}function B(){a.trailerBackdrop.classList.toggle("is-hidden"),a.trailerContainer.innerHTML="",a.trailerCloseBtn.removeEventListener("click",B)}async function U(e){return await j(e)}export{P as g,R as s};
