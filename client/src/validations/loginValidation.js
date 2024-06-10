import * as yup from "yup";

export const loginValidation = (isRegistering) => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is missing")
      .email("Must be a valid email!"),
    password: yup
      .string()
      .required("Password is missing")
      .min(5, "Password must be at least 5 characters long"),
  });

  if (isRegistering) {
    schema = schema.shape({
      ...schema.fields,
      rePassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    });
  }

  return schema;
};
