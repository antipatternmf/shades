import classNames from 'classnames/bind';
import { useAppDispatch } from 'store/hooks';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFields, signUpFields, signUpSchema as schema } from 'pages/Entry/config';
import { signUp, userGet } from 'reducers/user';
import { Link, useNavigate } from 'react-router-dom';
import EntryField from 'components/Input';
import Button from 'components/Button';
import TopBar from 'components/TopBar';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function SignUp() {
  const title = 'Регистрация';

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<SignUpFields>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandle: SubmitHandler<SignUpFields> = async (data) => {
    try {
      await dispatch(signUp(data)).unwrap();
      await dispatch(userGet()).unwrap();
      navigate('/');
    } catch {
      //
    }
  };

  return (
    <div className={cx('container', 'shadow')}>
      <TopBar title={title} />

      <div className={cx(styles.entry)}>
        <form onSubmit={handleSubmit(onSubmitHandle)}>
          <div className={cx(styles.entry__list)}>
            {signUpFields.map(({ name, type, placeholder }) => {
              return (
                <Controller
                  key={name}
                  defaultValue=""
                  control={control}
                  render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                    <EntryField
                      type={type}
                      placeholder={placeholder}
                      error={error?.message}
                      innerRef={ref}
                      {...rest}
                    />
                  )}
                  name={name}
                />
              );
            })}
          </div>
          <div>
            <div className={cx(styles.entry__choiceBox)}>
              <Link
                className={cx(styles.entry__choiceLink)}
                to="/sign-in"
              >
                У вас уже есть аккаунт? Авторизуйтесь
              </Link>
            </div>
            <Button>Зарегистрироваться</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
