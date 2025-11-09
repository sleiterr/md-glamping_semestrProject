import React from "react";
import ActivitiesHome from "../../components/ActivitiesPages/ActivitiesHome";
import ActivitiesAbout from "../../components/ActivitiesPages/ActivitiesAbout";
import ActivitiesList from "../../components/ActivitiesPages/ActivitiesList";

const Activities = () => {
  return (
    <>
      <ActivitiesHome />
      <ActivitiesAbout />
      <ActivitiesList />
    </>
  );
};

export default Activities;
