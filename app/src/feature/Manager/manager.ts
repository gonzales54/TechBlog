import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import matter from "gray-matter";

import { IArticleInfo } from "@/types/IArticle";

class ManagerClass {
  dirPath: string;

  constructor(dirPath: string) {
    this.dirPath = dirPath;
  }

  index() {
    const files: string[] = readdirSync(this.dirPath, "utf-8");
    const articles = files
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

    return articles;
  }

  show(slug: string) {
    const markdownData = readFileSync(
      join(this.dirPath, `${slug}.md`),
      "utf-8",
    );

    const { data, content } = matter(markdownData);

    const result = {
      ...(<IArticleInfo>data),
      content: content,
    };

    return result;
  }
}

export default ManagerClass;
