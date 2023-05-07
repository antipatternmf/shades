import { Router } from 'express';
import { authMiddleware } from '../core/middlewares';
import { LevelScoreController } from './level-score.controller';

export const createLevelScoreRouter = (router: Router) => {
  const levelScoreRouter = Router();

  levelScoreRouter
    .post('/', [authMiddleware], LevelScoreController.save)
    .delete('/', [authMiddleware], LevelScoreController.delete)
    .get('/all-totals', LevelScoreController.getAllTotals)
    .get('/:username', [authMiddleware], LevelScoreController.getLevelScores);

  router.use('/level-score', levelScoreRouter);
};
