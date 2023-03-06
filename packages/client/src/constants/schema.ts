import { SignUpRequest } from 'api/chat';
import { setLocale, StringSchema } from 'yup';
import * as yup from 'yup';

export interface Fields extends SignUpRequest {
  confirmPassword: string
}

type FieldsRules = { [key in Fields as string]: StringSchema };

const locales: { [key in Fields as string]: string } = {
  email: 'Email',
  login: 'Логин',
  first_name: 'Имя',
  second_name: 'Фамилия',
  phone: 'Номер телефона',
  password: 'Пароль',
  confirmPassword: 'Пароль',
};

setLocale({
  string: {
    min: ({ min, path }) => `Поле "${locales[path]}" не должно быть меньше ${min}`,
    max: ({ max, path }) => `Поле "${locales[path]}" не должно быть больше ${max}`,
  },
});

const required = yup.string().required('Поле обязательно').trim();

const nameValidateRules = (ctx: typeof required, name: string) => {
  return ctx.matches(/^[A-ZА-Яа-яa-z-]+$/g, `${name} может содержать латинские буквы, дефис`).min(3);
};

const loginValidateRules = (ctx: typeof required) => {
  return ctx.matches(/^[a-zA-Z\d_-]+$/g, 'Логин может содержать латинские буквы, цифры, дефис, нижнее подчеркивание').min(3);
};

const spec: FieldsRules = {
  email: required.email('Введите валидный адрес'),
  login: loginValidateRules(required),
  password: required.min(8).max(40).matches(/[A-Z0-9]/g, 'Пароль должен содержать одну заглавную букву и одну цифру'),
  confirmPassword: required.oneOf([yup.ref('password')], 'Пароль не совпадают'),
  phone: required.matches(/^(\+|\d)\d+$/g, 'Ввеедите валидный номер').min(10).max(15),
  second_name: nameValidateRules(required, 'Фамилия'),
  first_name: nameValidateRules(required, 'Имя'),
};

export const schema = yup.object(spec);
