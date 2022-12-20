import React from "react";
import Link from "next/link";

type IProps = {
  to: string;
  title: string;
};
export default function Navbar() {
  const links: IProps[] = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/browse",
      title: "Browse by",
    },
    {
      to: "/stories",
      title: "Stories",
    },
    {
      to: "/agents",
      title: "Agents",
    },
  ];

  return (
    <div className="shadow-sm">
      <div className="container mx-auto px-3 lg:px-32 items-center flex justify-between py-5">
        <Link href={"/"}>
          <div className="text-Nblue-400 font-semibold text-2xl flex">
            Stay<div className="text-Nblue-500">cation.</div>
          </div>
        </Link>
        <div className="hidden lg:block">
          {links.map((link, index) => (
            <Link
              key={index}
              className="pr-5 last:pr-0 text-Nblue-500"
              href={link.to}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
