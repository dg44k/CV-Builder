import { DateAboutProps } from "./types";

export default function DateAbout (props: DateAboutProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}