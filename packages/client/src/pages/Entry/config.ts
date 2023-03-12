import { Fields, schema } from 'constants/schema';
import { HTMLInputTypeAttribute } from 'react';

export type SignInFields = Pick<Fields, 'login' | 'password'>;
export type SignUpFields = Pick<
  Fields,
  | 'email'
  | 'login'
  | 'first_name'
  | 'second_name'
  | 'phone'
  | 'password'
  | 'confirmPassword'
>;

export const signInFields: Array<{
  name: keyof SignInFields;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}> = [
  { name: 'login', type: 'text', placeholder: 'Логин' },
  { name: 'password', type: 'password', placeholder: 'Пароль' },
];

export const signUpFields: Array<{
  name: keyof SignUpFields;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}> = [
  { name: 'email', type: 'email', placeholder: 'Почта' },
  { name: 'login', type: 'text', placeholder: 'Логин' },
  { name: 'first_name', type: 'text', placeholder: 'Имя' },
  { name: 'second_name', type: 'text', placeholder: 'Фамилия' },
  { name: 'phone', type: 'phone', placeholder: 'Телефон' },
  { name: 'password', type: 'password', placeholder: 'Пароль' },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Повторите пароль',
  },
];

export const signInSchema = schema.pick(['login', 'password']);
export const signUpSchema = schema.pick(signUpFields.map(({ name }) => name));
