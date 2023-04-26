import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { UserThemeController } from './user-theme.controller';

export const userThemeRouter = (router: Router) => {
  const ThRouter: Router = Router();

  ThRouter.post('/', [authMiddleware], UserThemeController.create)
    .delete('/:id', [authMiddleware], UserThemeController.delete)
    .put('/:id', [authMiddleware], UserThemeController.update)
    .get('/', [authMiddleware], UserThemeController.getByUser);

  router.use('/user-theme', ThRouter);
};
