import React from 'react';
import FormInput, { FormInputProps } from '../FormInput';
import styled from './index.module.pcss';

function ProfileItem({
  type, name, value, placeholder, disabled,
}: FormInputProps) {
  return (
    <li className={styled.profile__item}>
      <label className={styled.profile__label}>
        {placeholder}
      </label>
      <FormInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
    </li>
  );
}

export default ProfileItem;
