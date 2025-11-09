import React from "react";
import { active, notActive } from "../../assets/iconExports/index";
import clsx from "clsx";

const FavoriteBtn = ({ isFavorite, onToggle }) => {
  return (
    <>
      <button
        onClick={onToggle}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className={clsx(
          "bg-icon-overlay",
          "rounded-br-[0.6rem] rounded-tl-[0.6rem]",
          "p-1.5 cursor-pointer",
          "transition-all duration-300 ease-in-out",
          "hover:bg-hover-icon hover:scale-105 hover:shadow-md"
        )}
      >
        <img
          src={isFavorite ? active : notActive}
          alt={isFavorite ? "favorite active" : "not favorite"}
          className="w-8 h-8 transition duration-200 ease-in-out"
        />
      </button>
    </>
  );
};

export default FavoriteBtn;
