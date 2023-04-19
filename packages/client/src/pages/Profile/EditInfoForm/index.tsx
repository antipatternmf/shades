import classNames from 'classnames/bind';
import Button from 'components/Button';
import InfoField from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { selectUser, updateProfile } from 'reducers/user';
import { useAppDispatch, useAppSelector } from 'store';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateProfileFields, updateProfileSchema, type UpdateProfileFields } from './config';
import styles from '../style.module.pcss';

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
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className={cx(styles.profile__infoEdit)}>
          {updateProfileFields.map(({ name, type, placeholder }) => (
            <Controller
              key={name}
              name={name}
              defaultValue={userInfo?.[name] || ''}
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
