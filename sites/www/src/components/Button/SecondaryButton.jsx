import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const SecondaryButton = ({ children, to, ...rest }) => {
  return (
    <>
      <Link
        to={to}
        {...rest}
        className={clsx(
          "bg-button-bg py-4 px-8 rounded cursor-pointer mt-12",
          "font-zen font-normal text-secondary text-4xl uppercase",
          "rounded-br-[3.125rem] rounded-tl-[3.125rem]",
          "transition duration-300 ease-in-out",
          "hover:bg-button-hover-bg"
        )}
      >
        {children}
      </Link>
    </>
  );
};

export default SecondaryButton;
