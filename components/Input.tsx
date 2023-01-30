import React from "react";

type IProps = {
  title: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string | "text";
  name: string;
  value: string;
};

function Input({ title, onChange, placeholder, type, name, value }: IProps) {
  return (
    <div className="mb-4">
      <div className="text-Nblue-500">{title}</div>
      <input
        onChange={onChange}
        name={name}
        className="w-[420px] py-3 px-4 rounded-md bg-gray-200 placeholder:text-gray-500"
        type={type}
        id=""
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
