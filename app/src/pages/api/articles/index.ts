// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Manager from "@/feature/Manager";
import { IArticleInfo } from "@/types/IArticle";

interface Data {
  articles: IArticleInfo[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const articles = Manager.index();
  res.status(200).json({ articles: articles });
}
