import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  username: string;
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const user = await fetch(`${process.env.NEXT_APP_APIURL}/user/create`, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await user.json();

    if (data?.error) {
      return res.status(data?.statusCode || data?.status || 400).json(data);
    }
    return res.json(data);
  }
}
