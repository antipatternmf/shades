import { Router } from 'express';
import { UserController } from './user.controller';

export const connectUserRouter = (router: Router) => {
  const userRouter = Router();

  userRouter.post('/set-user', UserController.setUser);

  router.use('/user', userRouter);
};
