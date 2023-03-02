import React from 'react';
import FormInput, { FormInputProps } from '../FormInput';
import styled from './index.module.pcss';

function EntryItem({
  type, name, value, placeholder,
}: FormInputProps) {
  return (
    <li className={styled.entry__item}>
      <FormInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      <span className={styled.entry__error}>
        Error
      </span>
    </li>
  );
}

export default EntryItem;
