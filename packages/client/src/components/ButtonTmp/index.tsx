import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

type ButtonProps = {
  children?: ReactNode;
};

function ButtonTmp({ children }: ButtonProps) {
  return (
    <button
      className={cx(styles.button)}
      type="submit"
    >
      {children}
    </button>
  );
}

export default ButtonTmp;
