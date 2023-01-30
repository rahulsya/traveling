import React, { useState } from "react";

type formType = {
  initialValue: {
    [key: string]: string;
  };
  validate?: {};
};

function useForm({ initialValue, validate }: formType) {
  const [form, setForm] = useState(initialValue);

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return {
    form,
    handleChange,
    validate,
  };
}

export default useForm;
