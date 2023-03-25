import classNames from 'classnames/bind';

import React from 'react';
import styles from './styles.module.pcss';
import AvatarUploader from './AvatarUploader';

const cx = classNames.bind(styles);

export function Profile() {
  return (
    <div className={cx(styles.profilePage)}>
      <div className={cx(styles.profilePageContentContainerOuter)}>
        {/* <div className={cx(styles.profilePageHeader)} /> */}
        <div className={cx(styles.profilePageContentContainerInner)}>
          <AvatarUploader />
        </div>
      </div>
    </div>
  );
}
