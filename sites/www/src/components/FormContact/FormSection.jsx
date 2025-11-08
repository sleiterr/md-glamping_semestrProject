import React from "react";
import SecondaryButton from "../Button/SecondaryButton";
import ContactForm from "./Form";
import clsx from "clsx";

const contactText = [
  {
    id: 1,
    title: "Vil du booke et ophold ? Eller har du blot et spørgsmål?",
    subtitle:
      "Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer.",
    titleClass:
      "font-zen font-normal text-primary text-6xl text-center leading-[1.2] mb-2 max-w-[20rem] sm:max-w-lg md:max-w-none mx-auto",
    subtitleClass:
      "font-normal text-primary text-base text-center w-full md:max-w-4xl sm:max-w-lg",
  },
];

const FormSection = () => {
  return (
    <section
      className={clsx(
        "relative z-10 -mt-12 flex items-center justify-center bg-about-bg",
        "rounded-tl-[3rem]",
        "min-h-[calc(100vh-3rem)]"
      )}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <div className="flex flex-col items-center gap-12">
          <BoxText />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FormSection;

const BoxText = () => {
  return (
    <div>
      {contactText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center gap-8"
        >
          {item.element}
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.subtitleClass}>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};
