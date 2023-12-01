import { Layout } from "@/components/layout/Layout";
import { Pagination } from "@/components/layout/Pagination";
import usePagination from "@/components/layout/Pagination/hooks/usePagination";
import { Card } from "@/components/model/Card";
import Manager from "@/feature/SnippetManager";
import { IArticleInfo } from "@/types/IArticle";

interface Response {
  snippets: IArticleInfo[];
}

const SnippetTop = ({ snippets }: Response) => {
  const { scrollRef, articlesData, currentPage, ...props } =
    usePagination(snippets);

  return (
    <Layout title="R'IndiCode">
      <main
        className="flex min-h-[calc(100vh-49px)] flex-col px-5 pt-20 dark:bg-gray-900"
        ref={scrollRef}
      >
        <h2 className="mb-2  text-xl font-bold text-gray-800 dark:text-gray-200">
          記事一覧
        </h2>
        <ul className="mb-8 grid grid-cols-2">
          {articlesData.length > 0 &&
            articlesData[currentPage].map((article) => {
              return (
                <Card {...article} className="col-span-2" key={article.title} />
              );
            })}
        </ul>
        {articlesData.length > 1 && (
          <Pagination currentPage={currentPage} {...props} />
        )}
      </main>
    </Layout>
  );
};

export const getStaticProps = () => {
  const snippets = Manager.index();

  return {
    props: {
      snippets,
    },
  };
};

export default SnippetTop;
