import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import DestinationsCatalog from "../components/DestinationsCatalog/DestinationsCatalog";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import * as destinationService from "../services/destinationServices";
import DestinationFilter from "../components/DestinationFilter/DestinationFilter";
import Pagination from "../components/Shared/Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";

const DestinationsCatalogPage = () => {
  const {
    data: destinationsPage,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["destinationsPage"],
    queryFn: destinationService.getAll,
  });

  return (
    <>
      <Hero {...heroData.catalog} />
      <DestinationFilter />
      <DestinationsCatalog
        data={destinationsPage}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};

export default DestinationsCatalogPage;
