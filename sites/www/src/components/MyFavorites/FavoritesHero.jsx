import React from "react";
import ListHeroBg from "../../assets/bgTitle/image_05.jpg";

const ListTitle = [
  {
    id: 1,
    title: "Min Liste",
    titleClass: "font-zen text-primary text-8xl",
  },
];

export const FavoritesHero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="stays"
      style={{
        backgroundImage: `url(${ListHeroBg})`,
        backgroundPosition: "center center",
        // aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute inset-0 bg-secondary-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <ListHeroText />
      </div>
    </section>
  );
};

export default FavoritesHero;

const ListHeroText = () => {
  return (
    <div className="">
      {ListTitle.map((item) => (
        <div key={item.id}>
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
