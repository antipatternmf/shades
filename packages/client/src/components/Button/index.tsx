import { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.pcss';

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  type?: 'submit' | 'button';
  variant?: 'first' | 'second';
};

const cx = classNames.bind(styles);

function Button({ type = 'submit', variant = 'first', children, onClick }: ButtonProps) {
  const classList = cx(
    styles.button,
    'shadow',
    { [styles.button__first]: variant === 'first' },
    { [styles.button__second]: variant === 'second' },
  );

  return (
    <button
      className={classList}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
