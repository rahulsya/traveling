import React, { useState } from "react";

type Steps = {
  id: number;
  key: string;
  title: string;
  desc?: string;
  components?: React.ReactNode;
};
function useSteps(steps: Steps[]) {
  const [active, setActive] = useState(0);

  const nextStep = () => {
    if (steps.length - 1 === active) return;
    setActive(active + 1);
  };

  const prevStep = () => {
    if (active < 1) return;
    setActive(active - 1);
  };

  return {
    active,
    setActive,
    nextStep,
    prevStep,
    steps,
  };
}

export default useSteps;
