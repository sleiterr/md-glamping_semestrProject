import React from "react";
import IntroSection from "../Section/IntroSection";

const activText = [
  {
    id: 1,
    title: "Ingen skal kede sig hos Gitte",
    text: "Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker.",
    titleClass:
      "font-zen font-normal text-primary text-6xl text-center leading-[1.2] mb-2 max-w-[20rem] sm:max-w-[32rem] md:max-w-none mx-auto",
    textClass:
      "font-normal text-primary text-base md:text-lg text-center w-full md:max-w-[56rem] sm:max-w-[32rem]",
  },
];

const ActivitiesAbout = () => {
  return (
    <IntroSection className="h-124 md:h-160">
      <div className="w-full px-4 md:px-0">
        <ActiveItem />
      </div>
    </IntroSection>
  );
};

export default ActivitiesAbout;

const ActiveItem = () => {
  return (
    <>
      {activText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.textClass}>{item.text}</p>
        </div>
      ))}
    </>
  );
};
