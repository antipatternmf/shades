export type CreateUserDto = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name?: string;
  phone?: string;
  avatar?: string;
};
