import classNames from 'classnames/bind';
import Button from 'components/Button';
import Input from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { selectUser, updateProfile } from 'reducers/user';
import { useAppDispatch, useAppSelector } from 'store';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateProfileFields, updateProfileSchema, type UpdateProfileFields } from './config';
import styles from '../styles.module.pcss';

type InfoEditFormProps = {
  goBack: () => void;
};

const cx = classNames.bind(styles);

export default function EditInfoForm({ goBack }: InfoEditFormProps) {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser.info);
  const isRequestPending = useAppSelector(selectUser.status) === 'pending';

  const { control, handleSubmit } = useForm<UpdateProfileFields>({
    resolver: yupResolver(updateProfileSchema),
    mode: 'onBlur',
  });

  const handleUpdateProfile: SubmitHandler<UpdateProfileFields> = async (data) => {
    const result = await dispatch(updateProfile(data));

    if (result.meta.requestStatus === 'fulfilled') {
      goBack();
    }
  };

  return (
    <>
      <form
        className={cx(styles.profilePageEditForm)}
        onSubmit={handleSubmit(handleUpdateProfile)}
      >
        {updateProfileFields.map(({ name, type, label }) => (
          <Controller
            key={name}
            name={name}
            defaultValue={userInfo?.[name] || ''}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                type={type}
                label={label}
                error={error?.message}
                {...field}
              />
            )}
          />
        ))}

        <Button
          variant="primary"
          type="submit"
        >
          Сохранить
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={goBack}
        >
          Отмена
        </Button>
      </form>
      {isRequestPending && <LoadingOverlay />}
    </>
  );
}
