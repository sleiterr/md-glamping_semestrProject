import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import { ImFacebook2 } from "react-icons/im";

const MediaFooter = () => {
  return (
    <>
      <ul className="flex items-center justify-center gap-4">
        <li className="flex items-center">
          <a
            href="#"
            target="_blanc"
            rel="noopener noreferer"
            className="text-white text-6xl hover:text-gray-200 transition-colors"
          >
            <PiInstagramLogoFill />
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="#"
            target="_blanc"
            rel="noopener noreferer"
            className="text-white text-5xl hover:text-gray-200 transition-colors"
          >
            <ImFacebook2 />
          </a>
        </li>
      </ul>
    </>
  );
};

export default MediaFooter;
