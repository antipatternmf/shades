import classNames from 'classnames/bind';

import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import InputTmp from 'components/InputTmp';
import { SignInFields, signInFields, signInSchema as schema } from 'pages/SignIn/config/config';
import { signIn } from 'reducers/user/thunks';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function SignIn() {
  const location = useLocation();

  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<SignInFields>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandle: SubmitHandler<SignInFields> = (data) => {
    dispatch(signIn(data));
  };

  return (
    <div className={cx('container')}>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        {signInFields.map(({ name, type }) => {
          return (
            <InputTmp
              key={name}
              label={name}
              error={errors[name]?.message}
              register={register}
              type={type}
            />
          );
        })}
        <input type="submit" />
      </form>
      <Link to="/sign-up" state={{ from: location }}>No account yet? Sign up</Link>
    </div>
  );
}

export default SignIn;
