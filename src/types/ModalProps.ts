export interface PaymentData {
  to: string;
  from: string;
  amount: number;
  description: string;
}

// Define a type for the currency options
export type Currency = "USD" | "INR";

// Define a type for the Modal box props
export type ModalBoxProps = {
  onClose: () => void;
  showModal: boolean;
  title: string;
  children: React.ReactNode;
};


export type ModalBodyProps={
  onClose: () => void;
  onSubmit: (data: PaymentData) => void;
}
