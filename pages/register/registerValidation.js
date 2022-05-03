import * as yup from "yup";

export const registerValidation = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(5, "least than 5 char")
    .max(120, "more than 120 char")
    .trim(),
  email: yup
    .string()
    .required("email is required")
    .email("Email is not valid")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "least than 4 char")
    .max(120, "more than 120 char")
    .trim(),
    confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "confirm password is not correct"),
});
