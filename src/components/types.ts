import { ChangeEventHandler } from "react";

export type FormProps = {
    action: string;
    children: JSX.Element | JSX.Element[];
    className?: string;
}

export type InputProps = {
    type: string;
    name?: string;
    myKey: string;
    accept?: string;
    placeholder?: string;
    required?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export type OutputTextAreaProps = {
    classNameBlock ?: string;
    classNameHeading ?: string;
    classNameParagraph ?: string;
}

export type HeadingProps = {
    dataName ?: string;
    className ?: string;
}

export type DateAboutProps = {
    className: string;
    children: JSX.Element | JSX.Element[];
}

export type SpanProps = {
    children: string;
    className?: string;
}