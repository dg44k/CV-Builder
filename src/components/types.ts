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

export type ConfigObject = {
    'picture': HTMLImageElement,
    'fullname': string,
    'speciality': string,
    'phone': string,
    'email': string,
    'aboutMe': string,
    'school': string,
    'university': string,
    'dateReceipt': string,
    'endDate': string,
    'workExperience' :string,
}