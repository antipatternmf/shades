import type { BaseRestService } from '../core/abstract';
import type { CreateUserDto } from './dto/create-user.dto';
import { UserType } from '../core/types/user.type';
import { UserModel } from './user.model';

export class UserService implements BaseRestService {
  public static create = async (dto: CreateUserDto): Promise<UserType> => {
    const user = await UserModel.create(dto, { returning: true });
    return new UserType(user);
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

  public static getOneOrCreateByEmail = async (email: string): Promise<UserType | null> => {
    const [user] = await UserModel.findOrCreate({
      where: {
        email: `%${email}%`,
      },
      returning: true,
    });
    return user ? new UserType(user) : null;
  };
}
