import { DateUniversityProps } from "./types";
import { PropsWithChildren } from "react";

export default function DateUniversity({
  children,
  className,
}: PropsWithChildren<DateUniversityProps>) {
  return <div className={className}>{children}</div>;
}
