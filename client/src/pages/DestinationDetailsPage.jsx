import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import DestinationDetails from "../components/DestinationDetails/DestinationDetails";
import * as destinationService from "../services/destinationServices";
import Spinner from "../components/Shared/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import formatDateString from "../utils/formatDateString";

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
    return (
      <div
        style={{
          height: "76vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          height: "76vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="errorMsg">Something went wrong!</h1>
      </div>
    );
  }

  console.log(destination);

  return (
    <>
      <Hero
        img={destination?.images[0]}
        title={destination?.title}
        btnName={formatDateString(destination?.date)}
      />
      <DestinationDetails {...destination} />
    </>
  );
};

export default SingleDestinationPage;
