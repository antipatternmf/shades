import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { ScoresController } from './scores.controller';

export const scoresRouter = (router: Router) => {
  const sRouter: Router = Router();

  sRouter
    .post('/', [authMiddleware], ScoresController.create)
    .delete('/:id', [authMiddleware], ScoresController.delete)
    .get('/', [authMiddleware], ScoresController.getAll);

  router.use('/scores', sRouter);
};
