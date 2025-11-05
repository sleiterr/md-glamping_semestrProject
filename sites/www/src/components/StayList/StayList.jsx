import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import OverlayHeader from "../OverlayHeader/OverlayHeader";

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
    return (
      <p className="font-normal text-2xl text-sky-800">Loading reviews...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <Section>
      <div className="">
        <ul>
          {stays.map((item) => {
            console.log(item);
            return (
              <li key={item._id}>
                <p className="font-normal text-3xl">{item.title}</p>
                <p>{item.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default StayList;
