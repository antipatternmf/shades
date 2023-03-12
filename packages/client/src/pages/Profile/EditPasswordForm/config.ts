import { Fields, schema } from 'constants/schema';

export type UpdatePasswordFields = Pick<
  Fields,
  'oldPassword' | 'newPassword' | 'confirmNewPassword'
>;

export const updatePasswordFields: FormFieldsArray<keyof UpdatePasswordFields> =
  [
    { name: 'oldPassword', type: 'password', label: 'Старый пароль' },
    { name: 'newPassword', type: 'password', label: 'Новый пароль' },
    {
      name: 'confirmNewPassword',
      type: 'password',
      label: 'Подтверждение пароль',
    },
  ];

export const updatePasswordSchema = schema.pick(
  updatePasswordFields.map(({ name }) => name),
);
