import { useEffect, useState } from "react";

import * as destinationService from "./../services/destinationServices";

import Hero from "../components/Hero/Hero";
import Destinations from "../components/Destinations/Destinations";
import Blogs from "../components/Blogs/Blogs";

import { heroData } from "../data/heroData";
import { tripData } from "../data/tripData";

const HomePage = () => {
  const [spinner, setSpinner] = useState(true);
  const [destinations, setDestinations] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      destinationService
        .getAll()
        .then((res) => {
          setDestinations(res);
        })
        .catch(() => {
          setDestinations((state) => (state = []));
        })
        .finally(setSpinner((state) => (state = false)));
    }, 2000);
  }, []);

  return (
    <>
      <Hero {...heroData.home} />
      <Destinations data={destinations} spinner={spinner} />
      <Blogs data={tripData} />
    </>
  );
};
export default HomePage;
