type UserInfoKeys = 'email' | 'login' | 'first_name' | 'second_name' | 'phone';

export const infoRows: Array<{ key: UserInfoKeys; name: string }> = [
  {
    name: 'Почта',
    key: 'email',
  },
  {
    name: 'Логин',
    key: 'login',
  },
  {
    name: 'Имя',
    key: 'first_name',
  },
  {
    name: 'Фамилия',
    key: 'second_name',
  },
  {
    name: 'Телефон',
    key: 'phone',
  },
];
