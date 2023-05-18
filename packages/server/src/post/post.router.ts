import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { PostController } from './post.controller';

export const postRouter = (router: Router) => {
  const pRouter: Router = Router();

  pRouter
    .post('/', [authMiddleware], PostController.create)
    .delete('/:id', [authMiddleware], PostController.delete)
    .put('/:id', [authMiddleware], PostController.update)
    .get('/:id', [], PostController.getOne)
    .get('/thread/:id', [], PostController.getAll)
    .get('/answers/:id', [], PostController.getAnswers);

  router.use('/post', pRouter);
};
