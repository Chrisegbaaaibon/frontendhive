import Validator from "validatorjs";

export const validateEmail = (email: string): string | null => {
  const isEmpty = email.trim() === "";
  if (isEmpty) return "Please fill out this field";

  const emailValidation = new Validator(
    {
      email: email.trim(),
    },
    { email: "required|email" }
  );
  const isNotValid = emailValidation.fails();
  if (isNotValid) return "Please enter a valid email address";

  return null;
};
