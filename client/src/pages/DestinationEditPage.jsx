import { useQuery } from "@tanstack/react-query";
import { heroData } from "../data/heroData";
import Hero from "../components/Hero/Hero";
import { useParams } from "react-router-dom";
import * as destinationService from "../services/destinationServices";
import Spinner from "../components/Shared/Spinner/Spinner";
import CreateDestination from "../components/DestinationCreate/DestinationCreate";

const DestinationEditPage = () => {
  const { id } = useParams();

  const {
    data: destination,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["editDestination", id],
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

  return (
    <>
      <Hero {...heroData.editDestination} />
      <CreateDestination editData={destination} />
    </>
  );
};

export default DestinationEditPage;
