import * as yup from "yup";

export const createFormSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is missing")
    .min(3, "Title must be 3 chars atleast"),
  date: yup.string().required("Date is missing"),
  price: yup
    .number()
    .integer()
    .positive()
    .typeError("Price must be a number")
    .required("Please provide plan cost.")
    .min(1, "Too little price")
    .max(5000, "Very costly price!"),
  img1: yup
    .string()
    .required("At least 1 img please!")
    .matches(
      /((https?):\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}((\/|#)?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+(&[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+)*)?$/,
      "Enter correct img url!"
    ),
});
