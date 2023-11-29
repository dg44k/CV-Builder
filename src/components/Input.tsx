import { InputProps } from "./types";

function Input(props : InputProps) {
    return (
        <input type={props.type} 
                name = {props.name} 
                className="input" 
                key = {props.myKey} 
                accept={props.accept} 
                placeholder={props.placeholder}
                onChange={props.onChange} 
                required/>  
    )
}

export default Input;