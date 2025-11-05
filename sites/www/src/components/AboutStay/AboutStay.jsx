import React from "react";
import IntroSection from "../Section/IntroSection";

const staysText = [
  {
    id: 1,
    title: "Vi har ophold til enhver smag",
    text: "Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.",
    titleClass:
      "font-zen font-normal text-primary text-6xl text-center leading-[1.2] mb-2 max-w-[20rem] sm:max-w-[32rem] md:max-w-none mx-auto",
    textClass:
      "font-normal text-primary text-base text-center w-full md:max-w-[56rem] sm:max-w-[32rem]",
  },
];

export const AboutStay = () => {
  return (
    <IntroSection>
      <div className="w-full px-4 md:px-0">
        <AboutStayItem />
      </div>
    </IntroSection>
  );
};

export default AboutStay;

const AboutStayItem = () => {
  return (
    <div className="">
      {staysText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          {item.element}
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.textClass}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
