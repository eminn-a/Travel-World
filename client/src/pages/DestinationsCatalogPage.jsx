import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import DestinationsCatalog from "../components/DestinationsCatalog/DestinationsCatalog";
import { useQuery } from "@tanstack/react-query";
import * as destinationService from "../services/destinationServices";
import DestinationFilter from "../components/DestinationFilter/DestinationFilter";
import Pagination from "../components/Shared/Pagination/Pagination";

const DestinationsCatalogPage = () => {
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
      <DestinationFilter />
      <DestinationsCatalog
        data={alldestinations}
        error={error}
        isLoading={isLoading}
      />
      <Pagination />
    </>
  );
};

export default DestinationsCatalogPage;
