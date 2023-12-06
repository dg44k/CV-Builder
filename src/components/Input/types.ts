import { ChangeEventHandler, RefObject } from "react";

export type InputProps<T> = {
  type: string;
  name?: string;
  myKey: string;
  accept?: string;
  placeholder?: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  ref ?: RefObject<T>;
};
