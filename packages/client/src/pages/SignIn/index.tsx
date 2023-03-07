import classNames from 'classnames/bind';

import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { SignInFields, signInFields, signInSchema as schema } from 'pages/SignIn/config/config';
import { signIn, userGet } from 'reducers/user/thunks';
import { Link, useNavigate } from 'react-router-dom';
import { InputTmp } from 'components/InputTmp';
import styles from './style.module.pcss';

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
    <div className={cx('container')}>
      <Link to="/">Main</Link>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        {signInFields.map(({ name, type }) => {
          return (
            <Controller
              key={name}
              defaultValue=""
              control={control}
              render={({ field: { ref, ...rest }, fieldState: { error } }) => (
                <InputTmp
                  placeholder={name}
                  innerRef={ref}
                  error={error?.message}
                  type={type}
                  {...rest}
                />
              )}
              name={name}
            />
          );
        })}
        <input type="submit" />
      </form>
      <Link to="/sign-up">No account yet? Sign up</Link>
    </div>
  );
}

export default SignIn;
