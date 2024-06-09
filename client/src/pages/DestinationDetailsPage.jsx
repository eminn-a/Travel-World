import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import SingleDestination from "../components/SingleDestination/SingleDestination";
import { useEffect, useState } from "react";
import * as destinationService from "../services/destinationServices";
import Spinner from "../components/Shared/Spinner/Spinner";

const SingleDestinationPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState({});

  useEffect(() => {
    destinationService
      .getById(id)
      .then((data) => {
        setDestination(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <Hero
        img={destination.images}
        title={destination?.title}
        btnName={destination.date}
      />
      <SingleDestination {...destination} />
    </>
  );
};

export default SingleDestinationPage;
