import classNames from 'classnames/bind';

import React, { InputHTMLAttributes, RefCallback } from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  innerRef?: RefCallback<HTMLInputElement>,
  error?: string,
}
// TODO This is a temporary component, remove later
export function InputTmp({
  type, error, innerRef, ...props
}:InputProps) {
  return (
    <div className={cx('container')}>
      <input type={type} {...props} ref={innerRef} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}
