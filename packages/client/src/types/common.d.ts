import { HTMLInputTypeAttribute } from 'react';

declare global {
  type Status = 'fulfilled' | 'pending' | 'rejected' | null;
  type FormFieldsArray<K> = Array<{
    name: K;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    label?: string;
  }>;
}

export {};
