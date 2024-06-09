import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import SingleDestination from "../components/SingleDestination/SingleDestination";
import { useEffect, useState } from "react";
import * as destinationService from "../services/destinationServices";
import Spinner from "../components/Shared/Spinner/Spinner";

import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const IMAGES = [car1, car2, car3, car4, car5];

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
      {/* <ImageSlider images={IMAGES} /> */}
    </>
  );
};

export default SingleDestinationPage;
