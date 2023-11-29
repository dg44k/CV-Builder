import { FormProps } from "./types";

function Form (props : FormProps) {
    return (
        <form action={props.action} className={'form ' + props.className}>
            {props.children}
        </form>
    )
}

export default Form;