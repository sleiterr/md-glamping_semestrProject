import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

const ActivitiAcordion = ({ description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsActive((prev) => !prev)}
        className={clsx(
          "cursor-pointer outline-0",
          "relative cursor-pointer border border-none transition-all duration-500 ease-in-out",
          "max-w-full md:max-w-3xl md:w-full"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center md:gap-4",
            "rounded-br-[3.125rem] rounded-tl-[3.125rem]",
            "border border-white py-1"
          )}
        >
          <h4
            className={clsx(
              "font-zen font-medium text-secondary text-4xl sm:text-4xl md:text-5xl text-center"
            )}
          >
            {isActive ? "Læs mindre" : "Læs mere"}
          </h4>
          <IoIosArrowForward
            className={clsx(
              "text-3xl md:text-4xl text-white",
              "md:-top-0.5 transition-transform duration-500 ease-in-out",
              isActive
                ? "rotate-90 text-accordion-nr-active transition-colors duration-300 ease-in-out"
                : "duration-600 ease-in-out"
            )}
          />
        </div>

        <div
          className={clsx(
            "overflow-hidden transition-all duration-600 ease-in-out",
            isActive ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <p className="font-zen font-normal text-2xl text-primary p-0 py-4 ">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivitiAcordion;
