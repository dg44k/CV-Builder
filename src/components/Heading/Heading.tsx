import { HeadingProps } from "./types";

export default function Heading(props: HeadingProps) {
  return (
    <h3 className={"headingBlockResume " + props.className}>
      {props.dataName}
    </h3>
  );
}
