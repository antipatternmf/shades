import { Fields, schema } from 'constants/schema';

export type UpdatePasswordFields = Pick<
  Fields,
  'oldPassword' | 'newPassword' | 'confirmNewPassword'
>;

export const updatePasswordFields: FormFieldsArray<keyof UpdatePasswordFields> = [
  { name: 'oldPassword', type: 'password', placeholder: 'Старый пароль' },
  { name: 'newPassword', type: 'password', placeholder: 'Новый пароль' },
  { name: 'confirmNewPassword', type: 'password', placeholder: 'Повторите пароль' },
];

export const updatePasswordSchema = schema.pick(updatePasswordFields.map(({ name }) => name));
