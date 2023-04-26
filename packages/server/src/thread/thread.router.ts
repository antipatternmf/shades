import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { ThreadController } from './thread.controller';

export const threadRouter = (router: Router) => {
  const ThRouter: Router = Router();

  ThRouter.post('/', [authMiddleware], ThreadController.create)
    .delete('/:id', [authMiddleware], ThreadController.delete)
    .put('/:id', [authMiddleware], ThreadController.update)
    .get('/:id', [authMiddleware], ThreadController.getOne)
    .get('/', [authMiddleware], ThreadController.getAll);

  router.use('/thread', ThRouter);
};
