import { SpanProps } from "./types";


export default function Span (props: SpanProps) {
    return (
        <span className={props.className}>{props.children}</span>
    );
}