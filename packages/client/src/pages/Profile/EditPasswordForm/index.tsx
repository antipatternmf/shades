import Button from 'components/Button';
import Input from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import classNames from 'classnames/bind';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { selectUser, updatePassword } from 'reducers/user';
import { useAppDispatch, useAppSelector } from 'store';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import {
  updatePasswordFields,
  updatePasswordSchema,
  type UpdatePasswordFields,
} from './config';
import styles from '../styles.module.pcss';

type EditPasswordFormProps = {
  goBack: () => void;
};

const cx = classNames.bind(styles);

export default function EditPasswordForm({ goBack }: EditPasswordFormProps) {
  const dispatch = useAppDispatch();
  const isRequestPending = useAppSelector(selectUser.status) === 'pending';

  const { control, handleSubmit } = useForm<UpdatePasswordFields>({
    resolver: yupResolver(updatePasswordSchema),
    mode: 'onBlur',
  });

  const handlePasswordUpdate: SubmitHandler<UpdatePasswordFields> = async (
    data,
  ) => {
    const result = await dispatch(updatePassword(data));

    if (result.meta.requestStatus === 'fulfilled') {
      goBack();
    }
  };

  return (
    <>
      <form
        className={cx(styles.profilePageEditForm)}
        onSubmit={handleSubmit(handlePasswordUpdate)}
      >
        {updatePasswordFields.map(({ name, type, label }) => (
          <Controller
            key={name}
            name={name}
            defaultValue=""
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