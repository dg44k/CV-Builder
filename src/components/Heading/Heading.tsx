import { ForwardedRef, forwardRef } from "react";
import { HeadingProps } from "./types";

const Heading = forwardRef (function Heading(
  props: HeadingProps,
  ref: ForwardedRef<HTMLHeadingElement>
) {
  return (
    <h3 className={"headingBlockResume " + props.className} ref={ref}>
      {props.dataName}
    </h3>
  );
});

export default Heading;