import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import OverlayHeader from "../OverlayHeader/OverlayHeader";
import Reviews from "./Reviews";

import { fetchRevies } from "../../utils/api";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchRevies();
        setReview(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">Loading reviews...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <Section>
      
      <div className="flex flex-col items-center justify-center gap-14 w-full">
        <div className="">
          <OverlayHeader>Vores gæster udtaler</OverlayHeader>
        </div>
        {reviews.map((review) => (
          <Reviews key={review._id} review={review} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
