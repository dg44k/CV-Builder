import { FormProps } from "./types";
import { PropsWithChildren } from "react";

function Form({action, className, children }: PropsWithChildren<FormProps>) {
  return (
    <form action={action} className={"form " + className}>
      {children}
    </form>
  );
}

export default Form;
