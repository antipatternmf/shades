import React, { FC } from "react";

import styled from "./FormInput.module.css";

export type FormInputProps = {
    type: string;
    name: string;
    placeholder: string;
};

const FormInput: FC<FormInputProps> = ({ type, name, placeholder }) => {
    return (
        <input className={styled.formInput} type={type} name={name} placeholder={placeholder} />
    );
};

export default FormInput;
