import Link from "next/link";

import { Props } from "../types/type";

const Card = (props: Props) => {
  const { href, createdAt, title, readingTime, className, type } = props;
  return (
    <li className={className}>
      <article>
        <Link
          href={`/${type}/${href}`}
          className="flex border-b py-6 text-gray-800 dark:border-gray-600"
        >
          {/*
          <div className="mr-6">
            <img
              src={src}
              className="h-20 w-20 rounded-lg object-cover"
              alt={alt}
            />
          </div>
          */}
          <div className="flex flex-1 flex-col">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
              {title}
            </h3>
            <div className="mt-auto flex items-center gap-x-2 text-xs text-gray-400 dark:text-gray-400">
              <time className="">{createdAt}</time>
              {type === "articles" && (
                <>
                  <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                  <p>約{readingTime}分で読めます</p>
                </>
              )}
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default Card;
