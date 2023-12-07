export interface IArticleInfo extends IArticleType {
  href: string;
  src: string;
  alt: string;
  title: string;
  readingTime: number;
  createdAt: string;
  publish: boolean;
}

export interface IArticle extends IArticleInfo {
  content: string;
}

export interface IArticleType {
  type: "articles" | "snippets";
}

export interface PrevAndNextArticleData {
  prev: IArticleInfo | null;
  next: IArticleInfo | null;
}
