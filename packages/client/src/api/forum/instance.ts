import { Configuration } from './configuration';
import { ThreadApi, PostApi, EmotionApi, UserApi } from './api';

const configuration = new Configuration({
  baseOptions: { withCredentials: false },
});

export const threadApi = new ThreadApi(configuration);

export const postsApi = new PostApi(configuration);

export const emotionsApi = new EmotionApi(configuration);

export const userApi = new UserApi(configuration);
