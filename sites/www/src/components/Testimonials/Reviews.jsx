import React from "react";
import clsx from "clsx";

const Reviews = ({ review }) => {
  return (
    <div
      className={clsx(
        "bg-testimonials-bg rounded-br-[3.125rem] rounded-tl-[3.125rem]",
        "px-6 py-12 max-w-2xl min-w-5 w-full"
      )}
    >
      <h4
        className={clsx(
          "font-zen front-normal text-3xl text-secondary text-center",
          "min-w-[18rem] max-w-[18rem] sm:max-w-[20rem] md:max-w-none mx-auto"
        )}
      >
        {`${review.name}, ${review.age}  år`}
        {review.stay && ` Har været på ${review.stay.toLowerCase()}`}
      </h4>
      <p className="front-normal text-base text-secondary text-center">
        {review.review}
      </p>
    </div>
  );
};

export default Reviews;
