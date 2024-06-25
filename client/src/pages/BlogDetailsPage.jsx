import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import * as blogService from "../services/blogService";
import Hero from "../components/Hero/Hero";
import Spinner from "../components/Shared/Spinner/Spinner";
import formatDate from "../utils/dateFormater";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import SingleBlog from "../components/SingleBlog/SingleBlog";

const BlogDetailsPage = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogService.getById(id),
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
      <Hero
        img={blog?.images}
        title={blog?.title}
        btnName={formatDate(blog?.date)}
      />
      <SingleBlog data={blog} />
    </>
  );
};

export default BlogDetailsPage;
