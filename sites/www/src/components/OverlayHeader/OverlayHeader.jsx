import React from "react";
import clsx from "clsx";

const OverlayHeader = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "bg-title-bg px-12 py-6 rounded-br-[3.125rem] rounded-tl-[3.125rem]",
        "font-zen front-normal text-6xl text-secondary text-center",
        "w-full max-w-md md:w-md mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default OverlayHeader;
