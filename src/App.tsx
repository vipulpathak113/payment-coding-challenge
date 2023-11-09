import { useState } from "react";
import { PaymentData } from "./types/ModalProps";
import { PaymentButton } from "./components/PaymentButton";
import { ModalBox } from "./components/Modal";
import { ModalBody } from "./components/ModalBody";
import { mockAPI } from "./api/MockApi";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  // function to handle the click of the payment button
  const handlePay = () => {
    setShowModal(true);
  };

  // function to handle the close of the Modal box
  const handleClose = () => {
    setShowModal(false);
  };

  // function to handle the submit of the Modal box
  const handleSubmit = async (data: PaymentData) => {
    try {
      const result = await mockAPI(data);
      console.log(result);
      alert("Payment successful!");
    } catch (error) {
      console.log(error);
    }

    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <PaymentButton onClick={handlePay} />
      <ModalBox
        showModal={showModal}
        title="Payment Details"
        onClose={handleClose}
      >
        <ModalBody onClose={handleClose} onSubmit={handleSubmit} />
      </ModalBox>
    </div>
  );
};

export default App;
