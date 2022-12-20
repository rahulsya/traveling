import Image from "next/image";
import HotelItem from "../components/HotelItem";

import Banner from "../assets/images/banner.png";
import ImgMostPick from "../assets/images/mostpicked-1.jpg";
import ImgMostPick2 from "../assets/images/mostpicked-2.jpg";
import { ICtraveler, ICtreasure, ICcity } from "../assets/icons";
import { Hotels } from "../utils/types";

type IProps = {
  hotelLists: {
    hotels: Hotels[];
    mostPickHotels: Hotels[];
  };
};

export default function Home({ hotelLists }: IProps) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl lg:w-[422px] text-Nblue-500">
            Forget Busy Work, Start Next Vacation
          </h1>
          <div className="font-light text-gray-500 lg:w-[335px] my-5">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </div>
          <button className="self-start px-12 py-3 bg-Nblue-400 rounded-lg inline text-white shadow-lg shadow-blue-500/50">
            Show Me Now
          </button>
          <div className="flex lg:mt-24 mt-8">
            <div className="flex flex-col pr-12">
              <Image
                alt="ic-traveler"
                src={ICtraveler}
                width={32}
                height={32}
              />
              <div className="flex text-gray-500">
                <div className="font-semibold text-Nblue-500">8.000</div>
                travelers
              </div>
            </div>
            <div className="flex flex-col pr-12">
              <Image
                alt="ic-treasure"
                src={ICtreasure}
                width={32}
                height={32}
              />
              <div className="flex text-gray-500">
                <div className="font-semibold text-Nblue-500">400</div>
                treasure
              </div>
            </div>
            <div className="flex flex-col">
              <Image alt="ic-city" src={ICcity} width={32} height={32} />
              <div className="flex text-gray-500">
                <div className="font-semibold text-Nblue-500">1.200</div>
                cities
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image alt="banner-1" src={Banner} width={550} height={550} />
        </div>
      </div>
      {/* end banner  */}
      {/* start Section highlight products */}
      <div className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="hidden lg:block">
            <HotelItem data={hotelLists?.mostPickHotels[0]} />
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-2 gap-4">
            {hotelLists?.mostPickHotels.slice(1).map((item, index) => (
              <HotelItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hotels");
  const response = await res.json();

  return {
    props: { hotelLists: response },
  };
}
