import classNames from 'classnames/bind';

import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

import { Path, UseFormRegister } from 'react-hook-form';
import { Fields } from 'constants/schema';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<Fields>,
  register: UseFormRegister<Fields>,
  error?: string,
  type: HTMLInputTypeAttribute,
}
// TODO This is a temporary component, remove later
function InputTmp({
  register, label, type, error, ...props
}:InputProps) {
  return (
    <div className={cx('container')}>
      <input placeholder={label} {...register(label)} type={type} {...props} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}

export default InputTmp;
