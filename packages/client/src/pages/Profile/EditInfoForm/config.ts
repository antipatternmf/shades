import { Fields, schema } from 'constants/schema';

export type UpdateProfileFields = Pick<
  Fields,
  'email' | 'login' | 'first_name' | 'second_name' | 'phone'
>;

export const updateProfileFields: FormFieldsArray<keyof UpdateProfileFields> = [
  { name: 'email', type: 'email', placeholder: 'Почта' },
  { name: 'login', type: 'text', placeholder: 'Логин' },
  { name: 'first_name', type: 'text', placeholder: 'Имя' },
  { name: 'second_name', type: 'text', placeholder: 'Фамилия' },
  { name: 'phone', type: 'phone', placeholder: 'Телефон' },
];

export const updateProfileSchema = schema.pick(updateProfileFields.map(({ name }) => name));
