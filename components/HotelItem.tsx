import Image from "next/image";
import { Hotels } from "../utils/types";
import ImgMostPick from "../assets/images/mostpicked-1.jpg";

type IProps = {
  data?: Hotels;
};

function HotelItem({ data }: IProps) {
  return (
    <div className={`relative rounded-lg`}>
      <div className="absolute right-0 p-2 bg-Npink-500 rounded-lg text-white">
        {data?.price} per night
      </div>
      <div className="w-full absolute bottom-0 bg-gradient-to-t from-gray-600 p-4 text-white rounded-lg">
        <div>{data?.country}</div>
        <div>{data?.city}</div>
      </div>
      <Image
        className={`h-full w-full object-cover rounded-lg`}
        alt={`${data?.name}`}
        src={data?.imageUrl}
      />
    </div>
  );
}

export default HotelItem;
