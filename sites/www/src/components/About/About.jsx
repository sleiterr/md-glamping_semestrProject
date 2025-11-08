import React from "react";
import GiteImg from "../../assets/stays/gitte.jpg";
import SecondaryButton from "../Button/SecondaryButton";
import IntroSection from "../Section/IntroSection";

const abotText = [
  {
    id: 1,
    title: "Kom og prøv glamping hos Gitte!",
    text: "Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.",
    titleClass:
      "font-zen font-normal text-primary text-6xl text-center leading-[1.2] mb-2 max-w-[20rem] sm:max-w-[32rem] md:max-w-none mx-auto",
    textClass:
      "font-normal text-primary text-base text-center w-full md:max-w-[56rem] sm:max-w-[32rem]",
  },
];

export const About = () => {
  return (
    <IntroSection>
      <div className="w-full px-4 md:px-0">
        <AboutItem />
      </div>
      <div className="flex flex-col items-center mt-12">
        <img
          src={GiteImg}
          alt="Gite"
          className="w-44 h-44 rounded-full object-cover"
        />
        <SecondaryButton to="/stay" className="uppercase">
          se vores ophold
        </SecondaryButton>
      </div>
    </IntroSection>
  );
};

export default About;

const AboutItem = () => {
  return (
    <div className="">
      {abotText.map((item) => (
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
