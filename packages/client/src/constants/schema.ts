import { SignUpRequest } from 'api/chat';
import { setLocale, StringSchema } from 'yup';
import * as yup from 'yup';

export interface Fields extends SignUpRequest {
  confirmPassword: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

type Required = StringSchema<string, yup.AnyObject, undefined, ''>;

type FieldsRules = { [key in Fields as string]: StringSchema };

const locales: { [key in Fields as string]: string } = {
  email: 'Почта',
  login: 'Логин',
  first_name: 'Имя',
  second_name: 'Фамилия',
  phone: 'Телефон',
  password: 'Пароль',
  confirmPassword: 'Повторите пароль',
  oldPassword: 'Старый пароль',
  newPassword: 'Новый пароль',
  confirmNewPassword: 'Повторите пароль',
};

setLocale({
  string: {
    min: ({ min, path }) =>
      `Поле "${locales[path]}" не должно быть меньше ${min}`,
    max: ({ max, path }) =>
      `Поле "${locales[path]}" не должно быть больше ${max}`,
  },
});

const required = yup.string().required('Поле обязательно').trim();

const nameValidateRules = (ctx: typeof required, name: string) => {
  return ctx
    .matches(
      /^[A-ZА-Яа-яa-z-]+$/g,
      `${name} может содержать латинские буквы, дефис`,
    )
    .min(3);
};

const loginValidateRules = (ctx: typeof required) => {
  return ctx
    .matches(
      /^[a-zA-Z\d_-]+$/g,
      'Логин может содержать латинские буквы, цифры, дефис, нижнее подчеркивание',
    )
    .min(3);
};

const passwordValidateRules = (ctx: Required) => {
  return ctx
    .min(8)
    .max(40)
    .matches(
      /[A-Z0-9]/g,
      'Пароль должен содержать одну заглавную букву и одну цифру',
    );
};

const spec: FieldsRules = {
  email: required.email('Введите валидный адрес'),
  login: loginValidateRules(required),
  password: passwordValidateRules(required),
  confirmPassword: required.oneOf([yup.ref('password')], 'Пароли не совпадают'),
  oldPassword: passwordValidateRules(required),
  newPassword: passwordValidateRules(required),
  confirmNewPassword: required.oneOf(
    [yup.ref('newPassword')],
    'Пароли не совпадают',
  ),
  phone: required
    .matches(/^(\+|\d)\d+$/g, 'Введите валидный номер')
    .min(10)
    .max(15),
  second_name: nameValidateRules(required, 'Фамилия'),
  first_name: nameValidateRules(required, 'Имя'),
};

export const schema = yup.object(spec);
