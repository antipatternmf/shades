import { Router } from 'express';
import { emotionRouter } from './emotion/emotion.router';

const router: Router = Router();
emotionRouter(router);

export default router;
