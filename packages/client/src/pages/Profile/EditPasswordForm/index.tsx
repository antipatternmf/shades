import Button from 'components/Button';
import InfoField from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import classNames from 'classnames/bind';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { selectUser, updatePassword } from 'reducers/user';
import { useAppDispatch, useAppSelector } from 'store';
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePasswordFields, updatePasswordSchema, type UpdatePasswordFields } from './config';
import styles from '../style.module.pcss';

type EditPasswordFormProps = {
  goBack: () => void;
};

const cx = classNames.bind(styles);

function EditPasswordForm({ goBack }: EditPasswordFormProps) {
  const dispatch = useAppDispatch();
  const isRequestPending = useAppSelector(selectUser.status) === 'pending';

  const { control, handleSubmit } = useForm<UpdatePasswordFields>({
    resolver: yupResolver(updatePasswordSchema),
    mode: 'onBlur',
  });

  const handlePasswordUpdate: SubmitHandler<UpdatePasswordFields> = async (data) => {
    const result = await dispatch(updatePassword(data));

    if (result.meta.requestStatus === 'fulfilled') {
      goBack();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handlePasswordUpdate)}>
        <div className={cx(styles.profile__infoEdit)}>
          {updatePasswordFields.map(({ name, type, placeholder }) => (
            <Controller
              key={name}
              name={name}
              defaultValue=""
              control={control}
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <InfoField
                  type={type}
                  placeholder={placeholder}
                  error={error?.message}
                  innerRef={ref}
                  subtitle={placeholder}
                  {...rest}
                />
              )}
            />
          ))}
        </div>
        <div>
          <Button
            type="submit"
            variant="first"
          >
            Сохранить
          </Button>
          <Button
            type="button"
            variant="second"
            onClick={goBack}
          >
            Отмена
          </Button>
        </div>
      </form>
      {isRequestPending && <LoadingOverlay />}
    </>
  );
}

export default EditPasswordForm;
