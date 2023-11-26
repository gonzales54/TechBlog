import useDarkMode from "../hooks/useDarkMode";
import { ContainerProps } from "../types/type";

import Header from "./Header";

const Container = (props: ContainerProps) => {
  const hooks = useDarkMode();

  return <Header {...props} {...hooks} />;
};

export default Container;
