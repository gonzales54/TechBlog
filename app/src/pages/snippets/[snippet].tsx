import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

import { Layout } from "@/components/layout/Layout";
import Manager from "@/feature/SnippetManager";
import { IArticle, PrevAndNextArticleData } from "@/types/IArticle";

interface SnippetType extends PrevAndNextArticleData {
  snippet: IArticle;
}

interface PathType {
  params: {
    snippet: string;
  };
}

const Content = ({ snippet, prev, next }: SnippetType) => {
  return (
    <Layout title="R'IndiCode">
      <main className="flex min-h-[calc(100vh-49px)] w-full flex-col overflow-x-hidden px-5 pb-8 pt-20 dark:bg-gray-900">
        <article className="mb-4">
          <Markdown
            allowedElements={["h1", "pre", "code"]}
            components={{
              h1(props) {
                return (
                  <div>
                    <div className="mt-auto flex items-center gap-x-2 text-xs text-gray-400 dark:text-gray-400">
                      <time className="">{snippet.createdAt}</time>
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
            {snippet.content}
          </Markdown>
        </article>
        <ul className="flex items-center justify-between gap-x-4 py-4">
          {prev && (
            <li className="mr-auto w-[calc(50%-8px)] rounded border dark:border-gray-400 dark:text-gray-200">
              <Link
                className="flex items-center gap-x-2 p-3"
                href={`/snippets/${prev.href}`}
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
                href={`/snippets/${next.href}`}
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
  const snippets = Manager.index();

  const paths: PathType[] = snippets.map((snippet) => ({
    params: {
      snippet: snippet.href,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }: PathType) => {
  const { article, prev, next } = Manager.show(params.snippet);

  return {
    props: {
      snippet: article,
      prev: prev,
      next: next,
    },
  };
};

export default Content;
