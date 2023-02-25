import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx('container')}>
      Profile
    </div>
  );
}

export default Profile;
