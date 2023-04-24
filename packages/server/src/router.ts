import { Router } from 'express';
import { emotionRouter } from './emotion';
import { threadRouter } from './thread';
import { postRouter } from './post';
import { themeRouter } from './site-theme';

const router: Router = Router();
emotionRouter(router);
threadRouter(router);
postRouter(router);
themeRouter(router);

export default router;
