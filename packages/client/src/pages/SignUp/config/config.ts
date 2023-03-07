import { HTMLInputTypeAttribute } from 'react';
import { Fields, schema } from 'constants/schema';

export type SignUpFields = Fields;

export const signUpFields: Array<{ name: keyof SignUpFields, type: HTMLInputTypeAttribute }> = [
  { name: 'email', type: 'text' },
  { name: 'login', type: 'text' },
  { name: 'first_name', type: 'text' },
  { name: 'second_name', type: 'text' },
  { name: 'phone', type: 'phone' },
  { name: 'password', type: 'password' },
  { name: 'confirmPassword', type: 'password' },
];

export const signUpSchema = schema;
