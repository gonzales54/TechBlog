import React from "react";

export interface Props extends React.ComponentPropsWithoutRef<"div"> {
  href: string;
  src: string;
  alt: string;
  createdAt: string;
  title: string;
  readingTime: number;
}
