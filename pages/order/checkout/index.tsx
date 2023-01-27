import React from "react";

import Steps from "../../../components/Steps";
import Button from "../../../components/Button";
import { BookingFrom, PaymentForm } from "../../../components/Checkout";

import { useSteps } from "../../../hooks";

function Checkout() {
  const dataStep = [
    {
      id: 1,
      key: "book_information",
      title: "booking infromation",
      desc: "Please fill up the blank fields below",
      // components: <BookingFrom />,
    },
    {
      id: 2,
      key: "payment",
      title: "Payment",
      desc: "Kindly follow the instructions below",
      // components: <PaymentForm />,
    },
    {
      id: 3,
      key: "completed",
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
  const { active, nextStep, prevStep, steps } = useSteps(dataStep);

  return (
    <div className="w-full flex flex-col items-center">
      <Steps steps={dataStep} activeStep={active}>
        {steps[active].key === "book_information" && (
          <>
            <BookingFrom />
            <Button onClick={nextStep} title="Continue to Book" />
            <Button
              onClick={prevStep}
              styles="bg-gray-100 text-gray-500"
              title="Cancel"
            />
          </>
        )}
        {steps[active].key === "payment" && (
          <>
            <PaymentForm />
            <Button onClick={nextStep} title="Continue to Book" />
            <Button
              onClick={prevStep}
              styles="bg-gray-100 text-gray-500"
              title="Back"
            />
          </>
        )}
        {steps[active].key === "completed" && (
          <>
            <Button onClick={nextStep} title="Completed" />
          </>
        )}
      </Steps>
    </div>
  );
}

export default Checkout;
