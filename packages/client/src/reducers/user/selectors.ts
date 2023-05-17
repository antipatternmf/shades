import { RootState } from 'store/store';

const selectState = (state: RootState) => state.user;

export const isAuth = (state: RootState) => selectState(state).isAuth;
export const info = (state: RootState) => selectState(state).data;
export const status = (state: RootState) => selectState(state).status;
export const email = (state: RootState) => selectState(state).data?.email;
