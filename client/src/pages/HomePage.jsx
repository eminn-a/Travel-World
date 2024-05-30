import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";
import Blogs from "../components/Blogs/Blogs";

import { heroData } from "../data/heroData";
// import { destinationData } from "../data/destinationData";
import { tripData } from "../data/tripData";
import hero from "../assets/hero.jpg";
import { useEffect, useState } from "react";
import * as destinationService from "./../services/destinationServices";

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    destinationService.getAll().then((res) => setDestinations(res));
  }, []);

  // console.log(destinations);
  return (
    <>
      <Hero {...heroData.home} image={hero} />
      <Destination data={destinations} />
      <Blogs data={tripData} />
    </>
  );
};
export default HomePage;
