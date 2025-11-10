import React from "react";
import IntroSection from "../Section/IntroSection";

const ListSummary = ({ count }) => {
  return (
    <IntroSection className="h-96! md:h-160!">
      <div className="w-full px-4 md:px-0 flex flex-col items-center justify-center">
        <h2 className="font-zen font-normal text-primary text-6xl md:text-7xl text-center leading-[1.2] mb-14 max-w-[16rem] sm:max-w-lg md:max-w-none mx-auto">
          Antal aktiviteter på listen:
        </h2>
        <p className="font-normal text-primary text-6xl md:text-7xl text-center w-full md:max-w-4xl sm:max-w-lg">
          {count}
        </p>
      </div>
    </IntroSection>
  );
};

export default ListSummary;
