import { ChangeEventHandler } from "react";

export type InputProps = {
  type: string;
  name?: string;
  myKey: string;
  accept?: string;
  placeholder?: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};
