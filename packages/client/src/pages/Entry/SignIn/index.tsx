import classNames from 'classnames/bind';
import { useAppDispatch } from 'store/hooks';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { SignInFields, signInFields, signInSchema as schema } from 'pages/Entry/config';
import { signIn, userGet } from 'reducers/user/thunks';
import { Link, useNavigate } from 'react-router-dom';
import EntryTmp from 'components/InputTmp';
import ButtonTmp from 'components/ButtonTmp';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function SignIn() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm<SignInFields>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandle: SubmitHandler<SignInFields> = async (data) => {
    try {
      await dispatch(signIn(data)).unwrap();
      await dispatch(userGet()).unwrap();
      navigate('/');
    } catch {
      //
    }
  };

  return (
    <div className={cx('wrapper')}>
      <Link to="/">Main</Link>
      <div className={cx(styles.entry, 'container')}>
        <h2>Авторизация</h2>
        <form onSubmit={handleSubmit(onSubmitHandle)}>
          <div className={cx(styles.entry__list)}>
            {signInFields.map(({ name, type, placeholder }) => {
              return (
                <Controller
                  key={name}
                  defaultValue=""
                  control={control}
                  render={({
                    field: { ref, ...rest },
                    fieldState: { error },
                  }) => (
                    <EntryTmp
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
              <Link className={cx(styles.entry__choiceLink)} to="/sign-up">
                У вас нет аккаунта? Зарегистрируйтесь
              </Link>
            </div>
            <ButtonTmp>
              Авторизоваться
            </ButtonTmp>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
