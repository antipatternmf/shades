import { Router } from 'express';
import { emotionRouter } from './emotion';
import { threadRouter } from './thread';

const router: Router = Router();
emotionRouter(router);
threadRouter(router);

export default router;
