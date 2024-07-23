import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import DestinationsCatalog from "../components/DestinationsCatalog/DestinationsCatalog";
import { useQuery } from "@tanstack/react-query";
import * as destinationService from "../services/destinationServices";

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
      <DestinationsCatalog
        data={alldestinations}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};

export default DestinationsCatalogPage;
