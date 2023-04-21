import { Router } from 'express';
import { SiteThemeController } from './site-theme.controller';

export const SiteThemeRouter = (router: Router) => {
  const themesRouter: Router = Router();

  themesRouter
    .post('/', SiteThemeController.create)
    // .get('/', SiteThemeController.find);

  router.use('/theme', themesRouter);
};
