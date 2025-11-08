import React from "react";
import FormHeroBg from "../../assets/bgTitle/image_03.jpg";

const FormHeroTitle = [
  {
    id: 1,
    title: "Kontakt Gitte",
    titleClass: "font-zen text-primary text-8xl",
  },
];

const FormHero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="stays"
      style={{
        backgroundImage: `url(${FormHeroBg})`,
        backgroundPosition: "center center",
        // aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute inset-0 bg-secondary-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <FormHeroText />
      </div>
    </section>
  );
};

export default FormHero;

const FormHeroText = () => {
  return (
    <div className="">
      {FormHeroTitle.map((item) => (
        <div key={item.id}>
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
