import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import CatalogItem from "../components/Catalog/CatalogItem";
import { tripData } from "../data/tripData";

const CatalogPage = () => {
  return (
    <>
      <Hero {...heroData.catalog} />
      <CatalogItem data={tripData} />
    </>
  );
};

export default CatalogPage;
