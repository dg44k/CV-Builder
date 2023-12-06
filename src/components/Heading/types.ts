import { RefObject } from "react";

export type HeadingProps<T> = {
  dataName?: string;
  className?: string;
  ref?: RefObject<T> | null;
};
