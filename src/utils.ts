import { ValidateFormProps } from "./types/FormProps";


// A helper function to validate the email address
export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

// A helper function to check if the amount is a positive number
export const validateAmount = (amount: number) => {
  const num = Number(amount);
  return !isNaN(num) && num > 0;
};

// A helper function to check if all the mandatory fields are filled
export const validateForm = ({ to, amount }: ValidateFormProps) => {
  return validateEmail(to) && validateAmount(amount);
};
