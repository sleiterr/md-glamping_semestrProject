import React from "react";
import heroBg from "../../assets/bgTitle/image_00.jpg";
import HeroBtn from "./HeroBtn";

const Hero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        // aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-zen text-secondary text-4xl">Gittes</h2>
          <h1 className="font-zen text-primary text-8xl">Glamping</h1>
          <HeroBtn to="/backoffice">book nu</HeroBtn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
