import React from "react";

type IProps = {
  pages: Array<String>;
};

function Breadcrumb({ pages }: IProps) {
  return (
    <div className="flex flex-row cursor-pointer">
      {pages?.map((page, index) => (
        <div
          className={`flex text-lg ${
            pages.length - 1 === index
              ? "font-medium text-Nblue-500"
              : "text-gray-400"
          }`}
          key={index}
        >
          <div>{page}</div>
          {pages.length - 1 !== index && <div className="px-2">/</div>}
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
