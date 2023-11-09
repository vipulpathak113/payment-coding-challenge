import { PaymentData } from "../types/ModalProps";

export const mockSuccessDialog = (data: PaymentData) => {
  console.log("Payment successful!");
  console.log("Payment data:", data);
};

export const mockErrorDialog = (error: unknown) => {
  console.log("Payment failed!");
  console.log("Error:", error);
};

export const mockLoginPage = () => {
    console.log("Please login to continue.");
  };
