export const defaultHeroStyles = `
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
}`