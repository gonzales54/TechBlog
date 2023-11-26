import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Props } from "../types/type";

const Layout = (props: Props) => {
  const { title, children } = props;

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header title={title} />
      {children}
      <Footer title={title} />
    </div>
  );
};

export default Layout;
