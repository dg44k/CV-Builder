import { InputProps } from "./types";

function Input(props: InputProps<HTMLInputElement>) {
  return (
    <input
      type={props.type}
      name={props.name}
      className="input"
      key={props.myKey}
      accept={props.accept}
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={props.ref}
      required
    />
  );
}

export default Input;
