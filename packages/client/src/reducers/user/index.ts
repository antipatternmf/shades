export { name, reducer as userReducer } from './reducer';
export {
  signUp,
  signIn,
  userGet,
  userLogout,
  updateAvatar,
  updatePassword,
  updateProfile,
} from './thunks';
export * as selectUser from './selectors';
