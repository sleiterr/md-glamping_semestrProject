import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StayIntro from "../../components/StayView/StayIntro";
import StayViewContent from "../../components/StayView/StayViewContent";

import { fetchStaysById } from "../../utils/api";

const StayView = () => {
  const { id } = useParams();
  const [stay, setStay] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("stayview id:", id);

  useEffect(() => {
    const stayData = async () => {
      try {
        setLoading(true);
        const data = await fetchStaysById(id);
        console.log("Fetched stays:", data);
        setStay(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    stayData();
  }, [id]);

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading stay...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  if (!stay) return <p>Stay not found...</p>;
  return (
    <>
      <StayIntro image={stay.image} title={stay.title} />
      <StayViewContent
        title={stay.title}
        description={stay.description}
        includes={stay.includes}
        price={stay.price}
      />
    </>
  );
};

export default StayView;
