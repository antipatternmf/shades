import classNames from 'classnames/bind';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InputTmp } from 'components/InputTmp';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp, userGet } from 'reducers/user';
import { useAppDispatch } from 'store/hooks';
import { SignUpFields, signUpFields, signUpSchema as schema } from 'pages/SignUp/config/config';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function SignUp() {
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
    <div className={cx('container')}>
      <Link to="/">Main</Link>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        {signUpFields.map(({ name, type }) => {
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
      <Link to="/sign-in">Have account? Sign in</Link>
    </div>
  );
}

export default SignUp;
