import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";

import { heroData } from "../data/heroData";
import { destinationData } from "../data/destinationData";

import hero from "../assets/hero.jpg";
import Trips from "../components/Trips/Trips";

const HomePage = () => {
  return (
    <>
      <Hero {...heroData.home} image={hero} />
      <Destination data={destinationData} />
      <Trips />
    </>
  );
};
export default HomePage;
