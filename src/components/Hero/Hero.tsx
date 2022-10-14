import React, { FC } from "react";
import HeroSlider, { Slide, Overlay, Nav } from "hero-slider";
import pets1 from '../../assets/images/pet1.jpg'
import pets2 from '../../assets/images/pets1.jpeg'
import pets3 from '../../assets/images/pets2.jpg'
import pets4 from '../../assets/images/pets3.jpg'
import pets5 from '../../assets/images/pets4.jpg'
import pets6 from '../../assets/images/pets-101.png'
import Cover from "./Cover";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const sliderData: any = [
  {
    id: 1, img: pets1
  },
  {
    id: 2, img: pets2
  },
  {
    id: 3, img: pets3
  },
  {
    id: 4, img: pets4
  },
  {
    id: 5, img: pets5
  },
  {
    id: 6, img: pets6
  }
]


const Hero: FC = () => {
  return (
    <HeroSlider
      height="90vh"
      autoplay
      controller={{
        slidingDuration: 250,
        slidingDelay: 100,
        initialSlide: 1,
        onSliding: (nextSlide: number) =>
          console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide: number, nextSlide: number) =>
          console.debug(
            'onBeforeSliding(previousSlide, nextSlide): ',
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide: number) =>
          console.debug('onAfterSliding(nextSlide): ', nextSlide)
      }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
    >
      <Overlay>
        <Cover>
          <Banner
            title="Take care of your pets with us"
          >
            <Link to="/signup" className="btn-primary">Get started</Link>
          </Banner>
        </Cover>
      </Overlay>

      {
        sliderData.map((image: any) => (
          <Slide key={image.id}
            background={{
              backgroundImageSrc: `${image.img}`,
            }}
          />
        ))
      }

      <Nav />
    </HeroSlider>
  );
}

export default Hero;