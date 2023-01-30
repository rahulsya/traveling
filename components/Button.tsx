import React from "react";

type IProps = {
  onClick?: () => void;
  title: string;
  styles?: string;
  disable?: boolean | false;
};

function Button({ onClick, title, styles, disable }: IProps) {
  const buttonTheme = styles ? styles : "bg-Nblue-400 text-white";
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`${buttonTheme} mt-4 w-[300px] rounded-md py-3`}
    >
      {title}
    </button>
  );
}

export default Button;
