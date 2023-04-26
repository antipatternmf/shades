import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { PostController } from './post.controller';

export const postRouter = (router: Router) => {
  const pRouter: Router = Router();

  pRouter
    .post('/', [authMiddleware], PostController.create)
    .delete('/:id', [authMiddleware], PostController.delete)
    .put('/:id', [authMiddleware], PostController.update)
    .get('/:id', [authMiddleware], PostController.getOne)
    .get('/thread/:id', [authMiddleware], PostController.getAll)
    .get('/answers/:id', [authMiddleware], PostController.getAnswers);

  router.use('/post', pRouter);
};
