import React, { FC, PropsWithChildren } from 'react';

const InputError: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-sm font-medium text-rose-500">{children}</span>;
};

export default InputError;
