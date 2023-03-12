import { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.pcss';

type ActionButtonProps = Pick<
  HTMLAttributes<HTMLButtonElement>,
  'onClick' | 'children'
> & {
  logout?: boolean;
};

const cx = classNames.bind(styles);

export default function ActionButton({
  children,
  logout,
  onClick,
}: ActionButtonProps) {
  const classList = cx(
    styles.actionButton,
    logout && styles.actionButtonLogout,
  );

  return (
    <button
      className={classList}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
