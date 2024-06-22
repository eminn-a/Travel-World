import { useQuery } from "@tanstack/react-query";

import * as destinationService from "./../services/destinationServices";
// import * as tripService from "./../services/tripServices"; // Import trip service

import Hero from "../components/Hero/Hero";
import Destinations from "../components/Destinations/Destinations";
import Blogs from "../components/Blogs/Blogs";

import { heroData } from "../data/heroData";

const HomePage = () => {
  const {
    data: destinations,
    isLoading: isDestinationsLoading,
    error: destinationsError,
  } = useQuery({
    queryKey: ["destinations"],
    queryFn: () => destinationService.getLatest(3),
  });

  const {
    data: blogs,
    isLoading: isBlogssLoading,
    error: blogsError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => destinationService.getLatest(3), // Adjust the function according to your service
  });

  return (
    <>
      <Hero {...heroData.home} />
      <Destinations
        data={destinations}
        spinner={isDestinationsLoading}
        error={destinationsError}
      />
      <Blogs data={blogs} spinner={isBlogssLoading} error={blogsError} />
    </>
  );
};

export default HomePage;
