import { SpanProps } from "./types";
import { PropsWithChildren } from "react";

export default function Span({children, className}: PropsWithChildren<SpanProps>) {
  return <span className={className}>{children}</span>;
}
