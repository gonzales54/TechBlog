import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import matter from "gray-matter";

import {
  IArticleInfo,
  IArticleType,
  PrevAndNextArticleData,
} from "@/types/IArticle";
import removeMarkdownSyntax from "@/utility/removeMarkdownSyntax";

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

        const type = this.dirPath.split("/")[
          this.dirPath.split("/").length - 1
        ] as IArticleType["type"];

        const { data, content } = matter(markdownData);

        const removedMarkdownSyntax = removeMarkdownSyntax(content);

        const result: IArticleInfo = {
          ...(<IArticleInfo>data),
          href: fileName.replace(/.md/, ""),
          type: type,
          readingTime: Math.floor(removedMarkdownSyntax.length / 400),
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

    const type = this.dirPath.split("/")[
      this.dirPath.split("/").length - 1
    ] as IArticleType["type"];

    const { data, content } = matter(markdownData);

    const removedMarkdownSyntax = removeMarkdownSyntax(content);

    const result = {
      ...(<IArticleInfo>data),
      content: content,
      type: type,
      readingTime: Math.floor(removedMarkdownSyntax.length / 400),
    };

    return {
      article: result,
      prev: target[0].prev,
      next: target[0].next,
    };
  }
}

export default ManagerClass;
