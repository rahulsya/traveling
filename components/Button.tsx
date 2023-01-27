import React from "react";

type IProps = {
  onClick: () => void;
  title: string;
  styles?: string;
};

function Button({ onClick, title, styles }: IProps) {
  const buttonTheme = styles ? styles : "bg-Nblue-400 text-white";
  return (
    <button
      onClick={onClick}
      className={`${buttonTheme} mt-4 w-[300px] rounded-md py-3`}
    >
      {title}
    </button>
  );
}

export default Button;
