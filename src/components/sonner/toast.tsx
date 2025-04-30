'use client';

import { FC, useEffect } from 'react';

import { toast } from 'sonner';

export const ToastWarning: FC<{ messages: string[] }> = ({ messages }) => {
  useEffect(() => {
    messages.forEach((message) => toast.warning(message));
  }, [messages]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};
