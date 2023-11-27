// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Manager from "@/feature/Manager";
import { IArticle, IArticleInfo, PrevAndNextArticleData } from "@/types/IArticle";

interface Data {
  article: IArticle;
  prev: IArticleInfo | null;
  next: IArticleInfo | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const title = req.query.title as string;
  const { article, prev, next } = Manager.show(title.replace("/", ""));
  res.status(200).json({ article: article, prev: prev, next: next });
}
