import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./CreateDestinationStyles.module.css";
import { createFormSchema } from "../../validations/formValidation";

const CreateDestination = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((res) => {
        setTimeout(res, 1000);
      });
      // throw new Error("invalid email");
      console.log(data);
      navigate("/catalog");
      toast.success("Successfully added new destination!");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Destination informations</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" placeholder="Title" />
        <input {...register("date")} type="date" placeholder="Date" />
        <input {...register("price")} type="number" placeholder="Price" />
        <input {...register("img1")} type="text" placeholder="Img 1" />
        <input {...register("img2")} type="text" placeholder="Img 2" />
        <textarea name="" id="" placeholder="Descriptions" rows="10"></textarea>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
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
