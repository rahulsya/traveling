import React from "react";
import Image from "next/image";

import Image1 from "../../assets/images/detail1.jpg";
import Input from "../Input";

function BookingFrom() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <Image
          alt="detail-hotel"
          src={Image1}
          className="rounded-md w-[420px] h-[270px]"
        />
        <div className="flex flex-row justify-between items-center mt-2">
          <div>
            <p className="font-medium text-Nblue-500">Podo Wee</p>
            <p className="font-light text-sm">Madiun, indoensia</p>
          </div>
          <div className="flex">
            <div className="font-medium text-Nblue-500">$40 USD </div>
            <p className="px-2">-</p>
            <div className="font-medium text-Nblue-500">2 nights </div>
          </div>
        </div>
      </div>
      <div className="w-[1px] bg-gray-200 mx-[50px]" />
      <div>
        <Input title="First Name" placeholder="Please Type Here" />
        <Input title="Last Name" placeholder="Please Type Here" />
        <Input title="Email Address" placeholder="Please Type Here" />
        <Input title="Phone Number" placeholder="Please Type Here" />
      </div>
    </div>
  );
}

export default BookingFrom;
