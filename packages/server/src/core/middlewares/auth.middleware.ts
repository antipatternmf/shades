import type { NextFunction, Request, Response } from 'express';
import { UserService } from '../../user/user.service';

export const authMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  const email = request.headers['shades-email'] as string | undefined;
  if (!email) {
    response.status(403).send();
    return;
  }

  try {
    const user = await UserService.getOneOrCreateByEmail(email);
    if (!user) {
      response.status(403).send();
      return;
    }

    request.body = {
      ...(request.body ?? {}),
      user,
    };
    next();
  } catch (error) {
    console.error(error);
    response.status(500).send();
    return;
  }
};
