import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import clsx from "clsx";
import LoginForm from "../Login/LoginForm";

const pageText = [
  {
    id: 1,
    title: "Login",
    titleClass: "font-zen text-primary text-8xl",
  },
];

const PageLogin = ({ onLogin }) => {
  return (
    <section
      className={clsx(
        "flex items-center justify-center bg-about-bg",
        "relative h-screen"
      )}
    >
      <nav className="absolute top-12 right-20">
        <div
          aria-label="Go to home"
          className={clsx(
            "bg-icon-overlay",
            "rounded-br-[0.6rem] rounded-tl-[0.6rem]",
            "p-4 cursor-pointer",
            "transition-all duration-300 ease-in-out",
            "hover:bg-hover-icon hover:scale-105 hover:shadow-md"
          )}
        >
          <Link to="/">
            <ImHome className="text-white w-10 h-10" />
          </Link>
        </div>
      </nav>
      <div
        className={clsx(
          "flex flex-col items-center-center gap-8",
          "px-4 py-16 mx-auto md:max-w-7xl"
        )}
      >
        <PageItem />
        <LoginForm onLogin={onLogin} />
      </div>
    </section>
  );
};

export default PageLogin;

const PageItem = () => {
  return (
    <div>
      {pageText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          {item.element}
          <h2 className={item.titleClass}>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
