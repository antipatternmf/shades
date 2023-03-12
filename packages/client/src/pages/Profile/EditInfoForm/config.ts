import { Fields, schema } from 'constants/schema';

export type UpdateProfileFields = Pick<
  Fields,
  'email' | 'login' | 'first_name' | 'second_name' | 'phone'
>;

export const updateProfileFields: FormFieldsArray<keyof UpdateProfileFields> = [
  { name: 'email', type: 'email', label: 'Почта' },
  { name: 'login', type: 'text', label: 'Логин' },
  { name: 'first_name', type: 'text', label: 'Имя' },
  { name: 'second_name', type: 'text', label: 'Фамилия' },
  { name: 'phone', type: 'phone', label: 'Телефон' },
];

export const updateProfileSchema = schema.pick(
  updateProfileFields.map(({ name }) => name),
);
