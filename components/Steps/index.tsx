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
  children?: React.ReactNode;
};

function Step({ steps, activeStep, children }: IProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Numbers currentStep={activeStep} totalSteps={steps.length} />
        <div className="text-lg capitalize mt-[50px] text-[36px] text-Nblue-500 font-semibold">
          {steps[activeStep].title}
        </div>
        <div className="text-[18px] text-gray-400 font-light mt-4 capitalize">
          {steps[activeStep].desc}
        </div>
        <div className="mt-[50px]">{steps[activeStep].components}</div>
        {children}
      </div>
    </>
  );
}

export default Step;
