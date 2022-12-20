import React from "react";

type IProps = {
  title: string;
  items: Array<string>;
};

const Footer = () => {
  const footerLinks: IProps[] = [
    {
      title: "For Beginner",
      items: [
        "New Account",
        "Start Booking A Room",
        "Use Payments",
        "Use Payments",
      ],
    },
    {
      title: "Explore Us",
      items: ["Our Carreers", "Privacy", "Terms & Condition"],
    },
    {
      title: "Connect Us",
      items: [
        "Support@staycation.id",
        "021 - 2208 - 1996",
        "Staycation, Kemang, Jakarta",
      ],
    },
  ];
  return (
    <div className="container mx-auto px-4 lg:px-32 py-5">
      <div className="py-4 flex flex-row justify-around lg:justify-between items-start">
        <div className="max-w-[258px]">
          <div className="text-blue-500 font-medium text-2xl flex">
            Stay<div className="text-blue-800">cation.</div>
          </div>
          <div className="font-light text-sm text-gray-400">
            We kaboom your beauty holiday instantly and memorable.
          </div>
        </div>
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <div className="font-medium text-blue-800">{item.title}</div>
              {item.items.map((title, index) => (
                <div
                  key={index}
                  className={`${
                    index > 0 ? "pt-2" : "pt-3"
                  } text-sm font-light text-gray-400`}
                >
                  {title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 font-light">
        Copyright {new Date().getFullYear()} All right reversed, Staycation
      </div>
    </div>
  );
};

export default Footer;
