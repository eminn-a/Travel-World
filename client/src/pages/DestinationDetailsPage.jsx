import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import SingleDestination from "../components/SingleDestination/SingleDestination";
import { useEffect, useState } from "react";
import * as destinationService from "../services/destinationServices";
import Spinner from "../components/Shared/Spinner/Spinner";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";

const SingleDestinationPage = () => {
  const { id } = useParams();

  const {
    data: destination,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["destination", id],
    queryFn: () => destinationService.getById(id),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error loading destination.</div>;
  }

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
