import DestinationCreate from "../components/DestinationCreate/DestinationCreate";
import Hero from "../components/Hero/Hero";

import { heroData } from "../data/heroData";

const DestinationCreatePage = () => {
  return (
    <>
      <Hero {...heroData.createDestination} />
      <DestinationCreate />
    </>
  );
};

export default DestinationCreatePage;
