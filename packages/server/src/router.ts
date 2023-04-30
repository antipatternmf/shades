import { Router } from 'express';
import { emotionRouter } from './emotion';
import { threadRouter } from './thread';
import { postRouter } from './post';
import { themeRouter } from './site-theme';
import { userThemeRouter } from './user-theme';
import { scoresRouter } from './scores';

const router: Router = Router();
emotionRouter(router);
threadRouter(router);
postRouter(router);
themeRouter(router);
userThemeRouter(router);
scoresRouter(router);

export default router;
