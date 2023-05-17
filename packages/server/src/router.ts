import { Router } from 'express';
import { emotionRouter } from './emotion';
import { threadRouter } from './thread';
import { postRouter } from './post';
import { themeRouter } from './site-theme';
import { userThemeRouter } from './user-theme';
import { createLevelScoreRouter } from './level-score';
import { connectUserRouter } from './user';

const router: Router = Router();
connectUserRouter(router);
emotionRouter(router);
threadRouter(router);
postRouter(router);
themeRouter(router);
userThemeRouter(router);
createLevelScoreRouter(router);

export default router;
