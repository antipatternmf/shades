import type { CreateUserDto } from './dto';
import type { Request, Response } from 'express';
import { ErrorEnum, StatusCodeEnum } from '../core/enums';
import { UserService } from './user.service';

export class UserController {
  public static setUser = async (request: Request, response: Response) => {
    const { body } = request;
    const { email, login, avatar, phone, first_name, second_name, display_name }: CreateUserDto =
      body;

    try {
      const row = await UserService.createOrUpdateUser({
        email,
        login,
        avatar,
        phone,
        first_name,
        second_name,
        display_name,
      });

      response.status(StatusCodeEnum.SuccessCreated).json(row);
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };
}
