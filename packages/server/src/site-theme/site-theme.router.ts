import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { SiteThemeController } from './site-theme.controller';

export const themeRouter = (router: Router) => {
  const ThRouter: Router = Router();

  ThRouter.post('/', [authMiddleware], SiteThemeController.create)
    .delete('/:id', [authMiddleware], SiteThemeController.delete)
    .put('/:id', [authMiddleware], SiteThemeController.update)
    .get('/:id', [authMiddleware], SiteThemeController.getOne)
    .get('/', [authMiddleware], SiteThemeController.getAll);

  router.use('/site-theme', ThRouter);
};
