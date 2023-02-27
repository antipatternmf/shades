import React, { FC } from "react";

import styled from "./FormInput.module.css";

export type FormInputProps = {
    type: string;
    name: string;
    value: string;
    placeholder: string;
};

const FormInput: FC<FormInputProps> = ({ type, name, value, placeholder }) => {
    return (
        <input className={styled.formInput} type={type} name={name} value={value} placeholder={placeholder} disabled />
    );
};

export default FormInput;
