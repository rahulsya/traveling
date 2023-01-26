import React from "react";

function Numbers({
  totalSteps,
  currentStep,
}: {
  totalSteps: number;
  currentStep: number;
}) {
  return (
    <div className="flex flex-row items-center">
      {[...Array(totalSteps)].map((u, i) => {
        return (
          <>
            {currentStep > i || totalSteps - 1 == currentStep ? (
              <div className={`bg-green-500 text-white px-5 py-3 rounded-full`}>
                {i + 1}
              </div>
            ) : (
              <div
                className={`${
                  currentStep === i ? "border-4 bg-white" : "bg-gray-300 "
                } px-5 py-3 rounded-full`}
              >
                {i + 1}
              </div>
            )}

            {totalSteps - 1 !== i && (
              <div className="w-12 lg:w-32 h-[2px] bg-gray-400" />
            )}
          </>
        );
      })}
    </div>
  );
}

export default Numbers;
