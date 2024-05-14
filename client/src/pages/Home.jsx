import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";

import { heroData } from "../data/heroData";
import { destinationData } from "../data/destinationData";

import hero from "../assets/hero.jpg";
import Trips from "../components/Trips/Trips";
// Testing if its working with img's

const Home = () => {
  return (
    <>
      <Hero {...heroData.home} image={hero} />
      <Destination {...destinationData} />
      <Trips />

      {/* <Hero {...heroData.about} image={hero} />
      <Hero {...heroData.contacts} image={hero} />
      <Hero {...heroData.about} image={hero} /> */}
    </>
  );
};
export default Home;
