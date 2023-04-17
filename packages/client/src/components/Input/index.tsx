import classNames from 'classnames/bind';
import { InputHTMLAttributes, RefCallback } from 'react';
import styles from './style.module.pcss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  subtitle?: string;
  innerRef?: RefCallback<HTMLInputElement>;
  error?: string;
}

const cx = classNames.bind(styles);

function Input({ type, subtitle, error, innerRef, ...props }: InputProps) {
  return (
    <label
      className={cx(
        styles.field,
        'shadow',
        subtitle && styles.field__profile,
        error && styles.field__errorField,
      )}
    >
      {subtitle && (
        <div className={cx(styles.field__subtitle)}>
          <span>{subtitle}</span>
        </div>
      )}
      <input
        className={cx(styles.field__input)}
        type={type}
        {...props}
        ref={innerRef}
      />
      {error && <span className={cx(styles.field__errorTxt)}>{error}</span>}
    </label>
  );
}

export default Input;
