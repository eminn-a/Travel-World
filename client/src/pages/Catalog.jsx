import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import CatalogItem from "../components/Catalog/CatalogItem";
import { tripData } from "../data/tripData";

const Catalog = () => {
  return (
    <>
      <Hero {...heroData.catalog} />
      <CatalogItem data={tripData} />
    </>
  );
};

export default Catalog;
