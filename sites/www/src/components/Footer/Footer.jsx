import React from "react";
import { logo } from "../../assets/iconExports/index";
import MediaFooter from "./MediaFooter";
import clsx from "clsx";

const footerText = [
  {
    id: 1,
    element: <img src={logo} alt="Logo" className="w-8 h-auto" />,
    text: "Gittes Glamping",
    className: "font-normal font-zen text-4xl text-secondary",
  },
];

const Footer = () => {
  return (
    <div
      className={clsx(
        "bg-footer-bg md:px-28 md:py-20",
        "px-12 py-18 md:px-28 md:py-20"
      )}
    >
      <MediaFooter />
      <FooterItem />
    </div>
  );
};

export default Footer;

const FooterItem = () => {
  return (
    <div className="">
      {footerText.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center gap-4 mt-12"
        >
          {item.element}
          <p className={item.className}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
