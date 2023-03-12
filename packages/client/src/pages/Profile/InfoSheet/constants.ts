type UserInfoKeys = 'email' | 'login' | 'first_name' | 'second_name' | 'phone';

export const infoRows: Array<{ key: UserInfoKeys; name: string }> = [
  {
    name: 'Email',
    key: 'email',
  },
  {
    name: 'Login',
    key: 'login',
  },
  {
    name: 'First name',
    key: 'first_name',
  },
  {
    name: 'Second name',
    key: 'second_name',
  },
  {
    name: 'Phone',
    key: 'phone',
  },
];
