import { PaymentButtonProps } from "../types/PaymentButtonProps";

export const PaymentButton = ({ onClick }: PaymentButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Pay Now
    </button>
  );
};
