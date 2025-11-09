import React from "react";
import clsx from "clsx";

const pageText = [
  {
    id: 1,
    title: "Login",
    titleClass: "font-zen text-primary text-8xl",
  },
];

const PageLogin = () => {
  return (
    <section
      className={clsx(
        "flex items-center justify-center bg-about-bg",
        "h-screen"
      )}
    >
      <div className="px-4 py-16 mx-auto md:max-w-7xl">
        <PageItem />
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
