import { OutputTextAreaProps } from "./types";


export default function OutputTextAreaProps (props : OutputTextAreaProps) {
    return (
        <div className={props.classNameBlock}>
            <h3 className={props.classNameHeading}></h3>
            <p className={props.classNameParagraph}></p>
        </div>
    );
}