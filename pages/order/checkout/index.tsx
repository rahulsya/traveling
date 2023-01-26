import React from "react";

import Steps from "../../../components/Steps";
import { BookingFrom, PaymentForm } from "../../../components/Checkout";

function Checkout() {
  const dataStep = [
    {
      id: 1,
      title: "booking infromation",
      desc: "Please fill up the blank fields below",
      components: <BookingFrom />,
    },
    {
      id: 2,
      title: "Payment",
      desc: "Kindly follow the instructions below",
      components: <PaymentForm />,
    },
    {
      id: 3,
      title: "yey Completed",
      desc: "",
      components: (
        <>
          <div className="text-gray-500 font-light">
            We will inform you via email later once the transaction has been
            accepted
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Steps steps={dataStep} activeStep={0}></Steps>
    </div>
  );
}

export default Checkout;
