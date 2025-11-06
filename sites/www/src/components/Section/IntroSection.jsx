import React from "react";
import clsx from "clsx";

const IntroSection = ({ children }) => {
  return (
    <section
      className={clsx(
        "relative bottom-12 flex items-center justify-center bg-about-bg h-240",
        "rounded-br-[3rem] rounded-tl-[3rem]"
      )}
    >
      <div className="px-4 py-16 md:py-32 md:px-0 mx-auto md:max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default IntroSection;
