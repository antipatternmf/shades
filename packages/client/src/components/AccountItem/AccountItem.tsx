import React, { FC } from "react";

import styled from "./AccountItem.module.css";

import FormInputA, { FormInputProps } from "../FormInput/FormInputA";

const AccountItem: FC<FormInputProps> = ({ type, name, value, placeholder }) => {
    return (
        <li className={styled.account__item}>
            <label className={styled.account__label}>
                {placeholder}
            </label>
            <FormInputA type={type} name={name} value={value} placeholder={placeholder} />
        </li>
    );
};

export default AccountItem;
