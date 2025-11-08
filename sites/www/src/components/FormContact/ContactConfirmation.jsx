import React from "react";
import { useLocation } from "react-router-dom";
import SecondaryButton from "../Button/SecondaryButton";
import clsx from "clsx";

const ContactConfirmation = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <section
      className={clsx(
        "flex items-center justify-center bg-about-bg",
        "h-screen"
      )}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-24">
          <BoxText name={name} />
          <SecondaryButton
            to="/contact-form"
            className="self-center py-6 px-24 text-5xl md:text-4xl md:py-4 md:px-34 mt-0!"
          >
            Tilbage
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContactConfirmation;

const BoxText = ({ name }) => {
  const confirmText = [
    {
      id: 1,
      title: `Hej ${
        name || "ven"
      }, Tak for din besked! Du hører fra os snarest.`,
      titleClass:
        "font-zen font-normal text-primary text-4xl md:text-6xl text-center leading-[1.2] mb-2 max-w-[16rem] sm:max-w-lg md:max-w-2xl mx-auto",
      subtitleClass:
        "font-normal text-primary text-base text-center w-full md:max-w-4xl sm:max-w-lg",
    },
  ];

  return (
    <div>
      {confirmText.map((item) => (
        <div key={item.id} className="">
          {item.element}
          <p className={item.titleClass}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
