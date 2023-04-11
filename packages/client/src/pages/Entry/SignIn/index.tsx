import classNames from 'classnames/bind';
import { useAppDispatch } from 'store/hooks';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInFields, signInFields, signInSchema as schema } from 'pages/Entry/config';
import { signIn, userGet } from 'reducers/user/thunks';
import { Link, useNavigate } from 'react-router-dom';
import EntryTmp from 'components/InputTmp';
import Button from 'components/Button';
import Header from 'components/Header';
import { useState } from 'react';
import LoadingOverlay from 'components/LoadingOverlay';
import { goToYandexOAuth } from 'utils/oAuth';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function SignIn() {
  const title = 'Авторизация';

  const [shouldShowLoader, setShouldShowLoader] = useState(false);
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

  const handleOAuth = () => {
    setShouldShowLoader(true);

    return goToYandexOAuth();
  };

  return (
    <>
      <div className={cx(styles.sign)}>
        <Header title={title} />

        {/* <Link to="/">Main</Link> */}
        <div className={cx(styles.entry, 'container')}>
          <form onSubmit={handleSubmit(onSubmitHandle)}>
            <div className={cx(styles.entry__list)}>
              {signInFields.map(({ name, type, placeholder }) => {
                return (
                  <Controller
                    key={name}
                    defaultValue=""
                    control={control}
                    render={({ field: { ref, ...rest }, fieldState: { error } }) => (
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
                <Link
                  className={cx(styles.entry__choiceLink)}
                  to="/sign-up"
                >
                  У вас нет аккаунта? Зарегистрируйтесь
                </Link>

                <button
                  type="button"
                  className={cx(styles.entry__choiceLink)}
                  onClick={handleOAuth}
                >
                  Войти через Яндекс
                </button>
              </div>
              <Button>Авторизоваться</Button>
            </div>
          </form>
        </div>
      </div>
      {shouldShowLoader && <LoadingOverlay />}
    </>
  );
}

export default SignIn;
