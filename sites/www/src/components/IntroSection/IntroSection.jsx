import React from "react";
import clsx from "clsx";

export default function IntroSection({ children }) {
  return (
    <section
      className={clsx(
        "relative bottom-12 h-screen flex items-center justify-center bg-about-bg",
        "rounded-br-[3rem] rounded-tl-[3rem]"
      )}
    >
      {children}
    </section>
  );
}
