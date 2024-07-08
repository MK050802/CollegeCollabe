import React, { useEffect } from "react";
import Slider from "react-slick";
import Image1 from "../../assets/imghero/studentnobackground.png";
import Image2 from "../../assets/imghero/jobwithoutback.png";

import Image3 from "../../assets/imghero/jobwithoutback.png";

import Button from "../Homepage/Button";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title1: " Your one-stop destination for insights",
    title2: "ShareIT",
    decription: "internship website ",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Notes",
    title1: " Igniting your passion for learning",
    title2: "shareIT",
    decription: "internship website",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title1: " Because staying informed is cool",
    title2: "ShareIT",
    decription: "internship website ",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  useEffect(() => {
    const images = document.querySelectorAll(".hero-image");
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, []);

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl ml-20 mr-20 mt-36 min-h-[550px] sm:min-h-[550px] bg-sky-600 flex justify-center items-center border-b-2">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pr-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold animate-slideInLeft delay-100">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-5xl lg:text-5xl font-bold animate-slideInLeft delay-200">
                      {data.title1}
                    </h1>
                    <h1 className="text-5xl uppercase text-white sm:text-[80px] md:text-[80px] xl:text-[100px] font-bold animate-slideInLeft delay-300">
                      {data.title2}
                    </h1>
                    <div>
                      <Button>Details</Button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[390px] sm:scale-105 lg:scale-110 object-contain mx-auto
                      bg-orag=n relative z-40 hero-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
