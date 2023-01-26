import React from "react";

type IProps = {
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

function Input({ title, onChange, placeholder }: IProps) {
  return (
    <div className="w-full mb-4">
      <div className="text-Nblue-500">{title}</div>
      <input
        onChange={onChange}
        className="w-[420px] py-3 px-4 rounded-md bg-gray-200 placeholder:text-gray-500"
        type="text"
        name=""
        id=""
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
