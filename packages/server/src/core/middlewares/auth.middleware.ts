import type { NextFunction, Request, Response } from 'express';
import { UserService } from '../../user';
import { StatusCodeEnum } from '../enums';

export const authMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  const email = request.headers['Authorization'] as string | undefined;
  if (!email) {
    response.status(StatusCodeEnum.ClientErrorForbidden).send();
    return;
  }

  try {
    const user = await UserService.getOneOrCreateByEmail(email);
    if (!user) {
      response.status(StatusCodeEnum.ClientErrorForbidden).send();
      return;
    }

    request.body = {
      ...(request.body ?? {}),
      user,
    };
    next();
  } catch (error) {
    console.error(error);
    response.status(StatusCodeEnum.ClientErrorBadRequest).send();
    return;
  }
};
