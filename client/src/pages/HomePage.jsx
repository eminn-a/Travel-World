import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";
import Blogs from "../components/Blogs/Blogs";

import { heroData } from "../data/heroData";
import { destinationData } from "../data/destinationData";
import { tripData } from "../data/tripData";
import hero from "../assets/hero.jpg";

const HomePage = () => {
  return (
    <>
      <Hero {...heroData.home} image={hero} />
      <Destination data={destinationData} />
      <Blogs data={tripData} />
    </>
  );
};
export default HomePage;
