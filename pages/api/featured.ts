// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hotels } from "../../utils/types";
import { listHotels,MostPickHotels } from "../../data/hotels";

type Data = {
  hotels: Hotels[];
  mostPickHotels:Hotels[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ hotels: listHotels,mostPickHotels:MostPickHotels });
}
