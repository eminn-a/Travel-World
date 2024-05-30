import { useEffect, useState } from "react";

import * as destinationService from "./../services/destinationServices";

import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";
import Blogs from "../components/Blogs/Blogs";

import { heroData } from "../data/heroData";
import { tripData } from "../data/tripData";

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    destinationService.getAll().then((res) => setDestinations(res));
  }, []);

  return (
    <>
      <Hero {...heroData.home} />
      <Destination data={destinations} />
      <Blogs data={tripData} />
    </>
  );
};
export default HomePage;
