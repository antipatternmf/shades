import classNames from 'classnames/bind';
import Portal from 'hocs/Portal';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className={cx('modal-container')}>
        <div className={cx('modal-content')}>{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
