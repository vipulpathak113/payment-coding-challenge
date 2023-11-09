import { PaymentData } from "../types/ModalProps";

// A mock API function that returns a promise
export const mockAPI = (data: PaymentData) => {
  // Create a new promise object
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        //if amount is greater than 100 then send response
      if (data.amount > 100) {
        resolve(data);
      } else {
        reject("Error!");
      }
    }, 1000); // Set the delay to 1000 milliseconds
  });
};
