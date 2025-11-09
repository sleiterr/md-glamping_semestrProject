import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import OverlayHeader from "../OverlayHeader/OverlayHeader";
import SecondaryButton from "../Button/SecondaryButton";

import { fetchStays } from "../../utils/api";

const StayList = () => {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stayData = async () => {
      try {
        setLoading(true);
        const data = await fetchStays();
        console.log("Fetched stays:", data);
        setStays(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    stayData();
  }, []);

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <Section>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-72 gap-x-0 md:gap-y-52 md:gap-x-6 mt-24 md:mt-0">
        {stays.map((item, index) => {
          return (
            <li key={`${item._id}-${index}`} className="relative ">
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-96 h-72 md:w-xl md:h-128 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-y-0 w-96 h-72 md:w-xl md:h-128 bg-fourth-overlay"></div>

                <OverlayHeader className="absolute -top-46 md:-top-26 px-20 py-1 md:px-22 md:py-2">
                  <h4 className="font-zen front-normal text-6xl text-secondary text-center">
                    {item.title}
                  </h4>
                  <p className="font-zen front-normal text-4xl text-secondary text-center">
                    personer {item.numberOfPersons}
                  </p>
                  <span className="font-zen front-normal text-4xl text-secondary text-center">
                    fra {item.price}
                  </span>
                </OverlayHeader>
                <SecondaryButton
                  to={`/stayview/${item._id}`}
                  className="absolute -bottom-10 md:-bottom-10 px-12 py-4 md:px-16 md:py-4"
                >
                  Læs mere
                </SecondaryButton>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default StayList;
