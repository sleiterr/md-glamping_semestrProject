import React, { useState, useEffect } from "react";
import FavoritesHero from "../../components/MyFavorites/FavoritesHero";
import ListSummary from "../../components/MyFavorites/ListSummary";
import FavoritesPages from "../../components/MyFavorites/FavoritesPages";

const MyList = () => {
  const [favoriteIds, setFavoriteIds] = useState(() => 
    JSON.parse(localStorage.getItem("favorites")) || []
);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (id) => {
    const stringId = String(id);
    setFavoriteIds((prev) =>
      prev.includes(stringId)
        ? prev.filter((fid) => fid !== stringId)
        : [...prev, stringId]
    );
  };

  return (
    <>
      <FavoritesHero />
      <ListSummary count={favoriteIds.length} />
      <FavoritesPages
        favoriteIds={favoriteIds}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default MyList;
