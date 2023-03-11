import classNames from 'classnames/bind';
import LoadingOverlay from 'components/LoadingOverlay';
import { type ChangeEvent } from 'react';
import { selectUser, updateAvatar } from 'reducers/user';
import { useAppDispatch, useAppSelector } from 'store';
import styles from './styles.module.pcss';

const cx = classNames.bind(styles);

export default function AvatarUploader() {
  const dispatch = useAppDispatch();
  const avatarSrc = useAppSelector((state) => state.user.data?.avatar) || '';
  const isRequestPending = useAppSelector(selectUser.status) === 'pending';

  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file = files?.[0];

    if (file) {
      dispatch(updateAvatar(file));
    }
  };

  return (
    <>
      <label
        className={cx(styles.avatarUploader)}
        style={{ backgroundImage: `url(${avatarSrc})` }}
      >
        <input
          type="file"
          name="avatar"
          onChange={onUpload}
        />
        <p className={styles.avatarUploaderOverlay}>Изменить</p>
      </label>
      {isRequestPending && <LoadingOverlay />}
    </>
  );
}
