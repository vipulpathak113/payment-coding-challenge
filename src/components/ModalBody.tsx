import { useState } from "react";
import { Currency, ModalBodyProps } from "../types/ModalProps";
import { validateAmount, validateEmail, validateForm } from "../utils";

export const ModalBody = ({ onClose, onSubmit }: ModalBodyProps) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState<Currency>("USD");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  // function to handle the change of the input fields
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "to":
        setTo(value);
        setEmailError(!validateEmail(value));
        break;
      case "from":
        setFrom(value as Currency);
        break;
      case "amount":
        setAmount(Number(value));
        setAmountError(!validateAmount(Number(value)));
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  // function to handle the submit of the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ to, from, amount, description });
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="to"
          >
            To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            placeholder="Enter email address"
            name="to"
            value={to}
            onChange={handleChange}
          />
          {emailError && (
            <p className="text-red-500 text-xs italic">
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="from"
          >
            From
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="from"
            name="from"
            value={from}
            onChange={handleChange}
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
          {amountError && (
            <p className="text-red-500 text-xs italic">
              Please enter a positive number.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description (optional)
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="bg-white mr-4 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClose}
          >
            Cancel
          </button>
          {!validateForm({ to, amount }) ? (
            <button
              type="submit"
              className="bg-gray-300 border border-transparent rounded-md px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              disabled={!validateForm({ to, amount })}
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="bg-indigo-600 cursor-pointer border border-transparent rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
