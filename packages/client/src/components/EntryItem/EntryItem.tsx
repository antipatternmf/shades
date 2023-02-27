import React, { FC } from "react";

import styled from "./EntryItem.module.css";

import FormInputE, { FormInputProps } from "../FormInput/FormInputE";

const EntryItem: FC<FormInputProps> = ({ type, name, placeholder }) => {
    return (
        <li className={styled.entry__item}>
            <FormInputE type={type} name={name} placeholder={placeholder} />
            <span className={styled.entry__error}>
                Error
            </span>
        </li>
    );
};

export default EntryItem;
