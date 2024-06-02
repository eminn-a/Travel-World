import { useEffect, useState } from "react";

import * as destinationService from "./../services/destinationServices";

import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";
import Blogs from "../components/Blogs/Blogs";

import { heroData } from "../data/heroData";
import { tripData } from "../data/tripData";

const HomePage = () => {
  const [spinner, setSpinner] = useState(true);
  const [destinations, setDestinations] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      destinationService.getAll().then((res) => setDestinations(res));
      setSpinner((state) => (state = false));
    }, 3000);
  }, []);

  return (
    <>
      <Hero {...heroData.home} />
      <Destination data={destinations} spinner={spinner} />
      <Blogs data={tripData} />
    </>
  );
};
export default HomePage;
