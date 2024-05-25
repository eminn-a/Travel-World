import CreateDestination from "../components/CreateDestination/CreateDestination";
import Hero from "../components/Hero/Hero";

import { heroData } from "../data/heroData";

const CreateDestinationPage = () => {
  return (
    <>
      <Hero {...heroData.CreateDestination} />
      <CreateDestination />
    </>
  );
};

export default CreateDestinationPage;
