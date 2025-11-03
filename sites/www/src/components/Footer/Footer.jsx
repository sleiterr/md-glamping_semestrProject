import React from "react";
import { logo } from "../../assets/iconExports/index";
import MediaFooter from "./MediaFooter";

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
    <div className="bg-footer-bg px-28 py-20">
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
