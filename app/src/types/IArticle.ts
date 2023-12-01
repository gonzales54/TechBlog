export interface IArticleInfo {
  href: string;
  src: string;
  alt: string;
  title: string;
  readingTime: number;
  createdAt: string;
  publish: boolean;
  type: "articles" | "snippets";
}

export interface IArticle extends IArticleInfo {
  content: string;
}

export interface PrevAndNextArticleData {
  prev: IArticleInfo | null;
  next: IArticleInfo | null;
}
