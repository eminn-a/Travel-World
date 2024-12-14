import Hero from "../components/Hero/Hero";
import { heroData } from "../data/heroData";
import DestinationsCatalog from "../components/DestinationsCatalog/DestinationsCatalog";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import * as destinationService from "../services/destinationServices";
import DestinationFilter from "../components/DestinationFilter/DestinationFilter";
import Pagination from "../components/Shared/Pagination/Pagination";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const DestinationsCatalogPage = () => {
  const location = useLocation();
  const queryClient = useQueryClient();

  // const {
  //   data: destinationsPage,
  //   isLoading,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   refetch,
  // } = useInfiniteQuery({
  //   queryKey: ["destinationsPage"],
  //   queryFn: ({ pageParam = 1 }) => destinationService.getPage(5, pageParam),
  //   getNextPageParam: (lastPage, allPages) => {
  //     return lastPage.destinations.length < 5 ? undefined : allPages.length + 1;
  //   },
  //   retry: 1,
  // });

  // useEffect(() => {
  //   queryClient.resetQueries(["destinationsPage"]);
  //   refetch();
  // }, []);

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
        // fetchNextPage={fetchNextPage}
        // hasNextPage={hasNextPage}
      />
      {/* <Pagination fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} /> */}
    </>
  );
};

export default DestinationsCatalogPage;
