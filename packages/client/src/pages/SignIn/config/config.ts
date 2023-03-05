import { Fields, schema } from 'constants/schema';
import { HTMLInputTypeAttribute } from 'react';

export type SignInFields = Pick<Fields, 'login' | 'password'>;

export const signInFields: Array<{ name: keyof SignInFields, type: HTMLInputTypeAttribute }> = [
  { name: 'login', type: 'text' },
  { name: 'password', type: 'password' },
];

export const signInSchema = schema.pick(['login', 'password']);
