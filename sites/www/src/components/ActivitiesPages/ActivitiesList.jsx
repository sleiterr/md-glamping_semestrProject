import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import OverlayHeader from "../OverlayHeader/OverlayHeader";
import ActivityCard from "./ActivityCard";
import FavoriteBtn from "./FavoriteBtn";

import { fetchActiviti } from "../../utils/api";

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const activitiesData = async () => {
      try {
        setLoading(true);
        const data = await fetchActiviti();
        console.log("Fetched activities:", data);
        setActivities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    activitiesData();
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteIds(savedFavorites);
  }, []);

  useEffect(() => {
    if (favoriteIds.length > 0)
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

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <Section>
      <ul className="flex flex-col gap-46 md:gap-62">
        {activities.map((item, index) => {
          const isFavorite = favoriteIds.includes(String(item._id));

          return (
            <li key={`${item._id}-${index}`}>
              <div className="relative flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 md:w-xl md:h-128 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-y-0 w-full h-72 md:w-xl md:h-128 bg-fourth-overlay"></div>

                <OverlayHeader className="absolute -top-14 md:-top-12 px-24 py-3.5 md:px-22 md:py-4">
                  <h4 className="font-zen front-normal text-6xl text-secondary text-center">
                    {item.title}
                  </h4>
                </OverlayHeader>
                <ActivityCard className="absolute -bottom-12 flex flex-col">
                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-col items-start">
                      <p className="font-zen front-normal text-4xl text-secondary text-center">
                        {item.date}
                      </p>
                      <span className="font-zen front-normal text-4xl text-secondary text-center">
                        Kl. {item.time}
                      </span>
                    </div>
                    <FavoriteBtn
                      isFavorite={isFavorite}
                      onToggle={() => toggleFavorite(item._id)}
                    />
                  </div>
                </ActivityCard>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default ActivitiesList;

//   to={`/stayview/${item._id}`}
