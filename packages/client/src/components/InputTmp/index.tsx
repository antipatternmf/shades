import classNames from 'classnames/bind';
import { InputHTMLAttributes, RefCallback } from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

interface InputTmpProps extends InputHTMLAttributes<HTMLInputElement> {
  subtitle?: string;
  innerRef?: RefCallback<HTMLInputElement>;
  error?: string;
}

function InputTmp({
  type,
  subtitle,
  error,
  innerRef,
  ...props
}: InputTmpProps) {
  return (
    <div className={cx(styles.field)}>
      {subtitle && (
        <span className={cx(styles.field__subtitle)}>{subtitle}</span>
      )}
      <input
        className={cx(styles.field__input)}
        type={type}
        {...props}
        ref={innerRef}
      />
      {error && <span className={cx(styles.field__error)}>{error}</span>}
    </div>
  );
}

export default InputTmp;
