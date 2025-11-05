import React from "react";
import heroBg from "../../assets/bgTitle/image_00.jpg";
import Button from "../Button/PrimaryButton";
import { logo } from "../../assets/iconExports/index";

const heroText = [
  {
    id: 1,
    element: <img src={logo} alt="Logo" className="w-20 h-auto mb-2" />,
    subtitle: "Gittes",
    title: "Glamping",
    subtitleClass: "font-zen text-secondary text-4xl",
    titleClass: "font-zen text-primary text-8xl",
  },
];

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
          <HeroItem />
          <Button to="/backoffice">book nu</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const HeroItem = () => {
  return (
    <div className="">
      {heroText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          {item.element}
          <h2 className={item.subtitleClass}>{item.subtitle}</h2>
          <h1 className={item.titleClass}>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
