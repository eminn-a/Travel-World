import Hero from "../components/Hero/Hero";
import Trips from "../components/Trips/Trips";
import { heroData } from "../data/heroData";

const Catalog = () => {
  return (
    <>
      <Hero {...heroData.catalog} />
      <Trips />
    </>
  );
};

export default Catalog;
