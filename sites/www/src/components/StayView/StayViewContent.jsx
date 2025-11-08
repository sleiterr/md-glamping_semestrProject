import React from "react";
import clsx from "clsx";
import SecondaryButton from "../../components/Button/SecondaryButton";

const StayViewContent = ({ title, description, includes, price }) => {
  return (
    <section
      className={clsx(
        "relative z-10 -mt-12 flex items-center justify-center bg-about-bg",
        "rounded-tl-[3rem]",
        "min-h-[calc(100vh-3rem)]"
      )}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="font-zen font-normal text-primary text-6xl text-center leading-[1.2] mb-2 max-w-[20rem] sm:max-w-lg md:max-w-none mx-auto">
            {title}
          </h2>
          <p className="font-normal text-primary text-base text-center w-full md:max-w-4xl sm:max-w-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-12">
          <ul className="flex flex-col items-center mt-9">
            {includes.map((item, index) => (
              <li
                key={index}
                className="font-light text-primary text-base text-center"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="font-zen font-thin text-primary text-5xl text-center">
            Pris {price},-
          </p>
          <SecondaryButton
            to="/contact-form"
            className="normal-case! py-11 px-20 md:py-6 md:px-22"
          >
            Book nu
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default StayViewContent;
