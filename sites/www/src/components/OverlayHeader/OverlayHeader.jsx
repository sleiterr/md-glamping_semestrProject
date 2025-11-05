import React from "react";
import clsx from "clsx";

const OverlayHeader = ({ children }) => {
  return (
    <div
      className={clsx(
        "bg-title-bg px-12 py-6 rounded-br-[3.125rem] rounded-tl-[3.125rem]",
        "font-zen front-normal text-6xl text-secondary text-center",
        "max-w-[20rem] sm:max-w-lg md:max-w-none mx-auto"
      )}
    >
      {children}
    </div>
  );
};

export default OverlayHeader;
