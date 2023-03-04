import { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  type?: 'submit' | 'button';
  variant?: 'primary' | 'secondary';
  className?: string;
};

const cx = classNames.bind(styles);

export default function Button({
  children,
  onClick,
  variant,
  className,
  type,
}: ButtonProps) {
  const classList = cx(
    styles.button,
    { [styles.button_primary]: variant === 'primary' },
    { [styles.button_secondary]: variant === 'secondary' },
    className,
  );

  return (
    <button
      className={classList}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
