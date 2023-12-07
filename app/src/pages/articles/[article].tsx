import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import useDarkMode from "@/components/layout/Header/hooks/useDarkMode";
import { Layout } from "@/components/layout/Layout";
import DisplayMarkdown from "@/components/lib/DisplayMarkdown";
import Manager from "@/feature/Manager";
import { IArticle, PrevAndNextArticleData } from "@/types/IArticle";

interface ArticleType extends PrevAndNextArticleData {
  article: IArticle;
}

interface PathType {
  params: {
    article: string;
  };
}

const Content = ({ article, prev, next }: ArticleType) => {
  const { theme } = useDarkMode();

  return (
    <Layout title="R'IndiCode">
      <main className="flex min-h-[calc(100vh-49px)] w-full flex-col overflow-x-hidden px-5 pb-8 pt-20 dark:bg-gray-900">
        <article className="mb-4">
          <DisplayMarkdown article={article} theme={theme} />
        </article>
        <ul className="flex items-center justify-between gap-x-4 py-4">
          {prev && (
            <li className="mr-auto w-[calc(50%-8px)] rounded border dark:border-gray-400 dark:text-gray-200">
              <Link
                className="flex items-center gap-x-2 p-3"
                href={`/articles/${prev.href}`}
              >
                <HiChevronLeft className="h-8 w-5" />
                <p className="text-xs">{prev.title}</p>
              </Link>
            </li>
          )}
          {next && (
            <li className="ml-auto w-[calc(50%-8px)] rounded border dark:border-gray-400 dark:text-gray-200">
              <Link
                className="flex items-center gap-x-2 p-3"
                href={`/articles/${next.href}`}
              >
                <p className="text-xs">{next.title}</p>
                <HiChevronRight className="h-8 w-5" />
              </Link>
            </li>
          )}
        </ul>
      </main>
    </Layout>
  );
};

export const getStaticPaths = () => {
  const articles = Manager.index();

  const paths: PathType[] = articles.map((article) => ({
    params: {
      article: article.href,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }: PathType) => {
  const { article, prev, next } = Manager.show(params.article);

  return {
    props: {
      article: article,
      prev: prev,
      next: next,
    },
  };
};

export default Content;
