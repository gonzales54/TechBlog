import { Props } from "../types/type";

const Footer = (props: Props) => {
  const { title } = props;

  return (
    <footer className="mt-auto border-t bg-gray-800 dark:border-gray-600">
      <div className="flex h-12 w-screen items-center justify-between p-4 text-gray-100">
        <p>
          <small>&copy; 2023 {title}. All Rights Reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
