import useDarkMode from "../hooks/useDarkMode";

type DarkModeHookType = ReturnType<typeof useDarkMode>;

export interface ContainerProps {
  title: string;
}

export interface HeaderProps extends DarkModeHookType, ContainerProps {}
