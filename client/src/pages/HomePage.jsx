import { useQuery } from "@tanstack/react-query";

import * as destinationService from "./../services/destinationServices";

import Hero from "../components/Hero/Hero";
import Destinations from "../components/Destinations/Destinations";
import Blogs from "../components/Blogs/Blogs";

import { heroData } from "../data/heroData";
import { tripData } from "../data/tripData";

const HomePage = () => {
  const {
    data: destinations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["destinations"],
    queryFn: destinationService.getAll,
  });
  console.log(destinations);

  // useEffect(() => {
  //   setTimeout(() => {
  //     destinationService
  //       .getAll()
  //       .then((res) => {
  //         setDestinations(res);
  //       })
  //       .catch(() => {
  //         setDestinations((state) => (state = []));
  //       })
  //       .finally(setSpinner((state) => (state = false)));
  //   }, 2000);
  // }, []);

  return (
    <>
      <Hero {...heroData.home} />
      <Destinations data={destinations} spinner={isLoading} error={error} />
      <Blogs data={tripData} />
    </>
  );
};
export default HomePage;
