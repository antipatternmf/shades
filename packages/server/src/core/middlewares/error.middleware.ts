import type { NextFunction, Request, Response } from 'express';

export const errorMiddleware = async (
  _request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    await next();
  } catch (error) {
    console.error(error);
    response.status(500).send();
    return;
  }
};
