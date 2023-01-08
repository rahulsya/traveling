import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import Breadcrumb from "../../components/Breadcrumb";
import ImgDetail1 from "../../assets/images/detail1.jpg";
import ImgDetail2 from "../../assets/images/detail2.jpg";
import ImgDetail3 from "../../assets/images/detail3.jpg";
import BookingFormDate from "../../components/BookingFormDate";

function HotelDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className="flex justify-between">
        <Breadcrumb pages={["Home", "House Details"]} />
        <div className="flex flex-col items-center">
          <div className="text-3xl font-semibold text-Nblue-500">
            Village Cool
          </div>
          <div className="text-md text-gray-400">Bogor, indonesia</div>
        </div>
        <div className="hidden lg:block"></div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-gray-400 rounded-md">
            <Image
              alt="detail-mmm"
              src={ImgDetail1}
              className="object-cover h-[500px]  w-full rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              alt="detail-mmm"
              src={ImgDetail2}
              className=" object-cover h-[240px] rounded-md"
            />
            <Image
              alt="detail-mmm"
              src={ImgDetail3}
              className=" object-cover h-[240px] rounded-md"
            />
          </div>
        </div>
      </div>
      {/* details */}
      <div className="flex justify-between mt-12">
        <div className="flex flex-col">
          <div className="font-medium text-lg text-Nblue-500">
            About the place
          </div>
          <div className="w-[600px] font-light text-gray-400 ">
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits the use of
            repetition and understated development. Minimal techno is thought to
            have been originally developed in the early 1990s by Detroit-based
            producers Robert Hood and Daniel Bell.
          </div>
        </div>
        <div className="w-[487px] p-6 border-2 rounded-md">
          <BookingFormDate />
        </div>
      </div>
    </>
  );
}

export default HotelDetail;
