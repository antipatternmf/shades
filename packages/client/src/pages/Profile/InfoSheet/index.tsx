import classNames from 'classnames/bind';
import { selectUser, userLogout } from 'reducers/user';
import { useAppSelector, useAppDispatch } from 'store';
import InfoRow from '../InfoRow';
import ActionButton from '../ActionButton';
import { infoRows } from './constants';
import styles from './styles.module.pcss';

type InfoSheetProps = {
  onEdit: () => void;
  onEditPassword: () => void;
};

const cx = classNames.bind(styles);

export default function InfoSheet({ onEdit, onEditPassword }: InfoSheetProps) {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser.info);

  return (
    <>
      <div className={cx(styles.infoRowsContainer)}>
        {infoRows.map(({ key, name }) => (
          <InfoRow
            key={key}
            name={name}
            value={userInfo?.[key] || ''}
          />
        ))}
      </div>

      <div className={cx(styles.actionsContainer)}>
        <ActionButton onClick={onEdit}>Изменить данные</ActionButton>
        <ActionButton onClick={onEditPassword}>Изменить пароль</ActionButton>
        <ActionButton
          logout
          onClick={() => dispatch(userLogout())}
        >
          Выйти
        </ActionButton>
      </div>
    </>
  );
}
