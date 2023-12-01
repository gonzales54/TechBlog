import Link from "next/link";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import { HeaderProps } from "../types/type";

const Header = (props: HeaderProps) => {
  const { title, theme, handleTheme } = props;

  return (
    <header className="absolute top-0 w-full border-b bg-white dark:border-gray-600 dark:bg-gray-800">
      <div className="flex h-14 w-full items-center justify-between p-4 text-gray-800 dark:text-gray-100">
        <h1>
          <Link href={"/"} className="inline-block font-bold ">
            {title}
          </Link>
        </h1>
        <nav className="flex items-center gap-x-4">
          <ul className="flex items-center gap-x-2">
            <li className="text-sm text-gray-800 dark:text-gray-100">
              <Link href={"/snippets"}>Snippets</Link>
            </li>
          </ul>
          <button onClick={handleTheme}>
            {theme === "light" ? (
              <HiOutlineMoon className="h-5 w-5" />
            ) : (
              <HiOutlineSun className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
