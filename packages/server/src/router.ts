import { Router } from 'express';
import { emotionRouter } from './emotion';
import { threadRouter } from './thread';
import { postRouter } from './post';

const router: Router = Router();
emotionRouter(router);
threadRouter(router);
postRouter(router);

export default router;
