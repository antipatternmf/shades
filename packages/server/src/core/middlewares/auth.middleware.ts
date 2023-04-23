import type { NextFunction, Request, Response } from 'express';
import { UserService } from '../../user/user.service';

export const authMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  const { email } = request.headers;
  if (!email) {
    response.status(403);
  }

  try {
    const user = UserService.getOneOrCreateByEmail(email as string);
    if (!user) {
      response.status(403);
    }

    request.body.user = user;
    next();
  } catch (error) {
    response.status(500);
  }
};
