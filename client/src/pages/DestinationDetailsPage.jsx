import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import SingleDestination from "../components/SingleDestination/SingleDestination";
import { useEffect, useState } from "react";
import * as destinationService from "../services/destinationServices";
import Spinner from "../components/Shared/Spinner/Spinner";
import { useMutation } from "@tanstack/react-query";

const SingleDestinationPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(undefined);

  const getDestinationMutation = useMutation({
    mutationFn: (id) => destinationService.getById(id),
    onSuccess: (destinationData) => {
      console.log(destinationData);
      if (destinationData) {
        setDestination(destinationData);
      }
    },
    onError: (err) => console.log(err),
  });

  useEffect(() => {
    getDestinationMutation.mutate(id);
  }, [id]);

  return (
    <>
      <Hero
        img={destination?.images}
        title={destination?.title}
        btnName={destination?.date}
      />
      <SingleDestination {...destination} />
    </>
  );
};

export default SingleDestinationPage;
