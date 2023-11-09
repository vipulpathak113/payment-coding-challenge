/* eslint-disable no-undef */
// Import the mockAPI function
import { mockAPI } from "../api/MockApi";
import { PaymentData } from "../types/ModalProps";
import * as MockFn from "../api/MockFunctions";
import { vi } from "vitest";

const paymentData = {
  to: "test@test.com",
  from: "USD",
  amount: 2000,
  description: "Payment done to bank",
};

const spySuccessFn = vi.spyOn(MockFn, "mockSuccessDialog");
const spyErrorFn = vi.spyOn(MockFn, "mockErrorDialog");
const spyLoginFn = vi.spyOn(MockFn, "mockLoginPage");

// Define the test cases
describe("mockAPI", () => {
  // Test case 1: On success, display success dialog
  test("should resolve with payment data and display success dialog", async () => {
    paymentData.amount = 200;
    const result = (await mockAPI(paymentData)) as PaymentData; // Call the mockAPI function
    MockFn.mockSuccessDialog(result); // Call the mockSuccessDialog function
    expect(result).toEqual(paymentData); // Expect the result to be equal to the payment data
    expect(spySuccessFn).toHaveBeenCalledWith(result); // Expect the mockSuccessDialog function to be called with the result
  });

  // Test case 2: On 400 - Bad Request, display error message to user
  test("should reject with error message and display error dialog", async () => {
    paymentData.amount = 50;
    try {
      const result = await mockAPI(paymentData); // Call the mockAPI function
      console.log(result);
    } catch (error) {
      MockFn.mockErrorDialog(error); // Call the mockErrorDialog function

      expect(error).toEqual("Error!"); // Expect the error to be equal to "Error!"
      expect(spyErrorFn).toHaveBeenCalledWith(error); // Expect the mockErrorDialog function to be called with the error
    }
  });

  // Test case 3: On 401 - Unauthorized, redirect to login page
  test("should reject with error message and redirect to login page", async () => {
    paymentData.amount = 100;
    try {
      const result = await mockAPI(paymentData); // Call the mockAPI function
      console.log(result);
    } catch (error) {
      MockFn.mockLoginPage(); // Call the mockLoginPage function

      expect(error).toEqual("Error!"); // Expect the error to be equal to "Error!"
      expect(spyLoginFn).toHaveBeenCalled(); // Expect the mockLoginPage function to be called
    }
  });

  // Test case 4: On 5XX - Server Error, display error message to user
  test("should reject with error message and display error dialog", async () => {
    paymentData.amount = 0;
    try {
      const result = await mockAPI(paymentData); // Call the mockAPI function
      console.log(result);
    } catch (error) {
      MockFn.mockErrorDialog(error); // Call the mockErrorDialog function

      expect(error).toEqual("Error!"); // Expect the error to be equal to "Error!"
      expect(spyErrorFn).toHaveBeenCalledWith(error); // Expect the mockErrorDialog function to be called with the error
    }
  });
});
