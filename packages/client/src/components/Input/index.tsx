import { forwardRef, type InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  error?: string;
};

const cx = classNames.bind(styles);

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <label className={cx(styles.input__label)}>
        {label && <p className={cx(styles.input__label__text)}>{label}</p>}
        <input
          ref={ref}
          className={cx(styles.input, className)}
          {...props}
        />
        {error && <p className={cx(styles.input__label__error)}>{error}</p>}
      </label>
    );
  },
);

export default Input;
