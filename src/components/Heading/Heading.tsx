import { HeadingProps } from "./types";

export default function Heading(props: HeadingProps<HTMLHeadingElement>) {
  return (
    <h3 className={"headingBlockResume " + props.className} ref={props.ref}>
      {props.dataName}
    </h3>
  );
}
