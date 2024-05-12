import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";

import { homeData } from "../data/heroData";
import { destinationData } from "../data/destinationData";

import hero from "../assets/hero.jpg";

const img1 =
  "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 =
  "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Home = () => {
  return (
    <>
      <Hero {...homeData.home} image={hero} />
      <Destination {...destinationData} img1={img1} img2={img2} />
      <Hero {...homeData.about} image={hero} />
    </>
  );
};
export default Home;
