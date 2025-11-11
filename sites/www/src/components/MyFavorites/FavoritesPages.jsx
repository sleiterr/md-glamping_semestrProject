import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import OverlayHeader from "../OverlayHeader/OverlayHeader";
import ActivityCard from "../ActivitiesPages/ActivityCard";
import ActivitiAcordion from "../ActivitiesPages/ActivitiAcordion";
import FavoriteBtn from "../ActivitiesPages/FavoriteBtn";

import { fetchActiviti } from "../../utils/api";

const FavoritesPages = ({ favoriteIds, toggleFavorite }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadActivities = async () => {
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
    loadActivities();
  }, []);

  const favoriteActivities = activities.filter((item) =>
    favoriteIds.includes(String(item._id))
  );

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <div className="px-4 md:px-24 py-12">
      {favoriteActivities.length === 0 ? (
        <p className="text-center text-2xl mt-10">
          Du har ingen foretrukne aktiviteter endnu.
        </p>
      ) : (
        <Section>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-22 md:gap-y-32 gap-x-6">
            {favoriteActivities.map((item, index) => {
              const isFavorite = favoriteIds.includes(String(item._id));

              return (
                <li key={`${item._id}-${index}`}>
                  <div className="relative flex flex-col items-center">
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 md:w-xl md:h-128 object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-y-0 w-full h-72 md:w-xl md:h-128 bg-fourth-overlay"></div>
                    </div>

                    <OverlayHeader className="absolute -top-14 -translate-x-4 md:-top-12 px-24 py-3.5 md:px-22 md:py-4">
                      <h4 className="font-zen front-normal text-6xl text-secondary text-center">
                        {item.title}
                      </h4>
                    </OverlayHeader>
                    <ActivityCard className="relative -top-14 -translate-x-4 flex flex-col gap-6">
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
                      <ActivitiAcordion description={item.description} />
                    </ActivityCard>
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>
      )}
    </div>
  );
};

export default FavoritesPages;
