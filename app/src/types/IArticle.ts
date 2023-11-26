export interface IArticleInfo {
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
