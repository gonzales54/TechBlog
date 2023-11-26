// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Manager from "@/feature/Manager";
import { IArticle } from "@/types/IArticle";

interface Data {
  article: IArticle;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const title = req.query.title as string;
  const article = Manager.show(title.replace("/", ""));
  res.status(200).json({ article: article });
}
