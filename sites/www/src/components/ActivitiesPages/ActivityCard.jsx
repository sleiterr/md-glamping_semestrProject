import React from "react";
import clsx from "clsx";

const ActivityCard = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={clsx(
        "bg-activ-card-bg py-6 px-6 rounded",
        "font-zen font-normal text-secondary text-4xl",
        "rounded-br-[3.125rem] rounded-tl-[3.125rem]",
        "w-full max-w-md md:w-md mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ActivityCard;
