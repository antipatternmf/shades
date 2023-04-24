import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { EmotionController } from './emotion.controller';

export const emotionRouter = (router: Router) => {
  const emoRouter: Router = Router();

  emoRouter
    .post('/', [authMiddleware], EmotionController.create)
    .delete('/:id', [authMiddleware], EmotionController.delete);

  router.use('/emotion', emoRouter);
};
