import classNames from 'classnames/bind';
import { useState } from 'react';
import TopBar from 'components/TopBar';
import InfoSheet from './InfoSheet';
import EditInfoForm from './EditInfoForm';
import EditPasswordForm from './EditPasswordForm';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

const Titles = {
  info: 'Профиль',
  'edit-info': 'Изменить данные',
  'edit-password': 'Изменить пароль',
};

export default function Profile() {
  const [currentScreen, setCurrentScreen] = useState<'info' | 'edit-info' | 'edit-password'>(
    'info',
  );

  const title = Titles[currentScreen];

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
    <div className={cx('container', 'shadow')}>
      <TopBar title={title} />
      <div className={cx(styles.profile, currentScreen !== 'info' ? styles.profile__edit : '')}>
        {renderScreen()}
      </div>
    </div>
  );
}
