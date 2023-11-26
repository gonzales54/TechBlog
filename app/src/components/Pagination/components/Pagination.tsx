import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { Props } from "../types/type";

const Pagination = (props: Props) => {
  const { currentPage, pageLength, nextPage, prevPage } = props;

  return (
    <ul className="mb-6 mt-auto flex items-center justify-center gap-x-4 text-gray-700 dark:text-gray-200">
      <li>
        <button
          className="h-8 w-8 rounded-md border border-gray-400 dark:border-gray-300"
          onClick={prevPage}
        >
          <HiChevronLeft className="mx-auto h-4 w-4" />
        </button>
      </li>
      <li>
        <p>
          {currentPage + 1} / {pageLength}
        </p>
      </li>
      <li>
        <button
          className="block h-8 w-8 rounded-md border border-gray-400 dark:border-gray-200"
          onClick={nextPage}
        >
          <HiChevronRight className="mx-auto h-4 w-4" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
