import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./CreateDestinationStyles.module.css";
import { createFormSchema } from "../../validations/formValidation";
import * as destinationServices from "../../services/destinationServices";
import { useMutation } from "@tanstack/react-query";
import useImageInputs from "../../hooks/useImageInputs";

const CreateDestination = () => {
  const { imgCount, handleAddImage } = useImageInputs(2);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createFormSchema),
  });

  const addDestinationMutation = useMutation({
    mutationFn: (data) => destinationServices.create(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Successfully added new destination!");
    },
    onError: (error) => {
      navigate("/");
      toast.error(`${error.message}`);
    },
  });

  const onSubmit = async (data) => {
    const images = [];
    for (let i = 1; i <= imgCount; i++) {
      if (data[`img${i}`]) {
        images.push(data[`img${i}`]);
      }
      delete data[`img${i}`];
    }
    data.images = images;

    addDestinationMutation.mutate(data);
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Destination Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" placeholder="Title" />
        <input {...register("date")} type="date" placeholder="Date" />
        <input {...register("price")} type="number" placeholder="Price" />

        {[...Array(imgCount)].map((_, index) => (
          <input
            key={index}
            {...register(`img${index + 1}`)}
            type="text"
            placeholder={`Img ${index + 1}`}
          />
        ))}

        <button type="button" onClick={handleAddImage}>
          Add Image
        </button>

        <textarea
          {...register("description")}
          placeholder="Description"
          rows="10"
        ></textarea>

        <button type="submit">Create</button>

        {errors && (
          <p className="errorMsg">{errors[Object.keys(errors)[0]]?.message}</p>
        )}
      </form>
    </div>
  );
};

export default CreateDestination;
