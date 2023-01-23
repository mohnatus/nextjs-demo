import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function echo(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    message: req.query.message as string ?? "",
  });
}
