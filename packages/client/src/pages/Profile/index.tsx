import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Header from 'components/Header';
import styles from './styles.module.pcss';
import InfoSheet from './InfoSheet';
import EditInfoForm from './EditInfoForm';
import EditPasswordForm from './EditPasswordForm';
import AvatarUploader from './AvatarUploader';

const cx = classNames.bind(styles);

export default function Profile() {
  const title = 'Профиль';

  const [currentScreen, setCurrentScreen] = useState<
    'info' | 'edit-info' | 'edit-password'
  >('info');

  const returnToInfoScreen = () => setCurrentScreen('info');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'edit-info':
        return <EditInfoForm goBack={returnToInfoScreen} />;
      case 'edit-password':
        return <EditPasswordForm goBack={returnToInfoScreen} />;
      case 'info':
      default:
        return (
          <InfoSheet
            onEdit={() => setCurrentScreen('edit-info')}
            onEditPassword={() => setCurrentScreen('edit-password')}
          />
        );
    }
  };

  return (
    <div className={cx(styles.profilePage)}>
      <Header title={title} />

      <div
        className={cx(styles.profilePageContentContainerOuter, 'page-content')}
      >
        <div className={cx(styles.profilePageHeader)} />
        <div className={cx(styles.profilePageContentContainerInner)}>
          <div className={cx(styles.profilePageAvatarWrapper)}>
            <AvatarUploader />
          </div>

          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
