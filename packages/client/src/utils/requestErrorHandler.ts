import { AxiosError } from 'axios';
import { BadRequestError } from 'api/chat';

export const requestErrorHandler = (e: unknown): string => {
  const err = e as AxiosError<BadRequestError>;
  const error: BadRequestError = { reason: 'error' };
  if (err.response?.data) {
    error.reason = err.response.data.reason;
  }
  return error.reason;
};
