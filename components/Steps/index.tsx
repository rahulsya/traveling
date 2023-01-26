import React, { useState } from "react";
import Numbers from "./Numbers";

type IProps = {
  steps: {
    id: number;
    title: string;
    desc?: string;
    components?: React.ReactNode;
  }[];
  activeStep: number;
};

function Step({ steps, activeStep }: IProps) {
  const [active, setActive] = useState<number>(0);

  const nextStep = () => {
    if (steps.length - 1 === active) return;
    setActive(active + 1);
  };

  const prevStep = () => {
    if (active < 1) return;
    setActive(active - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Numbers currentStep={active} totalSteps={steps.length} />
        <div className="text-lg capitalize mt-[50px] text-[36px] text-Nblue-500 font-semibold">
          {steps[active].title}
        </div>
        <div className="text-[18px] text-gray-400 font-light mt-4 capitalize">
          {steps[active].desc}
        </div>
        <div className="mt-[50px]">{steps[active].components}</div>
        <button
          onClick={nextStep}
          className="mt-4 w-[300px] rounded-md py-3 bg-Nblue-400 text-white"
        >
          Continue To Book
        </button>
        <button
          onClick={prevStep}
          className="mt-4 w-[300px] rounded-md py-3 bg-gray-100 text-gray-500"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default Step;
