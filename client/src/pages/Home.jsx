import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";

import { homeData } from "../data/heroData";
import { destinationData } from "../data/destinationData";

import hero from "../assets/hero.jpg";

// Testing if its working with img's

const Home = () => {
  return (
    <>
      <Hero {...homeData.home} image={hero} />
      <Destination {...destinationData} />
      <Hero {...homeData.about} image={hero} />
      <Hero {...homeData.contacts} image={hero} />
      <Hero {...homeData.about} image={hero} />
    </>
  );
};
export default Home;
