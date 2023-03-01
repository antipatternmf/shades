import { sliceName as user, userReducer } from '../reducers/user';

export const rootReducer = {
  [user]: userReducer,
};
