import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import CatalogItem from "../components/Catalog/CatalogItem";
import { useQuery } from "@tanstack/react-query";
import * as destinationService from "./../services/destinationServices";

const CatalogPage = () => {
  const {
    data: alldestinations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["alldestinations"],
    queryFn: destinationService.getAll,
  });

  return (
    <>
      <Hero {...heroData.catalog} />
      <CatalogItem data={alldestinations} error={error} isLoading={isLoading} />
    </>
  );
};

export default CatalogPage;
