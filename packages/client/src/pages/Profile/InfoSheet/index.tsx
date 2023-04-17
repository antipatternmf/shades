import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { selectUser, userLogout } from 'reducers/user';
import { useAppSelector, useAppDispatch } from 'store';
import AvatarUploader from '../AvatarUploader';
import { infoRows } from './constants';
import InfoRow from '../InfoRow';
import styles from '../style.module.pcss';

type InfoSheetProps = {
  onEdit: () => void;
  onEditPassword: () => void;
};

const cx = classNames.bind(styles);

export default function InfoSheet({ onEdit, onEditPassword }: InfoSheetProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser.info);

  const ExitApp = () => {
    dispatch(userLogout());
    navigate(-1);
  };

  return (
    <>
      <AvatarUploader />
      <div className={cx(styles.profile__info)}>
        {infoRows.map(({ key, name }) => (
          <InfoRow
            key={key}
            name={name}
            value={userInfo?.[key] || ''}
          />
        ))}
      </div>
      <div className={cx(styles.profile__actions)}>
        <button
          className={cx(styles.profile__actionBtn)}
          onClick={onEdit}
        >
          Изменить данные
        </button>
        <button
          className={cx(styles.profile__actionBtn)}
          onClick={onEditPassword}
        >
          Изменить пароль
        </button>
        <button
          className={cx(styles.profile__actionBtn)}
          onClick={ExitApp}
        >
          Выйти
        </button>
      </div>
    </>
  );
}
