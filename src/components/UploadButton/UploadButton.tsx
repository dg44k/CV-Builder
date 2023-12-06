import { UploadButtonProps } from "./types";
import { PropsWithChildren } from "react";

export default function UploadButton({
  children,
  className,
}: PropsWithChildren<UploadButtonProps>) {
  return <button className={className}>{children}</button>;
}
