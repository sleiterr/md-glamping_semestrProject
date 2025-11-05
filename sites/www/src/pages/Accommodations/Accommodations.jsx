import React from "react";
import StaysBg from "../../assets/bgTitle/image_01.jpg";

const heroText = [
  {
    id: 1,
    title: "Vores ophold",
    titleClass: "font-zen text-primary text-8xl",
  },
];

const Accommodations = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="stays"
      style={{
        backgroundImage: `url(${StaysBg})`,
        backgroundPosition: "center center",
        // aspectRatio: "8 / 5",
      }}
    >
      <div className="absolute inset-0 bg-secondary-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        s
        <AccommodationsItem />
      </div>
    </section>
  );
};

export default Accommodations;

const AccommodationsItem = () => {
  return (
    <div className="">
      {heroText.map((item) => (
        <div key={item.id}>
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
