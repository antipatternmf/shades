import type { ChangeEvent } from 'react';

export function inputChangeHandlerFactory(setFn: (data: string) => void) {
  return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFn(event.target.value);
  };
}
