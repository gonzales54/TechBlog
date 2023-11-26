import { useCallback, useMemo, useRef, useState } from "react";

import { IArticleInfo } from "@/types/IArticle";

const usePagination = (propsArticleArray: IArticleInfo[]) => {
  const scrollRef = useRef<HTMLElement>(null);
  const [articles] = useState<IArticleInfo[]>(propsArticleArray);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const convertedArticles = useMemo(() => {
    const newArr: IArticleInfo[][] = [];
    const cutNumber = 10;
    if (articles.length < 10) {
      return [articles];
    }

    for (let i = 1; i < Math.floor(articles.length); i += cutNumber) {
      newArr.push(articles.slice(i, i + cutNumber));
    }

    return newArr;
  }, [articles]);

  const nextPage = useCallback(() => {
    setCurrentPage((page) => {
      if (convertedArticles.length !== page + 1) {
        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return page + 1;
      }
      return page;
    });
  }, [convertedArticles.length]);

  const prevPage = useCallback(() => {
    setCurrentPage((page) => {
      if (page > 0) {
        return page - 1;
      }
      return page;
    });
  }, []);

  return {
    scrollRef,
    currentPage,
    pageLength: convertedArticles.length,
    articlesData: convertedArticles,
    prevPage,
    nextPage,
  };
};

export default usePagination;
