import type { BaseRestService } from '../core/abstract';
import type { CreateUserDto } from './dto';
import { UserType } from '../core/types';
import { UserModel } from './user.model';

export class UserService implements BaseRestService {
  public static create = async (dto: CreateUserDto): Promise<UserType> => {
    const user = await UserModel.create(dto, { returning: true });
    return new UserType(user);
  };

  public static update = async (dto: CreateUserDto) => {
    const updatedUser = await UserModel.update(dto, {
      where: {
        login: dto.login,
      },
      returning: true,
    });

    return new UserType(updatedUser[1][0]);
  };

  public static delete = async (id: number): Promise<UserType> => {
    const user = await UserModel.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
    return new UserType(user);
  };

  public static getOne = async (id: number): Promise<UserType | null> => {
    const user = await UserModel.findByPk(id);
    return user ? new UserType(user) : null;
  };

  public static createOrUpdateUser = async (dto: CreateUserDto): Promise<UserType> => {
    const alreadyExists = !!(await UserModel.findOne({
      where: { login: dto.login },
    }));

    if (alreadyExists) {
      return UserService.update(dto);
    }

    return UserService.create(dto);
  };

  public static getOneByEmail = async (email: string): Promise<UserType | null> => {
    try {
      const user = await UserModel.findOne({
        where: {
          email: `${email}`,
        },
      });
      return user ? new UserType(user) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  public static getOneOrCreateByEmail = async (email: string): Promise<UserType | null> => {
    try {
      const [user] = await UserModel.findOrCreate({
        where: {
          email: `${email}`,
        },
        returning: true,
      });
      return user ? new UserType(user) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
