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
      <ul className="flex flex-col gap-62">
        {stays.map((item, index) => {
          return (
            <li key={`${item._id}-${index}`} className="">
              <div className="relative flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-96 h-72 md:w-xl md:h-128 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-y-0 w-96 h-72 md:w-xl md:h-128 bg-fourth-overlay"></div>

                <OverlayHeader className="absolute -top-36 md:-top-26 px-20 py-2 md:px-22 md:py-2">
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
