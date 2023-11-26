import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

import { Layout } from "@/components/layout/Layout";
import Manager from "@/feature/Manager";
import { IArticle } from "@/types/IArticle";

interface ArticleType {
  article: IArticle;
}

interface PathType {
  params: {
    article: string;
  };
}

const Content = ({ article }: ArticleType) => {
  console.log(article);

  return (
    <Layout title="R'IndiCode">
      <main className="flex min-h-[calc(100vh-49px)] w-full flex-col overflow-x-hidden px-5 pb-8 pt-20 dark:bg-gray-900">
        <article>
          <Markdown
            components={{
              h1(props) {
                return (
                  <div>
                    <div className="mt-auto flex items-center gap-x-2 text-xs text-gray-400 dark:text-gray-400">
                      <time className="">{article.createdAt}</time>
                      <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                      <p>{article.readingTime}分で読めます</p>
                    </div>
                    <h1 {...props} />
                  </div>
                );
              },
              img({ src, alt, ...props }) {
                return (
                  <img
                    src={src}
                    alt={alt}
                    className="h-64 w-full object-cover"
                    {...props}
                  />
                );
              },
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    PreTag="div"
                    language={match[1]}
                    style={vscDarkPlus}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
            className="prose prose-sm prose-gray max-w-none dark:prose-invert prose-pre:bg-white prose-pre:p-0 prose-thead:bg-gray-200 prose-th:px-2 prose-th:py-3 prose-td:px-2 dark:prose-pre:bg-gray-900 dark:prose-thead:bg-gray-800"
            remarkPlugins={[remarkGfm]}
          >
            {article.content}
          </Markdown>
        </article>
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
  const article = Manager.show(params.article);

  return {
    props: {
      article: article,
    },
  };
};

export default Content;
