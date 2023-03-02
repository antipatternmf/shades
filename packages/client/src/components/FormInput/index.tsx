import React from 'react';
import styled from './index.module.pcss';

export type FormInputProps = {
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  disabled?: boolean;
};

function FormInput({
  type, name, value, placeholder, disabled = false,
}: FormInputProps) {
  return (
    <input
      className={styled.formInput}
      type={type}
      name={name}
      defaultValue={value || undefined}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default FormInput;
