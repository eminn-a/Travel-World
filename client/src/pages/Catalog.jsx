import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import CatalogItem from "../components/Catalog/CatalogItem";

const Catalog = () => {
  return (
    <>
      <Hero {...heroData.catalog} />
      <CatalogItem />
    </>
  );
};

export default Catalog;
