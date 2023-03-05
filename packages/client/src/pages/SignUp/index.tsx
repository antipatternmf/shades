import classNames from 'classnames/bind';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputTmp from 'components/InputTmp';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from 'reducers/user';
import { useAppDispatch } from 'store/hooks';
import { SignUpFields, signUpFields, signUpSchema as schema } from 'pages/SignUp/config/config';
import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function SignUp() {
  const location = useLocation();

  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFields>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandle: SubmitHandler<SignUpFields> = (data) => {
    dispatch(signUp(data));
  };

  return (
    <div className={cx('container')}>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        {signUpFields.map(({ name, type }) => {
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
      <Link to="/sign-in" state={{ from: location }}>Have account? Sign in</Link>
    </div>
  );
}

export default SignUp;
