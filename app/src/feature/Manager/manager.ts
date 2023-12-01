import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import matter from "gray-matter";

import { IArticleInfo, PrevAndNextArticleData } from "@/types/IArticle";

class ManagerClass {
  private dirPath: string;
  private articles: IArticleInfo[];

  constructor(dirPath: string) {
    this.dirPath = dirPath;
    const files: string[] = readdirSync(this.dirPath, "utf-8");

    this.articles = files
      .map((fileName) => {
        const markdownData: string = readFileSync(
          join(this.dirPath, `${fileName}`),
          "utf-8",
        );

        const { data } = matter(markdownData);

        const result: IArticleInfo = {
          ...(<IArticleInfo>data),
          href: fileName.replace(/.md/, ""),
        };

        return result;
      })
      .filter((article) => article.publish);
  }

  index() {
    const articles = this.articles;

    return articles;
  }

  show(slug: string) {
    const markdownData = readFileSync(
      join(this.dirPath, `${slug}.md`),
      "utf-8",
    );
    const currentArticleIndex = this.articles.findIndex(
      (article) => article.href === slug,
    );

    let finishedFlag = false;
    const target = this.articles
      .map(() => {
        if (this.articles.length === 1) {
          return {
            prev: null,
            next: null,
          };
        }
        if (!finishedFlag) {
          if (currentArticleIndex === 0) {
            finishedFlag = true;
            return {
              prev: null,
              next: this.articles[currentArticleIndex + 1],
            };
          }
          if (this.articles.length === currentArticleIndex + 1) {
            finishedFlag = true;
            return {
              prev: this.articles[currentArticleIndex - 1],
              next: null,
            };
          }
          return {
            prev: this.articles[currentArticleIndex - 1],
            next: this.articles[currentArticleIndex + 1],
          };
        }
      })
      .filter((v) => v) as PrevAndNextArticleData[];

    const { data, content } = matter(markdownData);

    const result = {
      ...(<IArticleInfo>data),
      content: content,
    };

    return {
      article: result,
      prev: target[0].prev,
      next: target[0].next,
    };
  }
}

export default ManagerClass;
