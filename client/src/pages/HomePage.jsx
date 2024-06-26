import { useQuery } from "@tanstack/react-query";

import * as destinationService from "./../services/destinationServices";
import * as blogService from "./../services/blogService";
import { heroData } from "../data/heroData";

import Hero from "../components/Hero/Hero";
import DestinationsHome from "../components/DestinationsHome/DestinationsHome";
import BlogsHome from "../components/BlogsHome/BlogsHome";

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
    queryFn: () => blogService.getLatest(3),
  });

  return (
    <>
      <Hero {...heroData.home} />
      <DestinationsHome
        data={destinations}
        spinner={isDestinationsLoading}
        error={destinationsError}
      />
      <BlogsHome data={blogs} spinner={isBlogssLoading} error={blogsError} />
    </>
  );
};

export default HomePage;
