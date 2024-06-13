import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./CreateDestinationStyles.module.css";
import { createFormSchema } from "../../validations/formValidation";
import * as destinationServices from "../../services/destinationServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateDestination = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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
      // queryClient.invalidateQueries(["destindations"]);
      navigate("/");
      toast.success("Successfully added new destination!");
    },
    onError: (error) => {
      navigate("/");
      toast.error(`${error.message}`);
    },
  });

  const onSubmit = async (data) => {
    data.images = [data.img1, data.img2, data.img3, data.img4];
    delete data.img1;
    delete data.img2;
    delete data.img3;
    delete data.img4;

    addDestinationMutation.mutate(data);
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Destination informations</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" placeholder="Title" />
        <input {...register("date")} type="date" placeholder="Date" />
        <input {...register("price")} type="number" placeholder="Price" />
        <input {...register("img1")} type="text" placeholder="Img 1" />
        <input {...register("img2")} type="text" placeholder="Img 1" />
        <input {...register("img3")} type="text" placeholder="Img 1" />
        <input {...register("img4")} type="text" placeholder="Img 2" />
        <textarea
          name=""
          {...register("description")}
          id=""
          placeholder="Descriptions"
          rows="10"
        ></textarea>

        {/* <button disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button> */}

        <button>Create</button>
        <div>
          {errors && (
            <p className="errorMsg">
              {errors[Object.keys(errors)[0]]?.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateDestination;
