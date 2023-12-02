import { DateAboutProps } from "./types";
import { PropsWithChildren } from "react";

export default function DateAbout({
  className,
  children,
}: PropsWithChildren<DateAboutProps>) {
  return <div className={className}>{children}</div>;
}
